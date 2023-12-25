import {BrowserRouter as Router, Routes, Route, Link} from "react-router-dom"

import * as React from "react";
import App from "./App"
import Reg from "./reg";
import Login from "./login";

export default function Navbar() {

    return (
        <Router>
        <nav className="nav">
        <Link to="/" className="site-title">Онлайн блокнот</Link>
           {/*<p className="selected">{ "Notebook"}</p>*/}
        <ul>
        <li><Link to="/reg" className="active">Регистрация</Link></li>
        <li><Link to="/sign" className="active">Войти</Link></li>
        </ul>
    </nav>
            <Routes>
                <Route path="/" element={<App/>} />
                <Route path="/reg" element={<Reg/>}/>
                <Route path="/sign" element={<Login/>}/>
            </Routes>
        </Router>
    )
}