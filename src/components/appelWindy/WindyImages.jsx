import React from 'react';
import './Windy.css';

class WindyImages extends React.Component {
  constructor(props) {
    super(props);
    this.state = { images: '' };
  }


  render() {
    const apiDatabis = this.props.apiData
    return (
      <div className="Images">
        <p>test image</p>
      </div>
    );
  }
}

export default WindyImages;
//<img src={apiDatabis.webcams[0]?.image.current.preview} alt="windyImage" />
//<img src={apiDatabis.webcams[4]?.image.current.preview} alt="windyImage" />