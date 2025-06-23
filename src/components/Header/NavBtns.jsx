import NavBtn from "../UI/NavBtn";

const NavBtns = () => {
  return (
    <div className="flex">
      <NavBtn to="/women">Women</NavBtn>
      <NavBtn to="/men">Men</NavBtn>
      <NavBtn to="/kids">Kids</NavBtn>
    </div>
  );
};

export default NavBtns;
