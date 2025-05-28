 

 import {
  createBrowserRouter,
} from "react-router";
import RootLayOut from "../layouts/RootLayOut";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import SignIn from "../Pages/signIn/SignIn";



const router = createBrowserRouter([
  {
    path: "/",
    Component:RootLayOut,
    children:[
        {
            index:true,
            Component:Home,
        },
        {
            path:'register',
            Component:Register,
        },
         {
            path:'signin',
            Component:SignIn,
        }
    ]
  },
]);
export default router