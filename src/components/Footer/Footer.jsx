import React from 'react';
import './Footer.css';

function Footer() {
    return ( 
        <footer className="footer">
            <div className="footer-inner">
                <div className="footer-info">
                    <p className="footer-info__p footer-info__p_bold">© ООО «<span className="footer-info__span">Мой</span>Маркет», 2018-2022</p>
                    <p className="footer-info__p">Для уточнения информации звоните по номеру <a className="a" href="tel:7900000000">+7 900 000 0000</a>,<br></br>
                    а предложения по сотрудничеству отправляйте на почту <a className="a" href="mailto:partner@mymarket.com">partner@mymarket.com</a></p>
                </div>
                <div className="up-link">
                    <p className="footer__p"><a className="a" href="#top">Наверх</a></p>
                </div>
            </div>
        </footer>
    );
}
    export default Footer;