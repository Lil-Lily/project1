const Sale = (props) => {
    return (
        <div className="col-6 col-md-3 wow fadeIn" data-wow-delay="0.1s">
            <div className="bg-white text-center p-3">
                <h1 className="mb-0">{props.quantity}</h1>
                <span className="text-primary fs-5">{props.time}</span>
            </div>
        </div>
    );
};
export {Sale};