import React from 'react';
import './Header.css';
import logo from "./favicon.svg";
import heart from "./heart.svg"; 
import basket from "./top-basket.png"; 

function Header() {
    return ( 
        <header className="top">
        <div className="top-inner">
            <div className="top-inner-left">
                <img className="top__img" src={logo} alt="Логотип компании"></img>
                <h1 className="top__h1"><span className="top__span">Мой</span>Маркет</h1>   
            </div>
            <div className="top-inner-right">
                <div className="heart">
                    <img className="heart__img-basket" src={heart} alt="Корзина"></img> 
                    <img className="heart__img-round" src="https://static.tildacdn.com/tild6437-6661-4062-b634-316633336338/circle_PNG28.png" alt="Корзина"></img>
                    <span className="heart__span"></span>
                </div>
                <div className="basket">
                    <img className="basket__img-basket" src={basket} alt="Корзина"></img>
                    <img className="basket__img-round" src="https://static.tildacdn.com/tild6437-6661-4062-b634-316633336338/circle_PNG28.png" alt="Корзина"></img>
                    <span className="basket__span"></span>
                </div>
            </div>
        </div>  
    </header>
    );
}
    export default Header;