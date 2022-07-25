import React from 'react'
import Question from '../Question/Question';
import './FAQ.scss'

const faqState = [
  {
    id: 1,
    question: "Может ли ребёнок заниматься самостоятельно?",
    answer: "",
  },
  {
    id: 2,
    question: "Как происходит оплата?",
    answer: "",
  },
  {
    id: 3,
    question: "Есть ли гарантии усвоения материала?",
    answer: "",
  },
  {
    id: 4,
    question: "С кем будет общаться мой ребёнок?",
    answer: "",
  },
  {
    id: 5,
    question: "Каковы принципы обучения?",
    answer: "",
  },
  {
    id: 6,
    question: "Сколько раз в неделю можно заниматься?",
    answer: "",
  },
];

const FAQ:React.FC = () => {
  return (
	<section className='faq'>
		<h2 className="faq__title title">Вопрос/Ответ</h2>
		<div className="faq__items">
			{faqState.map(q => <Question key={q.id} question={q.question}/>)}
		</div>
	</section>
  )
}

export default FAQ