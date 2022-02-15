import React, { Component } from 'react'
import './Card.css'


function Card({ imageUrl, CardTitle, Content }) {

    return (
        <div className='card-container'>
            <div className='image-container'>
                <img src={imageUrl} />
            </div>
            <div className='card-title'>
                <h3>{CardTitle}</h3>
            </div>
            <div className='card-content'>
                <p>{Content}</p>
            </div>
            <button>Go Anywhere</button>
        </div>
    )

}
export default Card;