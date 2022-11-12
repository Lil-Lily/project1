const RoadmapItem = (props) => {
    return (
        <div className="roadmap-item">
            <div className="roadmap-point"><span></span></div>
            <h5>{props.title}</h5>
            <span>{props.text}</span>
        </div>
    );
};
export {RoadmapItem};