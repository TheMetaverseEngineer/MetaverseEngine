import metamask from "../images/wallet_icons/metamaskWallet.png";
import walletConnect from "../images/wallet_icons/wallet-connect.svg";
import { useRef } from "react";
import { useMoralis } from "react-moralis";

const Modal = ({ show, setShow }) => {
  const backdrop = useRef();
  const { authenticate } = useMoralis();

  return (
    <div
      className={`modal-backdrop fixed inset-0 bg-gray-800/40 justify-center items-center p-5 overflow-y-auto ${
        show ? "flex" : "hidden"
      }`}
      onClick={(e) => {
        if (e.target !== backdrop.current) return;
        setShow(false);
      }}
      ref={backdrop}
    >
      <div className="modal bg-white rounded-lg relative p-5 max-w-screen-xs w-full">
        <h6 className="modal-title text-center mb-5 font-bold text-lg">
          Connect Wallet
        </h6>
        <div className="flex flex-col sm:flex-row justify-evenly gap-4">
          <button
            onClick={() => authenticate()}
            className="flex flex-row sm:flex-col items-center gap-5 sm:gap-1"
          >
            <img
              src={metamask}
              alt="MetaMask"
              className="w-9 h-9 sm:w-12 sm:h-12"
            />
            <div className="">MetaMask</div>
          </button>
          <button
            onClick={() => authenticate({ provider: "walletconnect" })}
            className="flex flex-row sm:flex-col items-center gap-5 sm:gap-1"
          >
            <img
              src={walletConnect}
              alt="Wallet Connect"
              className="w-9 h-9 sm:w-12 sm:h-12"
            />
            <div className="">WalletConnect</div>
          </button>
        </div>
        <button
          className="absolute top-2 right-4 text-xl text-gray-400 hover:text-gray-800"
          onClick={() => setShow(false)}
        >
          <i className="fas fa-times" />
        </button>
      </div>
    </div>
  );
};

export default Modal;
