import {Layout} from "../Layout/Layout";
import {Roadmap} from "../Home/Roadmap/Roadmap";
import {RoadmapHeader} from "./RoadmapHeader";

const CryptoCoinRoadmap = () => {
    return (
        <Layout>
            <RoadmapHeader />
            <Roadmap />
        </Layout>
    );
};
export {CryptoCoinRoadmap};