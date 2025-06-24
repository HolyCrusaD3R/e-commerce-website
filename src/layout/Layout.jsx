import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import { useCartUI } from "../context/CartUIContext";
function Layout() {
  const { showCartDropdown, closeCartDropdown } = useCartUI();
  return (
    <div className="font-raleway text-c-black">
      <Header />
      {showCartDropdown && (
        <div
          className="fixed top-0 left-0 w-full h-[calc(100vh)] bg-black/50 z-10"
          onClick={closeCartDropdown}
        ></div>
      )}
      <main>
        <Outlet />
      </main>
    </div>
  );
}

export default Layout;
