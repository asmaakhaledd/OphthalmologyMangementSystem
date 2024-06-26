import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css'
import 'jquery/dist/jquery.min.js'
import 'bootstrap/dist/js/bootstrap.min.js'
import classes from './Homepage.module.css'
import NavBar from "./Components/Navbar";
import Main from "./Components/Main";

export default function Homepage(){
    return(
        <div className={`container-fluid   ${classes.Home}`}>
                <NavBar />
                <Main />
        </div>
    )
}