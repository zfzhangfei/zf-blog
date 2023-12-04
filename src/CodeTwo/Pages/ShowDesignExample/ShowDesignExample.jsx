import React from "react";
import "./ShowDesignExample.scss";
import ImitationPortfolio from "../Article/Works/WorksComponents/Clonepage/ImitationPortfolio/ImitationPortfolio";
import Works from "../Article/Works/Works";
import { Button } from "antd";
import { useHistory } from "react-router-dom";

const ShowDesignExample = () => {
  const history = useHistory();
  const ShowWebWorks = () => {
    history.push("/ShowWebWorks");
  };
  return (
    <div className="ShowDesignExample">
      <div className="DesignExampleBox1">
        <Button onClick={ShowWebWorks}>网页作品</Button>
      </div>
      <div className="DesignExampleBox2">
        <Works pagename={"vvv"}></Works>
      </div>
    </div>
  );
};

export default ShowDesignExample;
