const ContactInfo = (props) => {
    return (
        <div className="col-lg-3 col-md-6">
            <h5 className="mb-4">{props.data.title}</h5>
            <p><i className="fa fa-map-marker-alt me-3"></i>{props.data.address}</p>
            <p><i className="fa fa-phone-alt me-3"></i>{props.data.phoneNumber}</p>
            <p><i className="fa fa-envelope me-3"></i>{props.data.email}</p>
        </div>
    );
};
export {ContactInfo};