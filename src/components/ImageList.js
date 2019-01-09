import React from 'react';

// const ImageList = (props) => {
//     return props.images.map((image) => {
//         return <img src={image.urls.regular} alt="#" />
//     });
// };

// Alternative way to write code
const ImageList = (props) => {
    const images = props.images.map((image) => {
        return <img src={image.urls.regular} alt={image.description} />
    });
    return <div>{images}</div>
};

export default ImageList;