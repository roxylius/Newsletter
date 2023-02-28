import React, { useState } from "react";
import './SignUp.css';

const Login = () => {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: ""
    });

    const handleSent = async (event) => {
        event.preventDefault(); // prevent premature form submission
        // setSent(true);
        try {
            const url = "http://localhost:3000/api/form";
            await fetch(url, {
                method: "POST",
                redirect: 'follow',
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(formData),
            }).then(async (Response) => {
                const data = await Response.json();
                const url = data.redirectUrl;
                console.log(url);
                window.location.href = url;
                // console.log(Response);
            });
        } catch (error) {
            console.error(error);
            window.location.href = "http://localhost:3001/failure"
        }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormData((prevValues) => ({ ...prevValues, [name]: value }));
    };

    return (
        <>
            <div className="container">
                <div className="blur"></div>
                <div className="overlay">
                    <form onSubmit={handleSent}>
                        <div className="form">
                            <h1>Crime Chronicles</h1>
                            <input
                                type="text"
                                value={formData.firstName}
                                onChange={handleChange}
                                name="firstName"
                                placeholder="First Name"
                                required
                            />
                            <input
                                type="text"
                                value={formData.lastName}
                                onChange={handleChange}
                                name="lastName"
                                placeholder="Last Name"
                                required
                            />
                            <input
                                type="email"
                                value={formData.email}
                                onChange={handleChange}
                                name="email"
                                placeholder="Email Address"
                                required
                            />
                            <button type="submit" className="btn">
                                sign up
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Login;

