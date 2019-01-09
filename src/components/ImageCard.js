import React from 'react';

class ImageCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = { spans: 0 };
        this.imageRef = React.createRef();
    }

    // Refactored with call back on image load so we get access to image height before images are downloaded from Unsplash
    componentDidMount() {
        this.imageRef.current.addEventListener('load', this.setSpans);
    }

    setSpans = () => {
        const height = this.imageRef.current.clientHeight;
        const spans = Math.ceil(height / 10);

        this.setState({ spans });
    };

    render() {
        // props destructuring
        const { urls, description } = this.props.image;
        return (
            <div style={{ gridRowEnd: `span ${this.state.spans}` }} >
                <img
                    ref={this.imageRef}
                    src={urls.regular}
                    alt={description}
                />
            </div>
        );
    }
}

export default ImageCard;