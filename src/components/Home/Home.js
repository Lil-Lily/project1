import React from "react";
import {NavBar} from "./Navbar/Navbar";
import {Header} from "./Header/Header";
import {About} from "./About/About";
import {TotalTransactions} from "./Transactions/TotalTransactions";
import {Features} from "./Features/Features";
import {Services} from "./Services/Services";
import {Roadmap} from "./Roadmap/Roadmap";
import {TokenSale} from "./TokenSale/TokenSale";
import {Faqs} from "./Faqs/Faqs";
import {Footer} from "./Footer/Footer";


const Home = () => {
    return (
        <React.Fragment>
            <NavBar/>
            <Header/>
            <About/>
            <TotalTransactions/>
            <Features/>
            <Services/>
            <Roadmap/>
            <TokenSale/>
            <Faqs/>
            <Footer/>
        </React.Fragment>
    );
};
export {Home};
