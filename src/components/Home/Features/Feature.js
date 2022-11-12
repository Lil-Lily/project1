const Feature = (props) => {
    return (
        <div className="col-lg-4 col-md-6 wow fadeInUp" data-wow-delay="0.1s">
            <div className="d-flex align-items-start">
                <img className="img-fluid flex-shrink-0" src={props.src} alt="" />
                    <div className="ps-4">
                        <h5 className="mb-3">{props.title}</h5>
                        <span>{props.text}</span>
                    </div>
            </div>
        </div>
    );
};
export {Feature};