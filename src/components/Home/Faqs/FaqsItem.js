const FaqsItem = (props) => {
    return (
        <div className="accordion-item wow fadeInUp" data-wow-delay="0.2s">
            <h2 className="accordion-header" id="headingTwo">
                <button className="accordion-button collapsed" type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#collapseTwo" aria-expanded="false"
                        aria-controls="collapseTwo">
                    {props.question}
                </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse"
                 aria-labelledby="headingTwo"
                 data-bs-parent="#accordionExample">
                <div className="accordion-body">{props.text}</div>
            </div>
        </div>
    );
};
export {FaqsItem};