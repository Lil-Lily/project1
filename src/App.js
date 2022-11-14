import React from 'react';
import {AboutUs} from "./components/CryptoCoinAbout/AboutUs";
import {Home} from "./components/Home/Home";
import {CryptoCoinServices} from "./components/CryptoCoinServices/CryptoCoinServices";
import {CryptoCoinRoadmap} from "./components/CryptoCoinRoadmap/CryptoCoinRoadmap";


function App() {
    return (
        <React.Fragment>
            <Home/>
            <AboutUs/>
            <CryptoCoinServices />
            <CryptoCoinRoadmap />
        </React.Fragment>
    );
}

export default App;
