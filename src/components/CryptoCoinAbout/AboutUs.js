import {Layout} from "../Layout/Layout";
import {AboutUsHeader} from "./AboutUsHeader";
import {About} from "../Home/About/About";

const AboutUs = () => {
    return (
        <Layout>
            <AboutUsHeader />
            <About />
        </Layout>
    ); 
};
export {AboutUs};