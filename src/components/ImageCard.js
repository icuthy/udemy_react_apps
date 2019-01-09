import React from 'react';

class ImageCard extends React.Component {
    constructor(props) {
        super(props);
        this.imageRef = React.createRef();
    }

    // Refactored with call back on image load so we get access to image height before images are ??downloaded from Unsplash
    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.setSpans);
    }

    setSpans = () => {
        console.log(this.imageRef.current.clientHeight)
    };

    render() {
        // props destructuring
        const { urls, description } = this.props.image;
        return (
            <div>
                <img ref={this.imageRef} src={urls.regular} alt={description} />
            </div>
        );
    }
}

export default ImageCard;