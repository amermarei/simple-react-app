import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Layout from "./components/layout/Layout";
import About from "./components/about/About";
import Contact from "./components/contacts/Contact";
import NotFound from "./components/notFound/NotFound";
import Home from "./components/Home/Home";
import Portfolio from "./components/Portfolio/Portfolio";

let routers = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Home /> },
      { path: "about", element: <About /> },
      { path: "contacts", element: <Contact /> },
      { path: "portfolio", element: <Portfolio /> },
      { path: "*", element: <NotFound /> },
    ],
  },
]);
export default function App() {
  return <RouterProvider router={routers} />;
}
