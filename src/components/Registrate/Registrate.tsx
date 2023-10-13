import React, { MutableRefObject } from "react";
import Form from "../Form/Form";
import Price from "../Price/Price";
import "./Registrate.scss";

const Registrate: React.FC<{
  ref: MutableRefObject<HTMLDivElement | null>;
}> = ({ ref }) => {
  return (
    <div className="registrate" ref={ref}>
      <Price />
      <Form />
    </div>
  );
};

export default Registrate;
