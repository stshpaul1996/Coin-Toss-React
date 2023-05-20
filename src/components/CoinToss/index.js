// Write your code here
import {Component} from 'react'

import './index.css'

const headsImg = 'https://assets.ccbp.in/frontend/react-js/heads-img.png'
const tailsImg = 'https://assets.ccbp.in/frontend/react-js/tails-img.png'

class CoinToss extends Component {
  state = {
    image: headsImg,
    heads: 0,
    tails: 0,
  }

  onChangeToss = () => {
    const {heads, tails} = this.state
    const tossResult = Math.floor(Math.random() * 2)
    let tossImg = ''
    let latestHeads = heads
    let latestTails = tails

    if (tossResult === 0) {
      tossImg = headsImg
      latestHeads += 1
    } else {
      tossImg = tailsImg
      latestTails += 1
    }
    this.setState({image: tossImg, heads: latestHeads, tails: latestTails})
  }

  render() {
    const {image, heads, tails} = this.state
    const total = heads + tails

    return (
      <div className="bg-page">
        <div className="container">
          <h1 className="heading">Coin Toss Game</h1>
          <p className="para">Heads (or) Tails</p>
          <img src={image} alt="toss result" className="toss-image" />
          <button
            type="button"
            className="toss-btn"
            onClick={this.onChangeToss}
          >
            Toss Coin
          </button>
          <div className="status-container">
            <p className="bottom">Total: {total}</p>
            <p className="bottom">Heads: {heads}</p>
            <p className="bottom">Tails: {tails}</p>
          </div>
        </div>
      </div>
    )
  }
}

export default CoinToss
