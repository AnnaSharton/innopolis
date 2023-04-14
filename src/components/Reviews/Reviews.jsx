import React from 'react';
import './Reviews.css';
import reviews from './reviewsData.js';
import Stars from './Stars/Stars';

// отображение отзывов, в качестве ключа задала уникальное название фото пользователя
// сделала пока 1 подкомпонент - картинки звездочек


function Reviews() {
    return ( 
        <>
        {reviews.map((review) => {

                return ( 
        
                    <div className="review" key={review.userImage.toString()}>
                        <div className="review-img">
                            <img className="review-img__img" src={review.userImage} height="200" alt="Фото автора отзыва"></img>
                        </div>  

                        <div className="review-info">
                            <h4 className="review-info__h4">{review.userName}</h4> 
                            
                            <Stars />
                            
                            <p className="review-info__p">
                                <strong>Опыт использования:</strong>{review.usageExperience}
                            </p>
                            <p className="review-info__p">
                                <strong>Достоинства:</strong><br></br>{review.advantages}
                            </p>
                            <p className="review-info__p">
                                <strong>Недостатки:</strong><br></br>{review.disadvantages}
                            </p>
                        </div>
                    </div>
                    
                );
        })}
        </>
    );
}
    export default Reviews;