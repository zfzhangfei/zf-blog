import React, { useCallback, useEffect } from "react";
import ApplicationPage from "./CoverTwoComponents/ApplicationPage/ApplicationPage";
import Home from "./CoverTwoComponents/Home/Home";
import "./CoverTwo.scss";
import { motion } from "framer-motion";
import { useSelector, useDispatch } from "react-redux";

const CoverTwo = ({ props }) => {
  const dispatch = useDispatch();
  const isApplicationPageVisible = useSelector(
    (state) => state.isShowApplicationPage
  );

  useEffect(() => {
    document.body.style.overflow = isApplicationPageVisible
      ? "hidden"
      : "visible";
    return () => {
      document.body.style.overflow = "visible";
    };
  }, [isApplicationPageVisible]);

  const containerVariants = {
    visible: { y: 0 },
    hidden: { y: "-100vh" }, // 向上移动整个视口的高度
  };

  const handlechangePage = useCallback(() => {
    dispatch({
      type: "SET_SHOWAPPLICATIONPAGE",
      payload: !isApplicationPageVisible,
    });
  }, [dispatch, isApplicationPageVisible]);

  return (
    <div className="CoverTwo">
      <motion.section
        id="ApplicationPage"
        initial={isApplicationPageVisible ? "visible" : "hidden"}
        animate={isApplicationPageVisible ? "visible" : "hidden"}
        variants={containerVariants}
        transition={{ duration: 0.5 }} // 或其他您喜欢的持续时间
        className="section"
      >
        <ApplicationPage props={props} changePage={handlechangePage} />
      </motion.section>
      <section id="Home" className="section">
        <Home props={props} changePage={handlechangePage} />
      </section>
    </div>
  );
};
export default CoverTwo;
