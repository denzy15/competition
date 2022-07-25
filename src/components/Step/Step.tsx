import React from "react";
import './Step.scss'

import reactStringReplace from "react-string-replace";

interface Props {
  num: number;
  text: string;
}

const Step: React.FC<Props> = ({ num, text}) => {
  return (
    <div className="step">
      <div className="step__order">{num}</div>
      <p className="step__text">
        {reactStringReplace(text, "Здесь", () => (
          <a href="../../../public/index.html">Здесь</a>
        ))}
      </p>
    </div>
  );
};

export default Step;
