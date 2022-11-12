const Newsletter = () => {
    return (
        <div className="col-md-6">
            <h5 className="mb-4">Newsletter</h5>
            <p>Clita erat ipsum et lorem et sit, sed stet lorem sit clita.</p>
            <div className="position-relative">
                <input className="form-control bg-transparent w-100 py-3 ps-4 pe-5" type="text"
                       placeholder="Your email"/>
                <button type="button"
                        className="btn btn-primary py-2 px-3 position-absolute top-0 end-0 mt-2 me-2">
                    SignUp
                </button>
            </div>
        </div>
    );
};
export {Newsletter};