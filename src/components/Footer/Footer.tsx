import "./Footer.scss";

import  tgIcon from '../../media/icons/telega.svg'
import  idkIcon from '../../media/icons/idk.svg'
import  vkIcon from '../../media/icons/vk.svg'



const Footer: React.FC = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
		<div className="footer__row">
			<div className="footer__medias">
				<h5>Наши соцсети:</h5>
				<div className="medias">
					<a href="#"><img src={tgIcon} alt="" /></a>
					<a href="#"><img src={idkIcon} alt="" /></a>
					<a href=""><img src={vkIcon} alt="" /></a>
				</div>
			</div>
			<ul className="footer__links">
				<li><a href="#">Главная</a></li>
				<li><a href="#">Личный кабинет</a></li>
				<li><a href="#">Контакты</a></li>
				<li><a href="#">Конфиденциальность</a></li>
			</ul>
			<div className="footer__scroll"><button>&gt;</button></div>
		</div>
		<p className="footer__privacy">@ Все права защищены.  ООО”Слонум” 2022</p>
	  </div>
    </footer>
  );
};

export default Footer;
