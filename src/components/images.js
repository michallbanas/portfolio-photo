import React from 'react';
import data from '../data/images-data.js';
import '../index.css';

const ImageCards = () => {
    const card = data.map((item) => {
        return <React.StrictMode key={item.key}>
                <li>
                    <img
                        alt={item.altText}
                        className="card-image"
                        width="300"
                        data-test="testImage"
                        src={item.imageSrc}>
                    </img>
                </li>
                </React.StrictMode>
    })

    return (
        <ul id='photoGrid' className='grid'>
            {card}
        </ul>
    )
}

export default ImageCards;