import {FaqsItem} from "./FaqsItem";

const Faqs = () => {
    const faqs = [
        {
            id: Math.random(),
            question: 'How to build a website?',
            text: 'Dolor nonumy tempor elitr et rebum ipsum sit duo duo. ' +
                'Diam sed sed magna et magna diam aliquyam amet dolore ' +
                'ipsum erat duo. Sit rebum magna duo labore no diam.',
        },
        {
            id: Math.random(),
            question: 'How long will it take to get a new website?',
            text: 'Dolor nonumy tempor elitr et rebum ipsum sit duo duo. ' +
                'Diam sed sed magna et magna diam aliquyam amet dolore ' +
                'ipsum erat duo. Sit rebum magna duo labore no diam.',
        },
        {
            id: Math.random(),
            question: 'Do you only create HTML websites?',
            text: 'Dolor nonumy tempor elitr et rebum ipsum sit duo duo. ' +
                'Diam sed sed magna et magna diam aliquyam amet dolore ' +
                'ipsum erat duo. Sit rebum magna duo labore no diam.',
        },
        {
            id: Math.random(),
            question: 'Will my website be mobile-friendly?',
            text: 'Dolor nonumy tempor elitr et rebum ipsum sit duo duo. ' +
                'Diam sed sed magna et magna diam aliquyam amet dolore ' +
                'ipsum erat duo. Sit rebum magna duo labore no diam.',
        },
        {
            id: Math.random(),
            question: 'Will you maintain my site for me?',
            text: 'Dolor nonumy tempor elitr et rebum ipsum sit duo duo. ' +
                'Diam sed sed magna et magna diam aliquyam amet dolore ' +
                'ipsum erat duo. Sit rebum magna duo labore no diam.',
        },
        {
            id: Math.random(),
            question: 'I’m on a strict budget. Do you have any low cost options?',
            text: 'Dolor nonumy tempor elitr et rebum ipsum sit duo duo. ' +
                'Diam sed sed magna et magna diam aliquyam amet dolore ' +
                'ipsum erat duo. Sit rebum magna duo labore no diam.',
        },
        {
            id: Math.random(),
            question: 'Will you maintain my site for me?',
            text: 'Dolor nonumy tempor elitr et rebum ipsum sit duo duo. ' +
                'Diam sed sed magna et magna diam aliquyam amet dolore ' +
                'ipsum erat duo. Sit rebum magna duo labore no diam.',
        },
        {
            id: Math.random(),
            question: 'I’m on a strict budget. Do you have any low cost options?',
            text: 'Dolor nonumy tempor elitr et rebum ipsum sit duo duo. ' +
                'Diam sed sed magna et magna diam aliquyam amet dolore ' +
                'ipsum erat duo. Sit rebum magna duo labore no diam.',
        }
    ]
    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s"
                     style={{maxWidth: '500px'}}>
                    <h1 className="display-6">FAQs</h1>
                    <p className="text-primary fs-5 mb-5">Frequently Asked Questions</p>
                </div>
                <div className="row justify-content-center">
                    <div className="col-lg-10">
                        <div className="accordion" id="accordionExample">
                            {faqs.map(faqsItem => (
                                <FaqsItem
                                    key={faqsItem.id}
                                    question={faqsItem.question}
                                    text={faqsItem.text}
                                />
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
export {Faqs};