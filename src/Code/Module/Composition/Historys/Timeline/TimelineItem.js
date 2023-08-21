import { Card } from "antd";
import { HeartFilled } from "@ant-design/icons";

const TimelineItem = ({ date, title, content }) => {
  return (
    <div className="timeline-item">
      <div className="timeline-date">{date}</div>
      <h3 className="timeline-title" ><HeartFilled style={{fontSize:'32px'}}/></h3>
      <div className="timeline-content">
        <Card
          hoverable
          style={{ width: 300 }}
          // cover={<img alt="example" src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png" />}
        >
          {content}
        </Card>
      </div>
    </div>
  );
}

export default TimelineItem;