import React from "react";
import "./ApplicationPage.scss";
import { DownOutlined } from "@ant-design/icons";
import { motion } from "framer-motion";

const ApplicationPage = ({ changePage }) => {
  const textVariants = {
    scrollButton: {
      opacity: 0,
      y: 10,
      transition: {
        duration: 2,
        repeat: Infinity,
      },
    },
  };
  const handleDownClick = () => {
    changePage();
  };

  return (
    <div className="ApplicationPage">
      <div className="wrapper">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          Zhang Fei
        </motion.span>
        <div className="social">
          <a href="#">
            <img src="/CodeTwo/QQ.png" alt="" />
          </a>
          <a href="#">
            <img src="/CodeTwo/微信.png" alt="" />
          </a>
        </div>
      </div>
      <motion.div
        className="sliderBtn"
        variants={textVariants}
        animate="scrollButton"
      >
        <DownOutlined
          style={{ color: "#fff", fontSize: 32 }}
          onClick={handleDownClick}
        />
      </motion.div>
    </div>
  );
};

export default ApplicationPage;
