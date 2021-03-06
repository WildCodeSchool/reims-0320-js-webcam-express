import React from 'react';
import RandomNumber from '../RandomQuote/RandomNumber';
import './gameWin.css';

class GameWin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    const apiDataBis = this.props.apiData
    return (
        <div className="winInterface__container">
          <p>Nice job ! You run faster than anyone and the most important : you run in the <strong>RIGHT DIRECTION !</strong></p>
          <p>With all these efforts, you succeed to go to the <strong>{this.props.state.categoryTarget}</strong>. We let you enjoy the view :</p>
          <iframe src={apiDataBis.targetData?.result.webcams[RandomNumber(0, 50)]?.player.day.embed} enable="autoplay" className="videoEmbed" title="windyWebcam" />
          <p>You add <strong>200€</strong> to your jackpot !</p>

          <p>Lets go to the next mission !</p>
          <button
            className="buttonPlay"
            onClick={this.props.continueGame}
            type="button"
          >
            Continue
          </button>
        </div>
    );
  }
}


export default GameWin;
