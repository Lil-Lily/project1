import {ServicesAndLinks} from "./ServicesAndLinks";
import {ContactInfo} from "./ContactInfo";
import {FollowUs} from "./FollowUs";
import {Newsletter} from "./Newsletter";
import {FooterLogo} from "./FooterLogo";
import {FooterCopyright} from "./FooterCopyright";

const Footer = () => {
    const generalInformation = [
        {
            title: 'Get In Touch',
            address: '123 Street, New York, USA',
            phoneNumber: '+012 345 67890',
            email: 'info@example.com'
        },
        [
            {
                id: Math.random(),
                title: 'Our Services',
                text1: 'Currency Wallet',
                text2: 'Currency Transaction',
                text3: 'Bitcoin Investment',
                text4: 'Token Sale',
            },
            {
                id: Math.random(),
                title: 'Quick Links',
                text1: 'About Us',
                text2: 'Contact Us',
                text3: 'Our Services',
                text4: 'Terms & Condition',
            },
        ],
        {
            twitter: <i className="fab fa-twitter"></i>,
            facebook: <i className="fab fa-facebook-f"></i>,
            youtube: <i className="fab fa-youtube"></i>,
            linkedin: <i className="fab fa-linkedin-in"></i>
        }
    ];

    return (
        <div className="container-fluid bg-light footer mt-5 pt-5 wow fadeIn" data-wow-delay="0.1s">
            <div className="container py-5">
                <div className="row g-5">
                    <FooterLogo />
                    <Newsletter />
                    <ContactInfo
                        data={{...generalInformation[0]}}
                    />
                    {generalInformation[1].map(data => (
                        <ServicesAndLinks
                        key={data.id}
                        data={data}
                        />
                    ))}
                    <FollowUs
                        data={{...generalInformation[2]}}
                    />
                </div>
            </div>
            <FooterCopyright />
        </div>
    );
};
export {Footer};