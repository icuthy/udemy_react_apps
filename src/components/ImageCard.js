import React from 'react';

class ImageCard extends React.Component {
    render() {
        // props destructuring
        const { urls, description } = this.props.image;
        return (
            <div>
                <img src={urls.regular} alt={description} />
            </div>
        );
    }
}

export default ImageCard;