import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createBrowserHistory } from "history";

//public pages
import Homepage from "./components/pages/Homepage";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Authentication from "./components/pages/Authentication";
import Layout from "./components/Layout";
import Session from "./components/pages/Session";
import ScrollToTop from "./components/common/ScrollToTop";
import PainelLayout from "./components/dashboard/PainelLayout";
import Courses from "./components/dashboard/pages/Courses";
import Course from "./components/dashboard/pages/Course";
export const history = createBrowserHistory();

function Router() {
    return (
        <BrowserRouter history={history}>
            <ScrollToTop>
                <Routes>
                    <Route exact path="/sessoes" element={<Layout><Session /></Layout>} />
                    <Route exact path="/sobre" element={<Layout><About /></Layout>} />
                    <Route exact path="/contact" element={<Layout><Contact /></Layout>} />
                    <Route exact path="/painel" element={<Layout minimalist><PainelLayout><Courses /></PainelLayout></Layout>} />
                    <Route exact path="/painel/sessao" element={<Layout minimalist><PainelLayout><Course /></PainelLayout></Layout>} />
                    <Route exact path="/login" element={<Layout minimalist><Authentication /></Layout>} />
                    <Route exact path="/" element={<Layout><Homepage /></Layout>} />
                </Routes>
            </ScrollToTop>
        </BrowserRouter>
    );
};

export default Router;
