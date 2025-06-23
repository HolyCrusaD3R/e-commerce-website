import { createBrowserRouter, RouterProvider } from "react-router-dom";

import Layout from "./layout/Layout";
import HomePage from "./pages/HomePage";
// import AboutPage from "./pages/AboutPage";

import { ListingsProvider } from "./context/ListingsContext";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "women", element: <HomePage /> },
      // { path: "about", element: <AboutPage /> },
    ],
  },
]);

function App() {
  return (
    <ListingsProvider>
      <RouterProvider router={router} />
    </ListingsProvider>
  );
}

export default App;
