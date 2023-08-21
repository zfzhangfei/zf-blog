import { Card } from "antd";

const TimelineItem = ({ date, title, content }) => {
  return (
    <div className="timeline-item">
      <div className="timeline-date">{date}</div>
      <h3 className="timeline-title">·</h3>
      <div className="timeline-content">
        <Card
          hoverable
          style={{ width: 240}}
          cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >
          {/* <Meta title="Europe Street beat" description="www.instagram.com" /> */}
          {content}
        </Card>
      </div>
    </div>
  );
}

export default TimelineItem;