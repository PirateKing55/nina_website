import React from "react";

const InvisibleButton = ({ top, right, bottom, left, width, height, link, target }) => {
  const buttonStyle = {
    top: top,
    right: right,
    bottom: bottom,
    left: left,
    width: width,
    height: height,
    position: "absolute",
    cursor: "pointer",
    borderRadius: "15px",
    backgroundColor: "transparent",
    // border: "none",
    // color: "transparent",
    // backgroundColor: "yellow",
  };

  const handleClick = () => {
    if (target === "_blank") {
      window.open(link, "_blank");
    } else {
      window.location.href = link;
    }
  };

  return (
    <button style={buttonStyle} onClick={handleClick}>
      {/* Invisible-Btn */}
    </button>
  );
};

export default InvisibleButton;
