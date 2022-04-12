import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createBrowserHistory } from "history";

//public pages
import Homepage from "./components/pages/Homepage";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Login from "./components/pages/Login";
import Layout from "./components/Layout";

export const history = createBrowserHistory();

function Router() {
    return (
        <BrowserRouter history={history}>
            <Routes>
                <Route exact path="/about" element={<About />} />
                <Route exact path="/contact" element={<Contact />} />
                <Route exact path="/login" element={<Login />} />
                <Route exact path="/" element={<Layout><Homepage /></Layout>} />



            </Routes>
        </BrowserRouter>
    );
};

export default Router;
