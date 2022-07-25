import React from "react";
import "./SecondaryButton.scss";

const SecondaryButton: React.FC<{ content: string }> = ({ content }) => {
  return <button className="second-btn">{content}</button>;
};

export default SecondaryButton;
