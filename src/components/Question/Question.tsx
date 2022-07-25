import React from "react";
import "./Question.scss";

interface Props{
	question: string,
	answer?: string,
}

const Question:React.FC<Props> = ({ question}) => {
  return <article className="question">
	<div className="question__body">
		<div className="question__text">{question}</div>
		<button className="question__btn">+</button>
	</div>
	{/*<div className="question__answer">В будущем встроить ответ</div>*/}
  </article>;
};

export default Question;
