import logo from '../images/logo.png';

const Header = () => {
  return (
    <div className="card-header flex bg-primary justify-between px-2 sm:pl-10 sm:pr-7 py-2 items-center sm:rounded-t-lg flex-[0_0_auto]">
      <h1 className="text-white text-lg xs:text-2xl font-semibold italic uppercase">Join to metaverse</h1>
      <div className="flex items-center gap-1.5">
        <img src={logo} alt="logo" className="w-10 xs:w-14"/>
        <button className="bg-gray-300/50 text-white text-base xs:text-2xl w-7 h-7 xs:w-9 xs:h-9 flex justify-center items-center rounded-full">
          <i className="fas fa-times"/>
        </button>
      </div>
    </div>
  );
};

export default Header;
