import React from "react";
import './SucAndFail.css';

const Success = () => {

    const url = window.location.href;
    console.log(url);

    return (
        <>
            <div className="sf-container">
                <div className="sf-blur"></div>
                <div className="sf-overlay">
                    {url.includes('success') ?
                        <>
                            <h1 className="sf-heading">Success</h1>
                            <p>HOWDY! DETECTIVE A NEW MYSTERY IS WAITING IN YOUR INBOX. </p>
                        </>
                        : <>
                            <h1 className="sf-heading">Failure</h1>
                            <p>AWWWW! LOOKS LIKE THERE IS SOME TROUBLE. PLEASE TRY AGAIN. </p>
                        </>
                    }
                </div>
            </div>
        </>
    );
};

export default Success;