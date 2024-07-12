import { createBrowserRouter } from "react-router-dom";
import Root from "../components/Root/Root";
import Home from "../components/pages/Home/Home";
import Contect from "../components/Navber/Contect";
import About from "../components/Navber/About";
import AddProduct from "../components/Navber/AddProduct";
import Wallet from "../components/Sidebar/SideBarComponent/Wallet";
import Statistics from "../components/Sidebar/SideBarComponent/Statistics";
import Account from "../components/Sidebar/SideBarComponent/Account";
import Support from "../components/Sidebar/SideBarComponent/Support"
import Login from "../components/pages/SignUp/Login";
import Register from "../components/pages/SignUp/Register";
import Private from "./Private";
import Error from "./Error";
import CreateReleaseMain from "../components/pages/CreateReleases/CreateReleaseMain";
import ReleasesMain from "../components/pages/Releases/ReleasesMain";
import LabelsMain from "../components/pages/Label/LabelsMain";
import ArtistsMain from "../components/pages/Artists/ArtistsMain";


const routes = createBrowserRouter([
    {
      path: "/",
      element: <Private><Root/></Private>,
       errorElement: <Error/>  ,
      children: [
        {
          path: '/',
          element: <Private><Home/></Private>
        },
       {
        path: '/contect',
        element: <Private><Contect/></Private>
       },
       {
        path: '/about',
        element: <Private><About/></Private>
       },
       {
        path: '/addProduct',
        element: <AddProduct/>
       },
       // sidebar Menu
       {
        path: '/releases',
        element: <Private> <ReleasesMain/>  </Private>
       },
       {
        path: '/addReleases',
        element: <CreateReleaseMain/>
       },
       {
        path: '/artists',
        element: <Private><ArtistsMain/></Private>
       },
       {
        path: '/labels',
        element: <Private><LabelsMain/></Private>
       },
       {
        path: '/wallet',
        element: <Private><Wallet/></Private>
       },
       {
        path: '/statistics',
        element: <Private><Statistics/></Private>
       },
       {
        path: '/account',
        element: <Private><Account/></Private>
       },
       {
        path: '/support',
        element: <Private><Support/></Private>
       }
      ]
    },
       {
        path: '/login',
        element: <Login/>
       },
       {
        path: '/register',
        element: <Register/>
       }
  ]);

export default routes;