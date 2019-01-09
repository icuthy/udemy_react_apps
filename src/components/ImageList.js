import './ImageList.css';
import React from 'react';
import ImageCard from './ImageCard';

// const ImageList = (props) => {
//     return props.images.map((image) => {
//         return <img src={image.urls.regular} alt="#" />
//     });
// };

// Alternative way to write code
const ImageList = (props) => {
    const images = props.images.map((image) => {
        return <ImageCard key={image.id} image={image} />
    });
    return <div className="image-list">{images}</div>
};

export default ImageList;