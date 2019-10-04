import React from 'react';
import HeartIcon from '../../assets/imgs/heart_icon.png';

const FeaturedCard = (props) => {
    return (
        <div className="slide-card">
            <img src={props.cover} alt="Book" />
            <div className="slide-card-hover">
                <img onClick={() => props.handleBookSave(props.id)} src={HeartIcon} alt="Save Book" />
            </div>
        </div>
    )
}

export default FeaturedCard;