import React from 'react';
import './PageProduct.css';
// import './advertise.html';
import ColorCheck from'../ColorCheck/ColorCheck';
import MemoryConfig from '../MemoryConfig/MemoryConfig';
import Reviews from '../Reviews/Reviews';
import Breadcrumbs from '../Breadcrumbs/Breadcrumbs';
import Form from '../Form/Form';


function PageProduct() {
    return (

    <div className="container">
        <Breadcrumbs />
        <div className="block-photo">
            <h2 className="block-photo__h2">Смартфон Apple iPhone 13, синий</h2>
            <div className="iphone-blue-all-photo">
                <div className="iphone-blue"><img className="iphone-blue__img" src="/image-1.webp" alt="Айфон-3 внешний вид"></img></div>
                <div className="iphone-blue"><img className="iphone-blue__img" src="/image-2.webp" alt="Айфон-3 вид спереди"></img></div>
                <div className="iphone-blue"><img className="iphone-blue__img" src="/image-3.webp" alt="Айфон-3 вид сбоку"></img></div> 
                <div className="iphone-blue"><img className="iphone-blue__img" src="/image-4.webp" alt="Айфон-3 камера"></img></div> 
                <div className="iphone-blue"><img className="iphone-blue__img" src="/image-5.webp" alt="Айфон-3 вид сзади"></img></div> 
            </div> 
        </div>
        
        <main className="main-info">

            <div className="main-side"> 
            {/*      весь левый блок, который включает описание товара + отзывы      */}
                {/*      блок описания товара     */}
                <div className="discription">
                    {/*        перенесла выбор цвета товара в отдельный компонент ColorCheck      */}
                    <ColorCheck />

                    {/*      перенесла выбор объема памяти  в отдельный компонент MemoryConfig     */}
                    <MemoryConfig />

                    {/* <!-- список характеристик товара--> */}
                    <div className="caracteristic-ul">
                        <h3 className="heading3">Харатеристики товара</h3>
                        <ul className="caracteristic-ul__ul">
                            <li>Экран: <strong>6.1</strong></li>
                            <li>Операционная система: <strong>iOS 15</strong></li>
                            <li>Беспроводные интерфейсы: NFC, Bluetooth, Wi-Fi</li>
                            <li>Процессор: <strong><a className="a" href="https://ru.wikipedia.org/wiki/Apple_A15" target="_blank">Apple A15 Bionic</a></strong></li>
                            <li>Вес: <strong>173 г</strong></li>
                        </ul> 
                    </div>
                    {/* <!-- описание характеристик товара--> */}
                    <div className="caracteristic-text">
                        <h3 className="heading3">Описание</h3> 
                        <p className="caracteristic-text__p">Наша самая совершенная система двух камер.</p> 
                        <p>Особый взгляд на прочность дисплея.</p>
                        <p>Чип,с которым всё супербыстро.</p>
                        <p>Аккумулятор держится заметно дольше.</p>
                        <p><i>iPhone 13 - сильный мира всего.</i></p> 
                        <p className="caracteristic-text__p">Мы разработали совершенно новую схему расположения и развернулиобъективы на 45 градусов. Благодаря этому внутри корпуса поместилась нашалучшая система двух камер с увеличенной матрицей широкоугольной камеры.Кроме того, мы освободили место для системы оптической стабилизацииизображения сдвигом матрицы. И повысили скорость работы матрицы насверхширокоугольной камере.</p> 
                        <p className="caracteristic-text__p">Новая сверхширокоугольная камера видит больше деталей в тёмных областяхснимков. Новая широкоугольная камера улавливает на 47% больше света для более качественных фотографий и видео. Новая оптическая стабилизация сосдвигом матрицы обеспечит чёткие кадры даже в неустойчивом положении.</p>
                        <p className="caracteristic-text__p">Режим «Киноэффект» автоматически добавляет великолепные эффекты перемещенияфокуса и изменения резкости. Просто начните запись видео. Режим «Киноэффект»будет удерживать фокус на объекте съёмки, создавая красивый эффект размытиявокруг него. Режим «Киноэффект» распознаёт, когда нужно перевести фокус на другогочеловека или объект, который появился в кадре. Теперь ваши видео будут смотретьсякак настоящее кино.</p>
                    </div>
                </div>
                   
                <div className="table">
                        <h3 className="heading3">Сравнение моделей</h3>
                        <table className="table__caracteristic">
                            <tbody>
                            <tr className="table__row">
                                <th className="table__head">Модель</th>
                                <th className="table__head">Вес</th>
                                <th className="table__head">Высота</th>
                                <th className="table__head">Ширина</th>
                                <th className="table__head">Толщина</th>
                                <th className="table__head">Чип</th>
                                <th className="table__head">Объем памяти</th>
                                <th className="table__head">Аккумулятор</th>
                            </tr>
                            <tr className="table__row table__row_hovered">
                                <td className="table__data">iPhone 11</td>
                                <td className="table__data">194г</td>
                                <td className="table__data">150мм</td>
                                <td className="table__data">75мм</td>
                                <td className="table__data">8,3мм</td>
                                <td className="table__data">A13 Bio chip</td>
                                <td className="table__data">до 128гб</td>
                                <td className="table__data">до 17ч</td>    
                            </tr>
                            <tr className="table__row table__row_hovered">
                                <td className="table__data">iPhone 12</td>
                                <td className="table__data">164г</td>
                                <td className="table__data">146мм</td>
                                <td className="table__data">71мм</td>
                                <td className="table__data">7,4мм</td>
                                <td className="table__data">A14 Bio chip</td>
                                <td className="table__data">до 256гб</td>
                                <td className="table__data">до 19ч</td>
                            </tr>
                            <tr className="table__row table__row_hovered">
                                <td className="table__data">iPhone 13</td>
                                <td className="table__data">174г</td>
                                <td className="table__data">146мм</td>
                                <td className="table__data">71мм</td>
                                <td className="table__data">7,6мм</td>
                                <td className="table__data">A15 Bio chip</td>
                                <td className="table__data">до 512гб</td> 
                                <td className="table__data">до 19ч</td>
                             </tr>
                             </tbody>
                        </table>
                </div> 

                {/* <!-- ОТЗЫВЫ--> */}
                <div className="all-reviews">
                    
                        <div  className="head-reviews">
                            <div className="head-reviews-h3">
                                <h3 className="head-reviews-h3__h3 head-reviews-h3__h3_no-margin">Отзывы</h3>
                            </div>
                            <div className="head-reviews-span">
                                <span className="head-reviews-span__span">425</span>
                            </div>
                        </div>
                  
                <Reviews />           
                </div> 
                <Form />
            </div> 

            <aside className="sidebar">
                    
                <div className="price">
                    <div className="old-price"> 
                        <div className="old-price-info">
                            <span className="old-price-info__span"><del>75 990₽</del></span>
                            <button className="old-price-info__btn">-8%</button>
                        </div>
                        <div className="old-price-heart"></div>
                        <div className="old-price-heart-added"><img className = "heart-added" src="../../public/heart-add.svg"></img></div>
                    </div> 
                    <div className="new-price"> 
                        <span>67 990₽</span>
                    </div> 
                    <div className="delivery">
                        <p>Самовывоз в четверг, 1 сентября - <span className="delivery__span">бесплатно</span></p>
                        <p>Курьером в четверг, 1 сентября - <span className="delivery__span">бесплатно</span></p>
                    </div>
                    <div className="basket-add">
                        <button className="basket-add__btn btn-orange">Добавить в корзину</button>
                    </div>
                </div>

                <div className="advertise">
                        <span className="advertise__span">Реклама</span>
                        <div className="advertise-frame">
                            <iframe  title="frame1" className="advertise-frame__iframe" src="./advertise.html" width="420" height="300"></iframe>
                            <iframe  title="frame2" className="advertise-frame__iframe" src="./advertise.html" width="420" height="300"></iframe>
                        </div>
                </div>

            </aside>     
        </main>

    </div>
    );
}
export default PageProduct;