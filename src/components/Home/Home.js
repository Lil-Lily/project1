import React from "react";
import {About} from "./About/About";
import {TotalTransactions} from "./Transactions/TotalTransactions";
import {Features} from "./Features/Features";
import {Services} from "./Services/Services";
import {Roadmap} from "./Roadmap/Roadmap";
import {TokenSale} from "./TokenSale/TokenSale";
import {Faqs} from "./Faqs/Faqs";
import {Layout} from "../Layout/Layout";
import {Header} from "./Header/Header";


const Home = () => {
    return (
        <Layout>
            <Header/>
            <About/>
            <TotalTransactions/>
            <Features/>
            <Services/>
            <Roadmap/>
            <TokenSale/>
            <Faqs/>
        </Layout>
    );
};
export {Home};
