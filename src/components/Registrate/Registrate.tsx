import React from "react";
import Form from "../Form/Form";
import Price from "../Price/Price";
import "./Registrate.scss";



const Registrate: React.FC = () => {
  return (
    <div className="registrate">
      <Price />
      <Form />
    </div>
  );
};

export default Registrate;
