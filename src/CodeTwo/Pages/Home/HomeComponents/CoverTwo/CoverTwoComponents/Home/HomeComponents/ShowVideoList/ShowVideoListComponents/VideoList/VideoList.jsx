import React from "react";
import "./VideoList.scss";
import { Card } from "antd";
const { Meta } = Card;

const items = [
  {
    Cover:
      "https://zfblog.su.bcebos.com/zfblogpicture/%E5%A4%B4%E5%83%8F111.webp",
    Name: "111",
    children: [
      {
        Episode: 1,
        Name: "222222",
        url: "https://2cpro.oss-cn-shanghai.aliyuncs.com/zhangfei/Grammar/Picture/216C266F6328F6D085B9FAB377624CE9.mp4?OSSAccessKeyId=LTAI5t5qDM9xCBygiycrcDbM&Expires=1701330499&Signature=5icvZFcVjND3A2V3unoy7rgQ4mQ%3D",
      },
      {
        Episode: 2,
        Name: "3333333",
        url: "https://2cpro.oss-cn-shanghai.aliyuncs.com/zhangfei/Grammar/Picture/216C266F6328F6D085B9FAB377624CE9.mp4?OSSAccessKeyId=LTAI5t5qDM9xCBygiycrcDbM&Expires=1701330499&Signature=5icvZFcVjND3A2V3unoy7rgQ4mQ%3D",
      },
      {
        Episode: 3,
        Name: "444444",
        url: "https://2cpro.oss-cn-shanghai.aliyuncs.com/zhangfei/Grammar/Picture/216C266F6328F6D085B9FAB377624CE9.mp4?OSSAccessKeyId=LTAI5t5qDM9xCBygiycrcDbM&Expires=1701330499&Signature=5icvZFcVjND3A2V3unoy7rgQ4mQ%3D",
      },
    ],
  },
  {
    Cover:
      "https://zfblog.su.bcebos.com/zfblogpicture/%E5%A4%B4%E5%83%8F111.webp",
    Name: "111",
    children: [
      {
        Episode: 1,
        Name: "222222",
        url: "https://2cpro.oss-cn-shanghai.aliyuncs.com/zhangfei/Grammar/Picture/216C266F6328F6D085B9FAB377624CE9.mp4?OSSAccessKeyId=LTAI5t5qDM9xCBygiycrcDbM&Expires=1701330499&Signature=5icvZFcVjND3A2V3unoy7rgQ4mQ%3D",
      },
      {
        Episode: 2,
        Name: "3333333",
        url: "https://2cpro.oss-cn-shanghai.aliyuncs.com/zhangfei/Grammar/Picture/216C266F6328F6D085B9FAB377624CE9.mp4?OSSAccessKeyId=LTAI5t5qDM9xCBygiycrcDbM&Expires=1701330499&Signature=5icvZFcVjND3A2V3unoy7rgQ4mQ%3D",
      },
      {
        Episode: 3,
        Name: "444444",
        url: "https://2cpro.oss-cn-shanghai.aliyuncs.com/zhangfei/Grammar/Picture/216C266F6328F6D085B9FAB377624CE9.mp4?OSSAccessKeyId=LTAI5t5qDM9xCBygiycrcDbM&Expires=1701330499&Signature=5icvZFcVjND3A2V3unoy7rgQ4mQ%3D",
      },
    ],
  },
  {
    Cover:
      "https://zfblog.su.bcebos.com/zfblogpicture/%E5%A4%B4%E5%83%8F111.webp",
    Name: "111",
    children: [
      {
        Episode: 1,
        Name: "222222",
        url: "https://2cpro.oss-cn-shanghai.aliyuncs.com/zhangfei/Grammar/Picture/216C266F6328F6D085B9FAB377624CE9.mp4?OSSAccessKeyId=LTAI5t5qDM9xCBygiycrcDbM&Expires=1701330499&Signature=5icvZFcVjND3A2V3unoy7rgQ4mQ%3D",
      },
      {
        Episode: 2,
        Name: "3333333",
        url: "https://2cpro.oss-cn-shanghai.aliyuncs.com/zhangfei/Grammar/Picture/216C266F6328F6D085B9FAB377624CE9.mp4?OSSAccessKeyId=LTAI5t5qDM9xCBygiycrcDbM&Expires=1701330499&Signature=5icvZFcVjND3A2V3unoy7rgQ4mQ%3D",
      },
      {
        Episode: 3,
        Name: "444444",
        url: "https://2cpro.oss-cn-shanghai.aliyuncs.com/zhangfei/Grammar/Picture/216C266F6328F6D085B9FAB377624CE9.mp4?OSSAccessKeyId=LTAI5t5qDM9xCBygiycrcDbM&Expires=1701330499&Signature=5icvZFcVjND3A2V3unoy7rgQ4mQ%3D",
      },
    ],
  },
  {
    Cover:
      "https://zfblog.su.bcebos.com/zfblogpicture/%E5%A4%B4%E5%83%8F111.webp",
    Name: "111",
    children: [
      {
        Episode: 1,
        Name: "222222",
        url: "https://2cpro.oss-cn-shanghai.aliyuncs.com/zhangfei/Grammar/Picture/216C266F6328F6D085B9FAB377624CE9.mp4?OSSAccessKeyId=LTAI5t5qDM9xCBygiycrcDbM&Expires=1701330499&Signature=5icvZFcVjND3A2V3unoy7rgQ4mQ%3D",
      },
      {
        Episode: 2,
        Name: "3333333",
        url: "https://2cpro.oss-cn-shanghai.aliyuncs.com/zhangfei/Grammar/Picture/216C266F6328F6D085B9FAB377624CE9.mp4?OSSAccessKeyId=LTAI5t5qDM9xCBygiycrcDbM&Expires=1701330499&Signature=5icvZFcVjND3A2V3unoy7rgQ4mQ%3D",
      },
      {
        Episode: 3,
        Name: "444444",
        url: "https://2cpro.oss-cn-shanghai.aliyuncs.com/zhangfei/Grammar/Picture/216C266F6328F6D085B9FAB377624CE9.mp4?OSSAccessKeyId=LTAI5t5qDM9xCBygiycrcDbM&Expires=1701330499&Signature=5icvZFcVjND3A2V3unoy7rgQ4mQ%3D",
      },
    ],
  },
  {
    Cover:
      "https://zfblog.su.bcebos.com/zfblogpicture/%E5%A4%B4%E5%83%8F111.webp",
    Name: "111",
    children: [
      {
        Episode: 1,
        Name: "222222",
        url: "https://2cpro.oss-cn-shanghai.aliyuncs.com/zhangfei/Grammar/Picture/216C266F6328F6D085B9FAB377624CE9.mp4?OSSAccessKeyId=LTAI5t5qDM9xCBygiycrcDbM&Expires=1701330499&Signature=5icvZFcVjND3A2V3unoy7rgQ4mQ%3D",
      },
      {
        Episode: 2,
        Name: "3333333",
        url: "https://2cpro.oss-cn-shanghai.aliyuncs.com/zhangfei/Grammar/Picture/216C266F6328F6D085B9FAB377624CE9.mp4?OSSAccessKeyId=LTAI5t5qDM9xCBygiycrcDbM&Expires=1701330499&Signature=5icvZFcVjND3A2V3unoy7rgQ4mQ%3D",
      },
      {
        Episode: 3,
        Name: "444444",
        url: "https://2cpro.oss-cn-shanghai.aliyuncs.com/zhangfei/Grammar/Picture/216C266F6328F6D085B9FAB377624CE9.mp4?OSSAccessKeyId=LTAI5t5qDM9xCBygiycrcDbM&Expires=1701330499&Signature=5icvZFcVjND3A2V3unoy7rgQ4mQ%3D",
      },
    ],
  },
  {
    Cover:
      "https://zfblog.su.bcebos.com/zfblogpicture/%E5%A4%B4%E5%83%8F111.webp",
    Name: "111",
    children: [
      {
        Episode: 1,
        Name: "222222",
        url: "https://2cpro.oss-cn-shanghai.aliyuncs.com/zhangfei/Grammar/Picture/216C266F6328F6D085B9FAB377624CE9.mp4?OSSAccessKeyId=LTAI5t5qDM9xCBygiycrcDbM&Expires=1701330499&Signature=5icvZFcVjND3A2V3unoy7rgQ4mQ%3D",
      },
      {
        Episode: 2,
        Name: "3333333",
        url: "https://2cpro.oss-cn-shanghai.aliyuncs.com/zhangfei/Grammar/Picture/216C266F6328F6D085B9FAB377624CE9.mp4?OSSAccessKeyId=LTAI5t5qDM9xCBygiycrcDbM&Expires=1701330499&Signature=5icvZFcVjND3A2V3unoy7rgQ4mQ%3D",
      },
      {
        Episode: 3,
        Name: "444444",
        url: "https://2cpro.oss-cn-shanghai.aliyuncs.com/zhangfei/Grammar/Picture/216C266F6328F6D085B9FAB377624CE9.mp4?OSSAccessKeyId=LTAI5t5qDM9xCBygiycrcDbM&Expires=1701330499&Signature=5icvZFcVjND3A2V3unoy7rgQ4mQ%3D",
      },
    ],
  },
  {
    Cover:
      "https://zfblog.su.bcebos.com/zfblogpicture/%E5%A4%B4%E5%83%8F111.webp",
    Name: "111",
    children: [
      {
        Episode: 1,
        Name: "222222",
        url: "https://2cpro.oss-cn-shanghai.aliyuncs.com/zhangfei/Grammar/Picture/216C266F6328F6D085B9FAB377624CE9.mp4?OSSAccessKeyId=LTAI5t5qDM9xCBygiycrcDbM&Expires=1701330499&Signature=5icvZFcVjND3A2V3unoy7rgQ4mQ%3D",
      },
      {
        Episode: 2,
        Name: "3333333",
        url: "https://2cpro.oss-cn-shanghai.aliyuncs.com/zhangfei/Grammar/Picture/216C266F6328F6D085B9FAB377624CE9.mp4?OSSAccessKeyId=LTAI5t5qDM9xCBygiycrcDbM&Expires=1701330499&Signature=5icvZFcVjND3A2V3unoy7rgQ4mQ%3D",
      },
      {
        Episode: 3,
        Name: "444444",
        url: "https://2cpro.oss-cn-shanghai.aliyuncs.com/zhangfei/Grammar/Picture/216C266F6328F6D085B9FAB377624CE9.mp4?OSSAccessKeyId=LTAI5t5qDM9xCBygiycrcDbM&Expires=1701330499&Signature=5icvZFcVjND3A2V3unoy7rgQ4mQ%3D",
      },
    ],
  },
  {
    Cover:
      "https://zfblog.su.bcebos.com/zfblogpicture/%E5%A4%B4%E5%83%8F111.webp",
    Name: "111",
    children: [
      {
        Episode: 1,
        Name: "222222",
        url: "https://2cpro.oss-cn-shanghai.aliyuncs.com/zhangfei/Grammar/Picture/216C266F6328F6D085B9FAB377624CE9.mp4?OSSAccessKeyId=LTAI5t5qDM9xCBygiycrcDbM&Expires=1701330499&Signature=5icvZFcVjND3A2V3unoy7rgQ4mQ%3D",
      },
      {
        Episode: 2,
        Name: "3333333",
        url: "https://2cpro.oss-cn-shanghai.aliyuncs.com/zhangfei/Grammar/Picture/216C266F6328F6D085B9FAB377624CE9.mp4?OSSAccessKeyId=LTAI5t5qDM9xCBygiycrcDbM&Expires=1701330499&Signature=5icvZFcVjND3A2V3unoy7rgQ4mQ%3D",
      },
      {
        Episode: 3,
        Name: "444444",
        url: "https://2cpro.oss-cn-shanghai.aliyuncs.com/zhangfei/Grammar/Picture/216C266F6328F6D085B9FAB377624CE9.mp4?OSSAccessKeyId=LTAI5t5qDM9xCBygiycrcDbM&Expires=1701330499&Signature=5icvZFcVjND3A2V3unoy7rgQ4mQ%3D",
      },
    ],
  },
  {
    Cover:
      "https://zfblog.su.bcebos.com/zfblogpicture/%E5%A4%B4%E5%83%8F111.webp",
    Name: "111",
    children: [
      {
        Episode: 1,
        Name: "222222",
        url: "https://2cpro.oss-cn-shanghai.aliyuncs.com/zhangfei/Grammar/Picture/216C266F6328F6D085B9FAB377624CE9.mp4?OSSAccessKeyId=LTAI5t5qDM9xCBygiycrcDbM&Expires=1701330499&Signature=5icvZFcVjND3A2V3unoy7rgQ4mQ%3D",
      },
      {
        Episode: 2,
        Name: "3333333",
        url: "https://2cpro.oss-cn-shanghai.aliyuncs.com/zhangfei/Grammar/Picture/216C266F6328F6D085B9FAB377624CE9.mp4?OSSAccessKeyId=LTAI5t5qDM9xCBygiycrcDbM&Expires=1701330499&Signature=5icvZFcVjND3A2V3unoy7rgQ4mQ%3D",
      },
      {
        Episode: 3,
        Name: "444444",
        url: "https://2cpro.oss-cn-shanghai.aliyuncs.com/zhangfei/Grammar/Picture/216C266F6328F6D085B9FAB377624CE9.mp4?OSSAccessKeyId=LTAI5t5qDM9xCBygiycrcDbM&Expires=1701330499&Signature=5icvZFcVjND3A2V3unoy7rgQ4mQ%3D",
      },
    ],
  },
  {
    Cover:
      "https://zfblog.su.bcebos.com/zfblogpicture/%E5%A4%B4%E5%83%8F111.webp",
    Name: "111",
    children: [
      {
        Episode: 1,
        Name: "222222",
        url: "https://2cpro.oss-cn-shanghai.aliyuncs.com/zhangfei/Grammar/Picture/216C266F6328F6D085B9FAB377624CE9.mp4?OSSAccessKeyId=LTAI5t5qDM9xCBygiycrcDbM&Expires=1701330499&Signature=5icvZFcVjND3A2V3unoy7rgQ4mQ%3D",
      },
      {
        Episode: 2,
        Name: "3333333",
        url: "https://2cpro.oss-cn-shanghai.aliyuncs.com/zhangfei/Grammar/Picture/216C266F6328F6D085B9FAB377624CE9.mp4?OSSAccessKeyId=LTAI5t5qDM9xCBygiycrcDbM&Expires=1701330499&Signature=5icvZFcVjND3A2V3unoy7rgQ4mQ%3D",
      },
      {
        Episode: 3,
        Name: "444444",
        url: "https://2cpro.oss-cn-shanghai.aliyuncs.com/zhangfei/Grammar/Picture/216C266F6328F6D085B9FAB377624CE9.mp4?OSSAccessKeyId=LTAI5t5qDM9xCBygiycrcDbM&Expires=1701330499&Signature=5icvZFcVjND3A2V3unoy7rgQ4mQ%3D",
      },
    ],
  },
  {
    Cover:
      "https://zfblog.su.bcebos.com/zfblogpicture/%E5%A4%B4%E5%83%8F111.webp",
    Name: "111",
    children: [
      {
        Episode: 1,
        Name: "222222",
        url: "https://2cpro.oss-cn-shanghai.aliyuncs.com/zhangfei/Grammar/Picture/216C266F6328F6D085B9FAB377624CE9.mp4?OSSAccessKeyId=LTAI5t5qDM9xCBygiycrcDbM&Expires=1701330499&Signature=5icvZFcVjND3A2V3unoy7rgQ4mQ%3D",
      },
      {
        Episode: 2,
        Name: "3333333",
        url: "https://2cpro.oss-cn-shanghai.aliyuncs.com/zhangfei/Grammar/Picture/216C266F6328F6D085B9FAB377624CE9.mp4?OSSAccessKeyId=LTAI5t5qDM9xCBygiycrcDbM&Expires=1701330499&Signature=5icvZFcVjND3A2V3unoy7rgQ4mQ%3D",
      },
      {
        Episode: 3,
        Name: "444444",
        url: "https://2cpro.oss-cn-shanghai.aliyuncs.com/zhangfei/Grammar/Picture/216C266F6328F6D085B9FAB377624CE9.mp4?OSSAccessKeyId=LTAI5t5qDM9xCBygiycrcDbM&Expires=1701330499&Signature=5icvZFcVjND3A2V3unoy7rgQ4mQ%3D",
      },
    ],
  },
  {
    Cover:
      "https://zfblog.su.bcebos.com/zfblogpicture/%E5%A4%B4%E5%83%8F111.webp",
    Name: "111",
    children: [
      {
        Episode: 1,
        Name: "222222",
        url: "https://2cpro.oss-cn-shanghai.aliyuncs.com/zhangfei/Grammar/Picture/216C266F6328F6D085B9FAB377624CE9.mp4?OSSAccessKeyId=LTAI5t5qDM9xCBygiycrcDbM&Expires=1701330499&Signature=5icvZFcVjND3A2V3unoy7rgQ4mQ%3D",
      },
      {
        Episode: 2,
        Name: "3333333",
        url: "https://2cpro.oss-cn-shanghai.aliyuncs.com/zhangfei/Grammar/Picture/216C266F6328F6D085B9FAB377624CE9.mp4?OSSAccessKeyId=LTAI5t5qDM9xCBygiycrcDbM&Expires=1701330499&Signature=5icvZFcVjND3A2V3unoy7rgQ4mQ%3D",
      },
      {
        Episode: 3,
        Name: "444444",
        url: "https://2cpro.oss-cn-shanghai.aliyuncs.com/zhangfei/Grammar/Picture/216C266F6328F6D085B9FAB377624CE9.mp4?OSSAccessKeyId=LTAI5t5qDM9xCBygiycrcDbM&Expires=1701330499&Signature=5icvZFcVjND3A2V3unoy7rgQ4mQ%3D",
      },
    ],
  },
  {
    Cover:
      "https://zfblog.su.bcebos.com/zfblogpicture/%E5%A4%B4%E5%83%8F111.webp",
    Name: "111",
    children: [
      {
        Episode: 1,
        Name: "222222",
        url: "https://2cpro.oss-cn-shanghai.aliyuncs.com/zhangfei/Grammar/Picture/216C266F6328F6D085B9FAB377624CE9.mp4?OSSAccessKeyId=LTAI5t5qDM9xCBygiycrcDbM&Expires=1701330499&Signature=5icvZFcVjND3A2V3unoy7rgQ4mQ%3D",
      },
      {
        Episode: 2,
        Name: "3333333",
        url: "https://2cpro.oss-cn-shanghai.aliyuncs.com/zhangfei/Grammar/Picture/216C266F6328F6D085B9FAB377624CE9.mp4?OSSAccessKeyId=LTAI5t5qDM9xCBygiycrcDbM&Expires=1701330499&Signature=5icvZFcVjND3A2V3unoy7rgQ4mQ%3D",
      },
      {
        Episode: 3,
        Name: "444444",
        url: "https://2cpro.oss-cn-shanghai.aliyuncs.com/zhangfei/Grammar/Picture/216C266F6328F6D085B9FAB377624CE9.mp4?OSSAccessKeyId=LTAI5t5qDM9xCBygiycrcDbM&Expires=1701330499&Signature=5icvZFcVjND3A2V3unoy7rgQ4mQ%3D",
      },
    ],
  },
  {
    Cover:
      "https://zfblog.su.bcebos.com/zfblogpicture/%E5%A4%B4%E5%83%8F111.webp",
    Name: "111",
    children: [
      {
        Episode: 1,
        Name: "222222",
        url: "https://2cpro.oss-cn-shanghai.aliyuncs.com/zhangfei/Grammar/Picture/216C266F6328F6D085B9FAB377624CE9.mp4?OSSAccessKeyId=LTAI5t5qDM9xCBygiycrcDbM&Expires=1701330499&Signature=5icvZFcVjND3A2V3unoy7rgQ4mQ%3D",
      },
      {
        Episode: 2,
        Name: "3333333",
        url: "https://2cpro.oss-cn-shanghai.aliyuncs.com/zhangfei/Grammar/Picture/216C266F6328F6D085B9FAB377624CE9.mp4?OSSAccessKeyId=LTAI5t5qDM9xCBygiycrcDbM&Expires=1701330499&Signature=5icvZFcVjND3A2V3unoy7rgQ4mQ%3D",
      },
      {
        Episode: 3,
        Name: "444444",
        url: "https://2cpro.oss-cn-shanghai.aliyuncs.com/zhangfei/Grammar/Picture/216C266F6328F6D085B9FAB377624CE9.mp4?OSSAccessKeyId=LTAI5t5qDM9xCBygiycrcDbM&Expires=1701330499&Signature=5icvZFcVjND3A2V3unoy7rgQ4mQ%3D",
      },
    ],
  },
  {
    Cover:
      "https://zfblog.su.bcebos.com/zfblogpicture/%E5%A4%B4%E5%83%8F111.webp",
    Name: "111",
    children: [
      {
        Episode: 1,
        Name: "222222",
        url: "https://2cpro.oss-cn-shanghai.aliyuncs.com/zhangfei/Grammar/Picture/216C266F6328F6D085B9FAB377624CE9.mp4?OSSAccessKeyId=LTAI5t5qDM9xCBygiycrcDbM&Expires=1701330499&Signature=5icvZFcVjND3A2V3unoy7rgQ4mQ%3D",
      },
      {
        Episode: 2,
        Name: "3333333",
        url: "https://2cpro.oss-cn-shanghai.aliyuncs.com/zhangfei/Grammar/Picture/216C266F6328F6D085B9FAB377624CE9.mp4?OSSAccessKeyId=LTAI5t5qDM9xCBygiycrcDbM&Expires=1701330499&Signature=5icvZFcVjND3A2V3unoy7rgQ4mQ%3D",
      },
      {
        Episode: 3,
        Name: "444444",
        url: "https://2cpro.oss-cn-shanghai.aliyuncs.com/zhangfei/Grammar/Picture/216C266F6328F6D085B9FAB377624CE9.mp4?OSSAccessKeyId=LTAI5t5qDM9xCBygiycrcDbM&Expires=1701330499&Signature=5icvZFcVjND3A2V3unoy7rgQ4mQ%3D",
      },
    ],
  },
  {
    Cover:
      "https://zfblog.su.bcebos.com/zfblogpicture/%E5%A4%B4%E5%83%8F111.webp",
    Name: "111",
    children: [
      {
        Episode: 1,
        Name: "222222",
        url: "https://2cpro.oss-cn-shanghai.aliyuncs.com/zhangfei/Grammar/Picture/216C266F6328F6D085B9FAB377624CE9.mp4?OSSAccessKeyId=LTAI5t5qDM9xCBygiycrcDbM&Expires=1701330499&Signature=5icvZFcVjND3A2V3unoy7rgQ4mQ%3D",
      },
      {
        Episode: 2,
        Name: "3333333",
        url: "https://2cpro.oss-cn-shanghai.aliyuncs.com/zhangfei/Grammar/Picture/216C266F6328F6D085B9FAB377624CE9.mp4?OSSAccessKeyId=LTAI5t5qDM9xCBygiycrcDbM&Expires=1701330499&Signature=5icvZFcVjND3A2V3unoy7rgQ4mQ%3D",
      },
      {
        Episode: 3,
        Name: "444444",
        url: "https://2cpro.oss-cn-shanghai.aliyuncs.com/zhangfei/Grammar/Picture/216C266F6328F6D085B9FAB377624CE9.mp4?OSSAccessKeyId=LTAI5t5qDM9xCBygiycrcDbM&Expires=1701330499&Signature=5icvZFcVjND3A2V3unoy7rgQ4mQ%3D",
      },
    ],
  },
  {
    Cover:
      "https://zfblog.su.bcebos.com/zfblogpicture/%E5%A4%B4%E5%83%8F111.webp",
    Name: "111",
    children: [
      {
        Episode: 1,
        Name: "222222",
        url: "https://2cpro.oss-cn-shanghai.aliyuncs.com/zhangfei/Grammar/Picture/216C266F6328F6D085B9FAB377624CE9.mp4?OSSAccessKeyId=LTAI5t5qDM9xCBygiycrcDbM&Expires=1701330499&Signature=5icvZFcVjND3A2V3unoy7rgQ4mQ%3D",
      },
      {
        Episode: 2,
        Name: "3333333",
        url: "https://2cpro.oss-cn-shanghai.aliyuncs.com/zhangfei/Grammar/Picture/216C266F6328F6D085B9FAB377624CE9.mp4?OSSAccessKeyId=LTAI5t5qDM9xCBygiycrcDbM&Expires=1701330499&Signature=5icvZFcVjND3A2V3unoy7rgQ4mQ%3D",
      },
      {
        Episode: 3,
        Name: "444444",
        url: "https://2cpro.oss-cn-shanghai.aliyuncs.com/zhangfei/Grammar/Picture/216C266F6328F6D085B9FAB377624CE9.mp4?OSSAccessKeyId=LTAI5t5qDM9xCBygiycrcDbM&Expires=1701330499&Signature=5icvZFcVjND3A2V3unoy7rgQ4mQ%3D",
      },
    ],
  },
];
const VideoList = ({ goShowVideo }) => {
  return (
    <div className="VideoList">
      {items &&
        items.map((item, index) => {
          return (
            <Card
              style={{
                width: 230,
                border: "none",
                background: "rgba(51, 51, 51, 0.5)",
                display: "inline-block",
                margin: 10,
              }}
              onClick={() => {
                goShowVideo({
                  url: `/ShowVideo/${item.Name}`,
                  state: item,
                });
              }}
              cover={
                <img
                  alt="example"
                  src={item.Cover}
                  style={{ width: 230, height: 250, objectFit: "cover" }}
                />
              }
              actions={[]}
            >
              <Meta title={item.Name} description="This is the description" />
            </Card>
          );
        })}
    </div>
  );
};

export default VideoList;
