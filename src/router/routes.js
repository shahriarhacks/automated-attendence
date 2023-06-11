import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import ErrorElement from "../components/Error/ErrorElement";
import Home from "../pages/Home/Home";
import Login from "../pages/login-reg/Login";
import Register from "../pages/login-reg/Register";

const router= createBrowserRouter([
    {
        path:'/',
        element:<Root/>,
        errorElement:<ErrorElement/>,
        children:[
            {
                path:'/',
                element:<Home/>
            },
            {
                path:'/login',
                element:<Login/>
            },
            {
                path:'/singup',
                element:<Register/>
            }
        ]
    }
])

export default router;