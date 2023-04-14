import React from 'react';
import { useState } from 'react';  // делаю состояние для компонента 
import './ColorCheck.css';
import colors from "./colorData";

// выбор цвета айфона
function ColorCheck() {
    
    const [activedColor, setActivedColor] = useState(1); //задаю по умолчанию значение цвета со значением id=1
    const colorName = colors[activedColor].colorName; // создаю переменную которая будет содержать название цвета из массива colors = индекс выбранной кнопки.массив
    const handleClick = (event, target) => { // задаю команду, которую я хочу вызывать при клике на div с картинками
        setActivedColor(target); // - установить активный бокс
    } 
    
    return ( 
    
    <div className="color-check">
        <h3 className="heading3">{`Цвет товара: ${colorName}`}</h3> 
        <div className="color-images">

            {/* обращаюсь к каждому объекту в массиве colorData.js с помощью функции map, задаю ключ каждому элементу - уникальное название файла картинки, в качестве источника картинки и текста alt подставляю ключи объектов из массива colorData.js : */}
        {colors.map((color, index) => {
            index = color.id; // хочу определять выбранный цвет не по индексу, а по id в массиве
            // определяю переменную, которая будет хранить индекс активного цвета, который выбрал юзер
            const actived = index === activedColor; // состояние по умолчанию - выбран цвет с id=2, т.е. зеленый
            // определяю переменную, которая будет дополнительным классом к классу контейнера с картинкой и если бокс выбран, то класс стнет active и пояится яркий border
            const checkedColor = actived ? 'checked-border' : '';

            return ( 
            
                <div className={`color-images-border ${checkedColor}`} key={color.id.toString()} onClick={(event) => handleClick(event, index)}>
                    <img className="color-images__img" src={color.colorImage} height="100" alt={color.alt}></img>
                </div>
            )
           
     })}
        </div>
    </div>

    );
}
    export default ColorCheck;

