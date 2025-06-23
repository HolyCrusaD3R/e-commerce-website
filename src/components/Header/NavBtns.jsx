import NavBtn from "../UI/NavBtn";

const NavBtns = () => {
  return (
    <div className="flex">
      <NavBtn to="/women" />
      <NavBtn to="/men" />
      <NavBtn to="/kids" />
    </div>
  );
};

export default NavBtns;
