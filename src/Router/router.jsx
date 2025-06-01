 

 import {
  createBrowserRouter,
} from "react-router";
import RootLayOut from "../layouts/RootLayOut";
import Home from "../Pages/Home/Home";
import Register from "../Pages/Register/Register";
import SignIn from "../Pages/signIn/SignIn";
import JobDetail from "../Pages/JobDetails/JobDetail";
import JobApply from "../Pages/JobbApply/JobApply";
import PrivetRouts from "../routes/PrivetRouts";
import MyApplications from "../Pages/MyApplications/MyApplications";



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
          path:'jobDetail/:id',
          Component:JobDetail,
          loader:({params})=>fetch(`http://localhost:3000/jobs/${params.id}`)
        },
         {
          path:'jobapply/:id',
         element:<PrivetRouts><JobApply></JobApply></PrivetRouts>
          
        },
        {
          path:'myApplications',
          element:<PrivetRouts><MyApplications></MyApplications></PrivetRouts>
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