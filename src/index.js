import React from "react";
// import { ReactDOM } from "react";
import { createRoot } from "react-dom/client";
import { HashRouter } from "react-router-dom";
// import { BrowserRouter } from "react-router-dom";
import App from './app';


const root = createRoot(document.getElementById('root'));

root.render(<HashRouter><App /></HashRouter>);
// root.render(<BrowserRouter><App /></BrowserRouter>);