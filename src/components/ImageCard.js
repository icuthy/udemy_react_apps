import React from 'react';

class ImageCard extends React.Component {
    constructor(props) {
        super(props);
        this.imageRef = React.createRef();
    }

    // don't need to put ref in state since data is not going to change
    componentDidMount() {
        // when console.log(this.imageRef.current.clientHeight) produces 0 in BhxBrowser, cos console.log runs before images are downloaded from unsplash url
        console.log(this.imageRef);
    }
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