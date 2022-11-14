import icon9 from '../../img/icon-9.png';
import icon10 from '../../img/icon-10.png';
import icon2 from '../../img/icon-2.png';
import {Transactions} from "./Transactions";


const TotalTransactions = () => {

    const transactions = [
        {id: Math.random(), src: icon9, transaction: 123456, text: 'Today Transactions'},
        {id: Math.random(), src: icon10, transaction: 123456, text: 'Monthly Transactions'},
        {id: Math.random(), src: icon2, transaction: 123456, text: 'Total Transaction'},
    ];

    return (
        <div className="container-xxl bg-light py-5 my-5">
            <div className="container py-5">
                <div className="row g-5">
                    {
                        transactions.map(facts => (
                            <Transactions
                                key={facts.id}
                                src={facts.src}
                                transaction={facts.transaction}
                                text={facts.text}
                            />
                        ))
                    }
                </div>
            </div>
        </div>
    );
};
export {TotalTransactions};