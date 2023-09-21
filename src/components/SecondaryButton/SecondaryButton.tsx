import React, { Dispatch, SetStateAction } from "react";
import "./SecondaryButton.scss";

const SecondaryButton: React.FC<{ isOpened: boolean, toggle: Dispatch<SetStateAction<boolean>> }> = ({ isOpened, toggle }) => {
  return <button onClick={()=> toggle(!isOpened)} className="second-btn">Виртуальный помощник</button>;
};

export default SecondaryButton;
