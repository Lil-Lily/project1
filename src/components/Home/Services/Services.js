import icon7 from '../img/icon-7.png';
import icon2 from '../img/icon-2.png';
import icon5 from '../img/icon-5.png';
import icon3 from '../img/icon-3.png';
import icon8 from '../img/icon-8.png';
import icon9 from '../img/icon-9.png';
import {Service} from "./Service";

const Services = () => {
    const services = [
        {
            id: Math.random(),
            src: icon7,
            title: 'Currency Wallet',
            text: 'Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,' +
                ' sed stet lorem sit clita duo justo',
            additionalInfo: 'Read More'
        },
        {
            id: Math.random(),
            src: icon3,
            title: 'Currency Transaction',
            text: 'Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,' +
                ' sed stet lorem sit clita duo justo',
            additionalInfo: 'Read More'
        },
        {
            id: Math.random(),
            src: icon9,
            title: 'Bitcoin Investment',
            text: 'Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,' +
                ' sed stet lorem sit clita duo justo',
            additionalInfo: 'Read More'
        },
        {
            id: Math.random(),
            src: icon5,
            title: 'Currency Exchange',
            text: 'Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,' +
                ' sed stet lorem sit clita duo justo',
            additionalInfo: 'Read More'
        },
        {
            id: Math.random(),
            src: icon2,
            title: 'Bitcoin Escrow',
            text: 'Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,' +
                ' sed stet lorem sit clita duo justo',
            additionalInfo: 'Read More'
        },
        {
            id: Math.random(),
            src: icon8,
            title: 'Token Sale',
            text: 'Aliqu diam amet diam et eos. Clita erat ipsum et lorem et sit,' +
                ' sed stet lorem sit clita duo justo',
            additionalInfo: 'Read More'
        },
    ];

    return (
        <div className="container-xxl bg-light py-5 my-5">
            <div className="container py-5">
                <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s"
                     style={{maxWidth: '500px'}}>
                    <h1 className="display-6">Services</h1>
                    <p className="text-primary fs-5 mb-5">Buy, Sell And Exchange Cryptocurrency</p>
                </div>
                <div className="row g-4">
                    {services.map(service => (
                        <Service
                            key={service.id}
                            src={service.src}
                            title={service.title}
                            text={service.text}
                            additionalInfo={service.additionalInfo}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};
export {Services};