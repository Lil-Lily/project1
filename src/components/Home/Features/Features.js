import icon7 from '../img/icon-7.png';
import icon6 from '../img/icon-6.png';
import icon5 from '../img/icon-5.png';
import icon4 from '../img/icon-4.png';
import icon3 from '../img/icon-3.png';
import icon8 from '../img/icon-8.png';
import {Feature} from "./Feature";

const Features = () => {
    const features = [
        {
            id: Math.random(),
            src: icon7,
            title: 'Easy To Start',
            text: 'Aliqu diam amet diam et eos. Clita erat ipsum et ' +
                'lorem et sit, sed stet lorem sit clita duo justo'
        },
        {
            id: Math.random(),
            src: icon6,
            title: 'Safe & Secure',
            text: 'Aliqu diam amet diam et eos. Clita erat ipsum et ' +
                'lorem et sit, sed stet lorem sit clita duo justo'
        },
        {
            id: Math.random(),
            src: icon5,
            title: 'Affordable Plans',
            text: 'Aliqu diam amet diam et eos. Clita erat ipsum et ' +
                'lorem et sit, sed stet lorem sit clita duo justo'
        },
        {
            id: Math.random(),
            src: icon4,
            title: 'Secure Storage',
            text: 'Aliqu diam amet diam et eos. Clita erat ipsum et ' +
                'lorem et sit, sed stet lorem sit clita duo justo'
        },
        {
            id: Math.random(),
            src: icon3,
            title: 'Protected By Insurance',
            text: 'Aliqu diam amet diam et eos. Clita erat ipsum et ' +
                'lorem et sit, sed stet lorem sit clita duo justo'
        },
        {
            id: Math.random(),
            src: icon8,
            title: '24/7 Support',
            text: 'Aliqu diam amet diam et eos. Clita erat ipsum et ' +
                'lorem et sit, sed stet lorem sit clita duo justo'
        },
    ];

    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s"
                     style={{maxWidth: '500px'}}>
                    <h1 className="display-6">Why Us!</h1>
                    <p className="text-primary fs-5 mb-5">The Best In The crypto Industry</p>
                </div>
                <div className="row g-5">
                    {features.map(feature => (
                        <Feature
                        key={feature.id}
                        src={feature.src}
                        title={feature.title}
                        text={feature.text}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};
export {Features};