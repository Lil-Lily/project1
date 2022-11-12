import {Sale} from "./Sale";
import payment1 from '../img/payment-1.png';
import payment2 from '../img/payment-2.png';
import payment3 from '../img/payment-3.png';
import payment4 from '../img/payment-4.png';

const TokenSale = () => {

    const tokenSale = [
        {
            id: Math.random(),
            quantity: 0,
            time: "Days"
        },
        {
            id: Math.random(),
            quantity: 0,
            time: "Hours"
        },
        {
            id: Math.random(),
            quantity: 0,
            time: "Minutes"
        },
        {
            id: Math.random(),
            quantity: 0,
            time: "Seconds"
        },
    ];

    return (
        <div className="container-xxl bg-light py-5 my-5">
            <div className="container py-5">
                <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s"
                     style={{maxWidth: '500px'}}>
                    <h1 className="display-6">Token Sale</h1>
                    <p className="text-primary fs-5 mb-5">Token Sale Countdown</p>
                </div>
                <div className="row g-3">
                    {tokenSale.map(sale => (
                        <Sale
                            key={sale.id}
                            quantity={sale.quantity}
                            time={sale.time}
                        />
                    ))}
                    <div className="col-12 text-center py-4">
                        <a className="btn btn-primary py-3 px-4" href="">Buy Token</a>
                    </div>
                    <div className="col-12 text-center">
                        <img className="img-fluid m-1" src={payment1} alt=""
                             style={{width: '50px'}}/>
                        <img className="img-fluid m-1" src={payment2} alt=""
                             style={{width: '50px'}}/>
                        <img className="img-fluid m-1" src={payment3} alt=""
                             style={{width: '50px'}}/>
                        <img className="img-fluid m-1" src={payment4} alt=""
                             style={{width: '50px'}}/>
                    </div>
                </div>
            </div>
        </div>
    );
};
export {TokenSale};