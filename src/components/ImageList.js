import './ImageList.css';
import React from 'react';

// const ImageList = (props) => {
//     return props.images.map((image) => {
//         return <img src={image.urls.regular} alt="#" />
//     });
// };

// Alternative way to write code
const ImageList = (props) => {
    const images = props.images.map(({ urls, description, id }, key) => {
        return <img src={urls.regular} alt={description} key={id} />
    });
    return <div className="image-list">{images}</div>
};

export default ImageList;