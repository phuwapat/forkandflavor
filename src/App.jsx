import React from 'react'
import '../public/style/App.css'
import {
    BrowserRouter as Router,
    Routes,
    Route,
} from "react-router-dom";

import Login from './Pages/Login'
import Register from './Pages/Register'
import Home from './Pages/Home';
import MyProfile from './Pages/MyProfile';
import EditProfile from './Pages/EditProfile';
import Post from './Pages/Createpost';
import Createpost from './Pages/Createpost';

function App() {
    return (
        <Router>
            <Routes>
                <Route exact path="/" element={<Home/>} />
                <Route path="/login" element={<Login/>} />
                <Route path="/register" element={<Register/>} />
                <Route path="/myprofile" element={<MyProfile/>} />
                <Route path="/editprofile" element={<EditProfile/>} />
                <Route path="/createpost" element={<Createpost/>} />
            </Routes>
        </Router>
    )
}

export default App
