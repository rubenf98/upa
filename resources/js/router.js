import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createBrowserHistory } from "history";
import PrivateRoute from "./components/dashboard/PrivateRoute";

//public pages
import Homepage from "./components/pages/Homepage";
import About from "./components/pages/About";
import Contact from "./components/pages/Contact";
import Authentication from "./components/pages/Authentication";
import Layout from "./components/Layout";
import Products from "./components/pages/Products";
import ScrollToTop from "./components/common/ScrollToTop";
import PainelLayout from "./components/dashboard/PainelLayout";
import Courses from "./components/dashboard/pages/Courses";
import Course from "./components/dashboard/pages/Course";
import Session from "./components/pages/Session";
import Sessions from "./components/pages/Sessions";
import Painel from "./components/dashboard/pages/Painel";
import Checkout from "./components/pages/Checkout";
import PrivacyPolicy from "./components/pages/PrivacyPolicy";
import Terms from "./components/pages/Terms";
import User from "./components/dashboard/pages/User/User";
import Steps from "./components/pages/HomepageComponents/Steps";
export const history = createBrowserHistory();

function Router() {
    return (
        <BrowserRouter history={history}>
            <ScrollToTop>
                <Routes>
                    <Route exact path="/termos" element={<Layout><Terms /></Layout>} />
                    <Route exact path="/privacidade" element={<Layout><PrivacyPolicy /></Layout>} />
                    <Route exact path="/checkout" element={<Layout><Checkout /></Layout>} />
                    <Route exact path="/produtos" element={<Layout><Products /></Layout>} />
                    <Route exact path="/guia" element={<Layout><Steps /></Layout>} />
                    <Route exact path="/sessoes/:sessao" element={<Layout><Session /></Layout>} />
                    <Route exact path="/sessoes" element={<Layout><Sessions /></Layout>} />
                    <Route exact path="/sobre" element={<Layout><About /></Layout>} />
                    <Route exact path="/contact" element={<Layout><Contact /></Layout>} />
                    <Route
                        exact
                        path="/painel"
                        element={
                            <PrivateRoute>
                                <Layout minimalist><PainelLayout><Painel /></PainelLayout></Layout>
                            </PrivateRoute>
                        }
                    />
                    <Route exact path="/painel/guia" element={<Layout minimalist><PainelLayout><Steps /></PainelLayout></Layout>} />
                    <Route exact path="/painel/users" element={<Layout minimalist><PainelLayout><User /></PainelLayout></Layout>} />
                    <Route exact path="/painel/sessoes" element={<Layout minimalist><PainelLayout><Courses /></PainelLayout></Layout>} />
                    <Route exact path="/painel/sessoes/:id" element={<Layout minimalist><PainelLayout><Course /></PainelLayout></Layout>} />
                    <Route exact path="/login" element={<Layout minimalist><Authentication /></Layout>} />
                    <Route exact path="/" element={<Layout><Homepage /></Layout>} />
                </Routes>
            </ScrollToTop>
        </BrowserRouter>
    );
};

export default Router;
