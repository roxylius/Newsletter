import React from "react";
import { Routes, Route } from 'react-router-dom';
import SignUp from "./elements/SignUp";
import SucFail from './elements/SucAndFail';
import "./app.css";

const newsletter = () => {
    return (
        <Routes>
            <Route path='Crime-chronicles/success' element={<SucFail />} />
            <Route path="Crime-chronicles/failure" element={<SucFail />} />
            <Route exact path='Crime-chronicles/' element={<SignUp />} />
        </Routes>
    );
}

export default newsletter;


// import React from "react";
// // import { ReactDOM } from "react-dom";
// import { Routes, Route } from 'react-router-dom';
// import SignUp from "./elements/SignUp";
// import SucFail from './elements/SucAndFail';
// import "./app.css";

// const newsletter = () => {
//     return (
//         <>
//             <Routes>
//                 <Route path='/success' element={<SucFail />} />
//                 <Route path="/failure" element={<SucFail />} />
//                 <Route exact path='/' element={<SignUp />} />
//             </Routes>
//         </>
//     );
// }

// export default newsletter;