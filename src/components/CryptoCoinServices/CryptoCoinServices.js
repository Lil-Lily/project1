import {Layout} from "../Layout/Layout";
import {Services} from "../Home/Services/Services";
import {ServicesHeader} from "./ServicesHeader";

const CryptoCoinServices = () => {
    return (
        <Layout>
            <ServicesHeader />
            <Services />
        </Layout>
    );
};
export {CryptoCoinServices};