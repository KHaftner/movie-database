import React from "react";

const TextLimit = ({ text, limit }) => {
  if (text.length <= limit) {
    return <span>{text}</span>;
  }

  const trimmedText = text.slice(0, limit) + "...";
  return <span>{trimmedText}</span>;
};

export default TextLimit;