// TimelineItem.js

const TimelineItem = ({date, title, content}) => {
    return (
      <div className="timeline-item">
        <div className="timeline-date">{date}</div>  
        <h3 className="timeline-title">{title}</h3>
        <div className="timeline-content">{content}</div>
      </div>
    );
  }

  export default TimelineItem;