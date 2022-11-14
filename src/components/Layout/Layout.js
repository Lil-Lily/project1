import React, {Fragment} from 'react';
import {Footer} from "../Home/Footer/Footer";
import {NavBar} from "../Home/Navbar/Navbar";

const Layout = (props) => {
    return (
        <Fragment>
            <NavBar />
            <main>
                {props.children}
            </main>
            <Footer />
        </Fragment>
    );
};
export {Layout};