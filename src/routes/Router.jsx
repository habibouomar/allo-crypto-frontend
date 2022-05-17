import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../pages/Home';
import Profil from '../pages/Profil';
import Crypto from '../pages/Crypto';

export class Router extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/profil" element={<Profil />} />
                    <Route path="/cryptomonaie" element={<Crypto />} />
                </Routes>
            </>
        )
    }
}