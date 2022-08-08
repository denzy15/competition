import { useState } from 'react';
import './Timer.scss'

interface Timer {
  d: number,
  h: number,
  m: number,

} 

const Timer: React.FC = () => {
  const [timer , setTimer] = useState<Timer>({d: 1, h: 9, m: 43 })

  return (
    <section className="timer">
      <div className="timer__body">
        <div className="timer__card">
          <div className="timer__counter">{timer.d < 10 ? `0${timer.d}` : timer.d}</div>
          <div className="timer__count-name">дней</div>
        </div>
		<span>:</span>
        <div className="timer__card">
          <div className="timer__counter">{timer.h < 10 ? `0${timer.h}` : timer.h}</div>
          <div className="timer__count-name">часов <br /><span>по МСК</span></div>
        </div>
		<span>:</span>
        <div className="timer__card">
          <div className="timer__counter">{timer.m < 10 ? `0${timer.m}` : timer.m}</div>
          <div className="timer__count-name">минут</div>
        </div>
      </div>
	  
    </section>
  );
};

export default Timer;
