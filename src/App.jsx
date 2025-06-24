import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./layout/Layout";
import HomePage from "./pages/HomePage";
// import AboutPage from "./pages/AboutPage";

import { ListingsProvider } from "./context/ListingsContext";
import { CurrencyProvider } from "./context/CurrencyContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "women", element: <HomePage category="women" /> },
      { path: "men", element: <HomePage category="men" /> },
      { path: "kids", element: <HomePage category="kids" /> },
      // { path: "about", element: <AboutPage /> },
    ],
  },
]);

function App() {
  return (
    <CurrencyProvider>
      <ListingsProvider>
        <RouterProvider router={router} />
      </ListingsProvider>
    </CurrencyProvider>
  );
}

export default App;
