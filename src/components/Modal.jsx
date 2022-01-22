import React from "react";
import {
  Button,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
} from "@mui/material";
import metamask from "../images/wallet_icons/metamaskWallet.png";
import walletConnect from "../images/wallet_icons/wallet-connect.svg";
import { useMoralis, useMoralisWeb3Api } from "react-moralis";
import CloseIcon from "@mui/icons-material/Close";
import { useNavigate, Link } from "react-router-dom";

const Modal = ({ show, setShow }) => {
  const navigate = useNavigate();
  const web3 = useMoralisWeb3Api();
  const { authenticate, isAuthenticated } = useMoralis();

  const handleMetamaskLogin = async () => {
    await authenticate({
      onComplete: () => navigate("/rooms"),
      onError: () => alert("Login failed!"),
    });
  };

  const handleWalletconnectLogin = async () => {
    await authenticate({
      provider: "walletconnect",
      onComplete: () => navigate("/rooms"),
      onError: () => alert("Login failed!"),
    });
    navigate("/rooms");
  };

  return (
    <Dialog maxWidth="xs" fullWidth open={show} onClose={() => setShow(false)}>
      <DialogTitle className="text-center">
        Connect Wallet
        <IconButton
          onClick={() => setShow(false)}
          className="absolute top-0 right-2"
        >
          <CloseIcon />
        </IconButton>
      </DialogTitle>
      <DialogContent className="flex flex-col items-center gap-3">
        <div className="flex flex-col sm:flex-row items-center justify-evenly gap-3 w-full">
          <Button
            onClick={handleMetamaskLogin}
            className="flex w-full sm:w-auto flex-row sm:flex-col justify-start gap-2 text-black normal-case"
          >
            <img src={metamask} alt="MetaMask" className="w-12 h-12" />
            MetaMask
          </Button>
          <Button
            onClick={handleWalletconnectLogin}
            className="flex w-full sm:w-auto flex-row sm:flex-col justify-start gap-2 text-black normal-case"
          >
            <img src={walletConnect} alt="WalletConnect" className="w-12 h-12" />
            WalletConnect
          </Button>
        </div>

        <Button variant="contained" fullWidth component={Link} to="/rooms">
          Play as guest
        </Button>
      </DialogContent>
    </Dialog>
  );
};

export default Modal;
