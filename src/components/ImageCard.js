import React from 'react';

class ImageCard extends React.Component {
    constructor(props){
        super(props);
        this.imageRef = React.createRef();
        this.state = {rowSpans: null}
    }

    componentDidMount() {
        // adding vanilla js event listener on load to make sure span calc is done after images are fetched
        this.imageRef.current.addEventListener('load', this.setRowSpan);
    }
    
    setRowSpan = () => {
        this.setState({rowSpans: Math.ceil(this.imageRef.current.height / 10)});
    }

    render() {
        const {description, urls} = this.props.image;        
        return(
            <img style={{gridRowEnd: `span ${this.state.rowSpans}`}} ref={this.imageRef} alt={description} src={urls.regular} />
        );
    }
}

export default ImageCard;