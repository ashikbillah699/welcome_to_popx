import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/home/Home";
import SignUp from "../pages/createAccount/SignUp";
import Login from "../pages/login/Login";
import AccountSetting from "../pages/accountSetting/AccountSetting";

const router = createBrowserRouter([
    {
        path: '/',
        element: <Home></Home>,
    },
    {
        path: '/signUp',
        element: <SignUp></SignUp>
    },
    {
        path: '/login',
        element: <Login></Login>
    },
    {
        path: '/accountSettion',
        element: <AccountSetting></AccountSetting>
    }
])

export default router