import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import NotFound from '../views/NotFound';
import Movies from "../views/Movies";
import {VerAsientos} from "../views/VerAsientos";

function GlobalRouter() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Layout><Movies /></Layout>} />
                <Route
                    path="/asientos/"
                    element={<VerAsientos />}
                />
                <Route path="*" element={<Layout><NotFound /></Layout>} />
            </Routes>
        </BrowserRouter>
    );
}

const Layout = ({children}) => (
    <>
        {children}
    </>
);

export default GlobalRouter;
