const Transactions = (props) => {
    return (
        <div className="col-lg-4 col-md-6 text-center wow fadeIn" data-wow-delay="0.1s">
            <img className="img-fluid mb-4" src={props.src} alt="" />
                <h1 className="display-4" data-toggle="counter-up">{props.transaction}</h1>
                <p className="fs-5 text-primary mb-0">{props.text}</p>
        </div>
    );
};
export {Transactions};