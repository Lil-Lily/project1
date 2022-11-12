const FollowUs = (props) => {
    return (
        <div className="col-lg-3 col-md-6">
            <h5 className="mb-4">Follow Us</h5>
            <div className="d-flex">
                <a className="btn btn-square rounded-circle me-1" href="">
                    {props.data.twitter}
                </a>
                <a className="btn btn-square rounded-circle me-1" href="">
                    {props.data.facebook}
                </a>
                <a className="btn btn-square rounded-circle me-1" href="">
                    {props.data.youtube}
                </a>
                <a className="btn btn-square rounded-circle me-1" href="">
                    {props.data.linkedin}
                </a>
            </div>
        </div>
    );
};
export {FollowUs};