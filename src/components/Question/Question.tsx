import React, { useState } from "react";
import "./Question.scss";

interface Props {
  question: string;
  answer: string;
}

const Question: React.FC<Props> = ({ question, answer }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <article className="question">
      <div className="question__body">
        <div className="question__text">{question}</div>
        <button className="question__btn" onClick={()=> setExpanded(!expanded)}>{expanded ? "—" : "+"}</button>
      </div>
	  {expanded && <div className="question__answer">{answer}</div>}
    </article>
  );
};

export default Question;
