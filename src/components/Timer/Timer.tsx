import './Timer.scss'

const Timer: React.FC = () => {
  return (
    <section className="timer">
      <div className="timer__body">
        <div className="timer__card">
          <div className="timer__counter">01</div>
          <div className="timer__count-name">дней</div>
        </div>
		<span>:</span>
        <div className="timer__card">
          <div className="timer__counter">09</div>
          <div className="timer__count-name">часов <br /><span>по МСК</span></div>
        </div>
		<span>:</span>
        <div className="timer__card">
          <div className="timer__counter">43</div>
          <div className="timer__count-name">минут</div>
        </div>
      </div>
	  
    </section>
  );
};

export default Timer;
