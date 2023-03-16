import Navbar from "./components/navbar";
import Footer from "./components/footer";
import Home from "./pages/home"
import Gigs from "./pages/gigs"
import Gig from "./pages/gig";
import Add from "./pages/add";
import Orders from "./pages/orders";
import MyGigs from "./pages/myGigs";
import Messages from "./pages/messages";
import Message from "./pages/message";
import "./app.scss";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

function App() {

  const Layout = () => {
    return (
      <>
        <Navbar />
        <Outlet />
        <Footer />
      </>
    )
  }
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children:[
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/gigs",
          element: <Gigs />
        },
        {
          path: "/gig/:id",
          element: <Gig />
        },
        {
          path: "/orders",
          element: <Orders />
        },
        {
          path: "/mygigs",
          element: <MyGigs />
        },
        {
          path: "/add",
          element: <Add />
        },
        {
          path: "/messages",
          element: <Messages />
        },
        {
          path: "/message/:id",
          element: <Message />
        },
      ]
    },
  ]);

  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
