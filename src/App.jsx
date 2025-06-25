import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./layout/Layout";
import CheckoutLayout from "./layout/CheckoutLayout";

import HomePage from "./pages/HomePage";
import CartPage from "./pages/CartPage";
import ListingPage from "./pages/ListingPage";
// import AboutPage from "./pages/AboutPage";
import CheckoutDetailsPage from "./pages/CheckoutDetailsPage";
import CheckoutShippingPage from "./pages/CheckoutShippingPage";
import CheckoutPaymentPage from "./pages/CheckoutPaymentPage";

import { ListingsProvider } from "./context/ListingsContext";
import { CurrencyProvider } from "./context/CurrencyContext";
import { CartProvider } from "./context/CartContext";
import { CartUIProvider } from "./context/CartUIContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "women", element: <HomePage category="women" /> },
      { path: "men", element: <HomePage category="men" /> },
      { path: "kids", element: <HomePage category="kids" /> },
      { path: "cart", element: <CartPage /> },
      { path: "listing/:id", element: <ListingPage /> },
      // { path: "about", element: <AboutPage /> },
    ],
  },
  {
    path: "checkout",
    element: <CheckoutLayout />,
    children: [
      { index: true, element: <CheckoutDetailsPage /> },
      { path: "shipping", element: <CheckoutShippingPage /> },
      { path: "payment", element: <CheckoutPaymentPage /> },
    ],
  },
]);

function App() {
  return (
    <CurrencyProvider>
      <ListingsProvider>
        <CartProvider>
          <CartUIProvider>
            <RouterProvider router={router} />
          </CartUIProvider>
        </CartProvider>
      </ListingsProvider>
    </CurrencyProvider>
  );
}

export default App;
