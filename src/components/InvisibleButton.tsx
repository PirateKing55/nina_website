import React from "react";

interface InvisibleButtonProps {
  top?: string;
  right?: string;
  bottom?: string;
  left?: string;
  width?: string;
  height?: string;
  position?: "static" | "relative" | "absolute" | "sticky" | "fixed";
  cursor?: string;
  borderRadius?: string;
  backgroundColor?: string;
  link?: string;
  target?: string;
}

const InvisibleButton: React.FC<InvisibleButtonProps> = ({ top, right, bottom, left, width, height, link, target, position = "absolute", cursor = "pointer", borderRadius = "5px", backgroundColor = "transparent" }) => {
  const buttonStyle: React.CSSProperties = {
    top,
    right,
    bottom,
    left,
    width,
    height,
    position,
    cursor,
    borderRadius,
    backgroundColor,
  };

  return (
    <a href={link} target={target} style={buttonStyle}>
      {/* Invisible Button */}
    </a>
  );
};

export default InvisibleButton;

// import React from "react";

// const InvisibleButton = ({ top, right, bottom, left, width, height, link, target }) => {
//   const buttonStyle = {
//     top: top,
//     right: right,
//     bottom: bottom,
//     left: left,
//     width: width,
//     height: height,
//     position: "absolute",
//     cursor: "pointer",
//     borderRadius: "15px",
//     backgroundColor: "transparent",
//     // border: "none",
//     // color: "transparent",
//     // backgroundColor: "yellow",
//   };

//   const handleClick = () => {
//     if (target === "_blank") {
//       window.open(link, "_blank");
//     } else {
//       window.location.href = link;
//     }
//   };

//   return (
//     <button style={buttonStyle} onClick={handleClick}>
//       Invisible-Btn
//     </button>
//   );
// };

// export default InvisibleButton;
