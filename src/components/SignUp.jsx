import React from "react";
import ReactDOM from "react-dom";
// import bgimg from "../images/background.jpg";

import './SignUp.css';

const login = () => {
    return (
        <div className="container">

            <div className="blur"></div>
            <div className="overlay">
                <div className="form">
                    <h1>
                        Crime Chronicles
                    </h1>
                    <input type="text" placeholder="First Name" />
                    <input type="text" placeholder="Last Name" />
                    <input type="email" placeholder="Email Address" />
                    <button type="submit" className="btn">sign up</button>
                </div>
            </div>
        </div>
    );
}

export default login;