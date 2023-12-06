import React from "react";
import "./ShowPhoto.scss";
import { ArrowLeftOutlined } from "@ant-design/icons";
import { useHistory } from "react-router-dom";

const ShowPhoto = () => {
  const history = useHistory();
  const goBack = () => {
    history.goBack();
  };

  return (
    <div className="ShowPhoto">
      <div>
        <ArrowLeftOutlined onClick={goBack} />
      </div>
    </div>
  );
};

export default ShowPhoto;
