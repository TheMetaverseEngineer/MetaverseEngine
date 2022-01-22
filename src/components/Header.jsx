import logo from "../images/logo.png";
import {Button, Stack, Typography} from "@mui/material";
import {useMoralis} from "react-moralis";
import {getEllipsesTxt} from "../helpers";

const Header = () => {
  const {isAuthenticated, logout, user} = useMoralis();

  const handleLogout = async () => {
    if (!isAuthenticated) return;
    await logout();
  }

  return (
    <Stack
      flexDirection="row"
      bgcolor="primary.main"
      borderRadius={{ sm: "15px 15px 0 0" }}
      justifyContent="space-between"
      px={1}
      pl={{ sm: 3.5 }}
      pr={{ sm: 2 }}
      py={1.2}
      alignItems="center"
      flex="0 0 auto"
    >
      <div className="flex flex-col gap-1">
        <Typography
          component="h1"
          textTransform="uppercase"
          color="white"
          fontStyle="italic"
          fontWeight="900"
          fontSize={[15, 20, 25]}
        >
          Join to the metaverse
        </Typography>
        <div className="">
          <Button
            onClick={handleLogout}
            variant="contained"
            color="primary"
            className={`self-start normal-case ${!isAuthenticated && 'pointer-events-none'}`}
            size="small"
          >
            {isAuthenticated
              ? getEllipsesTxt(user.get("ethAddress"), 5)
              : "Guest"}
          </Button>
        </div>
      </div>
      <Stack flexDirection="row" gap={[0.5]}>
        <img src={logo} alt="logo" className="w-10 xs:w-14" />
        <button className="bg-gray-300 bg-opacity-50 text-white text-base xs:text-2xl w-7 h-7 xs:w-9 xs:h-9 flex justify-center items-center rounded-full">
          <i className="fas fa-times" />
        </button>
      </Stack>
    </Stack>
  );
};

export default Header;
