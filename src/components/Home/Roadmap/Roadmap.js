import {RoadmapItem} from "./RoadmapItem";

const Roadmap = (props) => {
    const roadmap = [
        {
            id: Math.random(),
            title: 'January 2045',
            text: 'Diam dolor ipsum sit amet erat ipsum lorem sit'
        },
        {
            id: Math.random(),
            title: 'March 2045',
            text: 'Diam dolor ipsum sit amet erat ipsum lorem sit'
        },
        {
            id: Math.random(),
            title: 'May 2045',
            text: 'Diam dolor ipsum sit amet erat ipsum lorem sit'
        },
        {
            id: Math.random(),
            title: 'July 2045',
            text: 'Diam dolor ipsum sit amet erat ipsum lorem sit'
        },
        {
            id: Math.random(),
            title: 'September 2045',
            text: 'Diam dolor ipsum sit amet erat ipsum lorem sit'
        },
        {
            id: Math.random(),
            title: 'November 2045',
            text: 'Diam dolor ipsum sit amet erat ipsum lorem sit'
        },
    ];

    return (
        <div className="container-xxl py-5">
            <div className="container">
                <div className="text-center mx-auto wow fadeInUp" data-wow-delay="0.1s"
                     style={{maxWidth: '500px'}}>
                    <h1 className="display-6">Roadmap</h1>
                    <p className="text-primary fs-5 mb-5">We Translate Your Dream Into Reality</p>
                </div>
                <div className="owl-carousel roadmap-carousel wow fadeInUp" data-wow-delay="0.1s">
                    {
                        roadmap.map(roadmapItem => (
                        <RoadmapItem
                            key={roadmapItem.id}
                            title={roadmapItem.title}
                            text={roadmapItem.text}
                        />
                    ))}
                </div>
            </div>
        </div>
    );
};
export {Roadmap};