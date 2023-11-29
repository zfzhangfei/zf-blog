import { Space } from "antd";
import React, { useState } from "react";
import { motion } from "framer-motion";

const Barrage = ({ item }) => {
  const [pausedX, setPausedX] = useState("80vw");
  const [animateState, setAnimateState] = useState("visible");
  const [topPosition, setTopPosition] = useState(Math.random() * 550);
  const [duration, setDuration] = useState(20);
  const [delay, setDelay] = useState(Math.random() * 3);

  const visibleVariants = {
    x: [pausedX, "-20vw"],
    transition: {
      delay: delay,
      duration: duration,
      onComplete: () => {
        setPausedX('80vw');
        setAnimateState('restart');
      },
    },
  };
  
  const itemVariants = {
    visible: visibleVariants,
    paused: {
      x: pausedX,
    },
    restart: visibleVariants,
  };
  return (
    <motion.div
      animate={animateState}
      variants={itemVariants}
      className="barrage"
      style={{
        color: item.Color,
        position: "absolute",
        top: `${topPosition}px`,
        fontFamily: item.FontFamily,
        display: "flex",
        alignItems: "center",
      }}
      whileHover={(e, info) => {
        const Dvalue = parseFloat(info.x) - parseFloat("-20vw")
        const Ratio = (Dvalue/100)*20
        setDuration(Ratio)
        setPausedX(info.x);
      }}
      onHoverStart={(e, info) => {
        setAnimateState("paused");
      }}
      onHoverEnd={() => {
        setAnimateState("visible");
        setDelay(0)
      }}
    >
      <Space
        style={{
          width: "100%",
        }}
      >
        <img
          src={item.Avatar}
          alt=""
          style={{
            width: 40,
            height: 40,
            margin: 5,
            display: "block",
            borderRadius: "50%",
            objectFit: "cover",
          }}
        />
        <div style={{ margin: 5 }}>{item.Content}</div>
      </Space>
    </motion.div>
  );
};

export default Barrage;
