import React from "react";

const ZfButton = ({ props }) => {
  const text = props && props.text ? props.text : 1111;
  const style =
    props && props.style
      ? props.style
      : {
          width: 100,
          height: 50,
          backgroundColor: "pink",
          color: "#fff",
          borderRadius:10,
          border:0
        };

  return (
    <div>
      <button style={style} className="ZfButton">{text}</button>
    </div>
  );
};

export default ZfButton;
