import TimelineItem from './TimelineItem.js'
// Timeline.js

import React from 'react';

const Timeline = ({items}) => {

    return (
      <div className="timeline">
        {
          items.map(item => (
            <TimelineItem 
              key={item.id}
              date={item.date}
              title={item.title}
              content={item.content}
            />  
          ))
        }
      </div>
    );
  }
export default Timeline;