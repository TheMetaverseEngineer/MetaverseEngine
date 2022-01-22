import React, { useEffect, useState } from "react";
import Header from "../../components/Header";
import {
  Avatar,
  Button,
  Checkbox,
  Dialog,
  DialogActions,
  DialogContent,
  DialogTitle,
  IconButton,
  Radio,
  RadioGroup,
  TextField,
  Tooltip,
} from "@mui/material";
import { alpha, styled } from "@mui/material/styles";
import {
  useMoralis,
  useMoralisCloudFunction,
  useMoralisWeb3Api,
} from "react-moralis";
import { useIPFS } from "../../hooks/useIPFS";
import CloseIcon from "@mui/icons-material/Close";
import { getEllipsesTxt } from "../../helpers";

const CustomTextField = styled(TextField)({
  "& label.Mui-focused": {
    color: alpha("#000", 0.7),
  },
  "& .MuiOutlinedInput-root": {
    "&.Mui-focused fieldset": {
      borderColor: alpha("#000", 0.23),
    },
  },
});

const Login = () => {
  const { user } = useMoralis();
  const { Moralis, isAuthenticated } = useMoralis();
  const [nfts, setNfts] = useState([]);
  const [selectedNft, setSelectedNft] = useState(null);
  const [avatar, setAvatar] = useState(null);
  const [coins, setCoins] = useState(null);
  const [open, setOpen] = useState(false);

  const handleSelectNft = (e, nft) => {
    const images = Array.from(document.querySelectorAll(".nft-grid img"));
    const siblingImages = images.filter((img) => img !== e.target);
    siblingImages.forEach((img) => {
      img.classList.remove("border-4");
    });
    e.target.classList.toggle("border-4");

    if (!e.target.classList.contains("border-4")) setSelectedNft(null);
    else setSelectedNft(nft);
  };

  const handleSetAvatar = () => {
    if (!selectedNft) {
      alert("You must select a NFT");
      return;
    }

    setAvatar(selectedNft);
    setOpen(false);
  };

  useEffect(() => {
    if (!user) return;
    (async () => {
      const {nfts, coins} = await Moralis.Cloud.run("getCryptoInfo");
      setNfts(nfts);
      setCoins(coins);
    })();
  }, [user]);

  return (
    <>
      <div className="wrapper flex min-h-screen sm:justify-center sm:items-center sm:px-5 sm:py-10">
        <div
          style={{
            boxShadow: "0 0 15px 0px gray",
            borderRadius: 15,
          }}
          className="card flex flex-col w-full max-w-screen-md"
        >
          <Header />
          <div
            style={{ borderRadius: "0 0 15px 15px" }}
            className="card-content flex flex-col py-7 px-2.5 sm:p-7 bg-gray-100 gap-7"
          >
            {avatar && isAuthenticated && (
              <div className="self-center flex items-center gap-3 bg-white rounded-lg p-2 shadow-lg">
                <Avatar src={avatar.image} alt={avatar.name} />
                <Tooltip title={user.get("ethAddress")} arrow>
                  <span className="text-lg font-semibold">
                    {getEllipsesTxt(user.get("ethAddress"), 8)}
                  </span>
                </Tooltip>
              </div>
            )}
            {isAuthenticated && (
              <>
                <Button variant="contained" onClick={() => setOpen(true)}>
                  Select your avatar picture
                </Button>
                <div>
                  <h4 className="text-lg font-semibold">Your tokens:</h4>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 mt-3">
                    {coins &&
                      coins.map((balance, index) => (
                        <div key={index} className="flex items-center gap-3">
                          <Avatar src={balance.image} alt={balance.symbol} />
                          <p>
                            {`${Moralis.Units.FromWei(
                              balance.balance
                            )} ${balance.symbol.toUpperCase()}`}{" "}
                          </p>
                        </div>
                      ))}
                  </div>
                </div>
              </>
            )}

            <form className="grid grid-cols-1 sm:grid-cols-2 w-full gap-4">
              <CustomTextField label="Name" name="name" />
              <CustomTextField label="Nickname" name="nickname" />
              <CustomTextField label="Email" name="email" type="email" />
              <CustomTextField
                label="Phone number"
                name="phone_number"
                type="tel"
              />
              {isAuthenticated && (
                <CustomTextField label="Username" name="username" />
              )}
            </form>
          </div>
        </div>
      </div>
      <Dialog
        open={open}
        fullWidth
        maxWidth="md"
        onClose={() => setOpen(false)}
      >
        <DialogTitle className="text-center">
          Select your avatar
          <IconButton
            onClick={() => setOpen(false)}
            className="absolute top-0 right-2"
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent>
          <div className="nft-grid grid grid-cols-3 gap-10">
            {!!nfts.length &&
              nfts.map((nft, index) => (
                <img
                  key={index}
                  src={nft.image}
                  alt={`${nft.name}/${nft.token_id}`}
                  onClick={(e) => handleSelectNft(e, nft)}
                  className={`cursor-pointer rounded-lg border-primary ${
                    nft.token_id === selectedNft?.token_id &&
                    nft.token_address === selectedNft?.token_address &&
                    "border-4"
                  }`}
                />
              ))}
          </div>
        </DialogContent>
        <DialogActions>
          <Button variant="contained" onClick={handleSetAvatar}>
            Set
          </Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Login;
