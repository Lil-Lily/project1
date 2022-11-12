const Service = (props) => {
    return (
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="service-item bg-white p-5">
                <img className="img-fluid mb-4" src={props.src} alt="" />
                <h5 className="mb-3">{props.title}</h5>
                <p>{props.text}</p>
                <a href="#">{props.additionalInfo}<i className="fa fa-arrow-right ms-2"></i></a>
            </div>
        </div>
    );
};
export {Service};