import React from "react";
import "./Benefit.scss";

interface Props {
  img: string;
  text: string;
  highlighted?: string;
}

const Benefit: React.FC<Props> = ({ img, text, highlighted }) => {
  const highlight = (
    <a href="" style={{ color: "#FF946E", textDecoration: "underline" }}>
      {highlighted}
    </a>
  );

  return (
    <div className="benefit">
      <div className="benefit__img">
        <img src={img} alt="" />
      </div>
      <p className="benefit__text">
        {text} {highlight}
      </p>
    </div>
  );
};

export default Benefit;
