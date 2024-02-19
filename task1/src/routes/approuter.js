import { Route, Routes } from "react-router-dom";
import { Home } from "../components/home/home.component";
import { ContactUs } from "../components/contactus";
import { Reg } from "../components/regiform.component";
import { Signin } from "../components/signin.component";

export function AppRouter(){
    return(
        // <Routes></Routes>
        <Routes>
            <Route path="/home" element={<Home></Home>}></Route>
            <Route path="/contactus" element={<ContactUs></ContactUs>}></Route>
            <Route path="/signup" element={<Reg></Reg>}></Route>
            <Route path="/signin" element={<Signin></Signin>}></Route>
        </Routes>
    )
}