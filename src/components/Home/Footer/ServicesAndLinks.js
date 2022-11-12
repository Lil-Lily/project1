const ServicesAndLinks = props => {
    return (
        <div className="col-lg-3 col-md-6">
            <h5 className="mb-4">{props.data.title}</h5>
            <a className="btn btn-link" href="">{props.data.text1}</a>
            <a className="btn btn-link" href="">{props.data.text2}</a>
            <a className="btn btn-link" href="">{props.data.text3}</a>
            <a className="btn btn-link" href="">{props.data.text4}</a>
        </div>
    );
};
export {ServicesAndLinks};