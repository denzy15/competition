import React from 'react'
import Question from '../Question/Question';
import './FAQ.scss'


const faqState = [
  {
    id: 1,
    question: "Может ли ребёнок заниматься самостоятельно?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit odio minima perspiciatis sit totam, laboriosam est eaque, eius molestiae, doloremque id sequi delectus laudantium possimus nesciunt voluptate cumque impedit suscipit.",
  },
  {
    id: 2,
    question: "Как происходит оплата?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit odio minima perspiciatis sit totam, laboriosam est eaque, eius molestiae, doloremque id sequi delectus laudantium possimus nesciunt voluptate cumque impedit suscipit.",
  },
  {
    id: 3,
    question: "Есть ли гарантии усвоения материала?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit odio minima perspiciatis sit totam, laboriosam est eaque, eius molestiae, doloremque id sequi delectus laudantium possimus nesciunt voluptate cumque impedit suscipit.",
  },
  {
    id: 4,
    question: "С кем будет общаться мой ребёнок?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit odio minima perspiciatis sit totam, laboriosam est eaque, eius molestiae, doloremque id sequi delectus laudantium possimus nesciunt voluptate cumque impedit suscipit.",
  },
  {
    id: 5,
    question: "Каковы принципы обучения?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit odio minima perspiciatis sit totam, laboriosam est eaque, eius molestiae, doloremque id sequi delectus laudantium possimus nesciunt voluptate cumque impedit suscipit.",
  },
  {
    id: 6,
    question: "Сколько раз в неделю можно заниматься?",
    answer: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Odit odio minima perspiciatis sit totam, laboriosam est eaque, eius molestiae, doloremque id sequi delectus laudantium possimus nesciunt voluptate cumque impedit suscipit.",
  },
];

const FAQ:React.FC = () => {
  return (
	<section className='faq'>
		<h2 className="faq__title title">Вопрос/Ответ</h2>
		<div className="faq__items">
			{faqState.map(q => <Question key={q.id} question={q.question} answer={q.answer}/>)}
		</div>
	</section>
  )
}

export default FAQ