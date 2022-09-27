import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import PrivateRoute from "./Routes/Auth/PrivateRoute";
import PublicRoute from "./Routes/Auth/PublicRoute";

import SignIn from "./Routes/User/SignIn";
import SignOut from "./Routes/User/SignOut";
import SignUp from "./Routes/User/SignUp";
import Renew from "./Routes/User/Renew";

import Template from "./Routes/Template/Template";

import Error from "./Routes/Error/Error";

import LoadingModal from "./Components/Modal/LoadingModal";
import MessageModal from "./Components/Modal/MessageModal";

function App(){
    return (
        <Router>
            <LoadingModal />
            <MessageModal />
            <Routes>
                <Route element={<PrivateRoute />}>
                    <Route path="/user/signout" element={<SignOut/>} />
                    <Route path="/user/renew" element={<Renew/>} />
                    <Route path="/" element={<Template/>} />
                </Route>

                <Route element={<PublicRoute />}>
                    <Route path="/user/signin" element={<SignIn />} />
                    <Route path="/user/signup" element={<SignUp />} />
                </Route>
            
                <Route path="/*" element={<Error />} />
            </Routes>
        </Router>
    )
}

export default App