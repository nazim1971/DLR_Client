import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root/Root";
import Home from "../components/Home/Home";
import Contect from "../components/Navber/Contect";
import About from "../components/Navber/About";
import AddProduct from "../components/Navber/AddProduct";
import Releases from "../components/Sidebar/SideBarComponent/Releases";
import Wallet from "../components/Sidebar/SideBarComponent/Wallet";
import Statistics from "../components/Sidebar/SideBarComponent/Statistics";
import Account from "../components/Sidebar/SideBarComponent/Account";
import Support from "../components/Sidebar/SideBarComponent/Support";
import Artists from "../components/Artists/Artists";
import Labels from "../components/Label/Labels";
const routes = createBrowserRouter([
    {
      path: "/",
      element: <Root/>,
      children: [
        {
          path: '/',
          element: <Home/>
        },
       {
        path: '/contect',
        element: <Contect/>
       },
       {
        path: '/about',
        element: <About/>
       },
       {
        path: '/addProduct',
        element: <AddProduct/>
       },
       // sidebar Menu
       {
        path: '/releases',
        element: <Releases/>
       },
       {
        path: '/artists',
        element: <Artists/>
       },
       {
        path: '/labels',
        element: <Labels/>
       },
       {
        path: '/wallet',
        element: <Wallet/>
       },
       {
        path: '/statistics',
        element: <Statistics/>
       },
       {
        path: '/account',
        element: <Account/>
       },
       {
        path: '/support',
        element: <Support/>
       }
      ]
    },
  ]);

export default routes;