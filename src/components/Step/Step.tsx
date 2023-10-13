import React, { MutableRefObject } from "react";
import "./Step.scss";

import reactStringReplace from "react-string-replace";

interface Props {
  num: number;
  text: string;
  ref: MutableRefObject<HTMLDivElement | null>;
}

const Step: React.FC<Props> = ({ num, text, ref }) => {
  const handleClick = () => {
    ref.current?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <div className="step">
      <div className="step__order">{num}</div>
      <p className="step__text">
        {reactStringReplace(text, "Здесь", () => (
          <span onClick={handleClick}>Здесь</span>
        ))}
      </p>
    </div>
  );
};

export default Step;
