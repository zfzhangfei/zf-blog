import React, { useEffect } from "react";
import "./Wall.scss";
import { useDispatch, useSelector } from "react-redux";
import { getMessageAsync } from "../../../../Api/Api";
import { motion } from "framer-motion";
import { Space } from "antd";

const Wall = () => {
  const dispatch = useDispatch();
  const messageList = useSelector((state) => state.messageList); // 确保这里的路径与你的状态树匹配

  useEffect(() => {
    dispatch(getMessageAsync());
  }, [dispatch]);

  return (
    <div className="Wall">
      <img
        className="Image"
        src="/CodeTwo/Wall/111.Webp"
        style={{ width: 300, height: 300 }}
        alt="Background"
      />
      <div className="MessageScreen">
        {messageList &&
          messageList.map((item, index) => {
            const topPosition = Math.random() * 550;
            const duration = 20;
            const delay = Math.random() * 3;

            const itemVariants = {
              visible: {
                x: ["2000%", "-500%"],
                transition: {
                  delay: delay,
                  duration: duration,
                  repeat: Infinity,
                  repeatType: "loop",
                },
              },
            };
            return (
              <motion.div
                animate="visible"
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
                key={index}
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
          })}
      </div>
    </div>
  );
};

export default Wall;
