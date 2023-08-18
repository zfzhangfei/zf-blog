import React, { useState ,useEffect} from 'react'
import { Tag } from 'antd';

export default function RandomMark({ Mark }) {

    const [randomTag, setRandomTag] = useState(null);
  
    useEffect(() => {
      const tags = ['magenta', 'red', 'volcano','orange','gold','lime','green','cyan','blue','geekblue','purple' /* 其他颜色 */];
      const randomIndex = Math.floor(Math.random() * tags.length);
      setRandomTag(tags[randomIndex]);
    }, [])
  
    if (!randomTag) return null;
  
    return <Tag color={randomTag}>{Mark}</Tag>
  }