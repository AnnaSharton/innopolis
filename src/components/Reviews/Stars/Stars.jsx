import React from 'react';
import './Stars.css';
import goldStar from "./star-gold.png";
import grayStar from "./star-gray.png";

function Rating() {
    return ( 

        <div className="rating-img">
            <img className="rating-img__gold-star" src={goldStar} height="30" alt="звезда"></img>
            <img className="rating-img__gold-star" src={goldStar} height="30" alt="звезда"></img>
            <img className="rating-img__gold-star" src={goldStar} height="30" alt="звезда"></img>
            <img className="rating-img__gold-star" src={goldStar} height="30" alt="звезда"></img>
            <img className="rating-img__gold-star" src={grayStar} height="30" alt="звезда"></img>
        </div>

    );
}
    export default Rating;