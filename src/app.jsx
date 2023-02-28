import React from "react";
// import { ReactDOM } from "react-dom";
import {
    HashRouter as Router,
    Route,
} from 'react-router-dom';
import SignUp from "./elements/SignUp";
import SucFail from './elements/SucAndFail';
import "./app.css";

const newsletter = () => {
    return (
        <>
            <Router>
                <div>
                    <header />
                    <Route path='/success' element={<SucFail />} />
                    <Route path="/failure" element={<SucFail />} />
                    <Route exact path='/' element={<SignUp />} />
                    <footer />
                </div>
            </Router>
        </>
    );
}

export default newsletter;