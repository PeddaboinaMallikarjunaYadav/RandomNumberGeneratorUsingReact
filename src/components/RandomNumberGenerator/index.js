import {Component} from 'react'
import './index.css'

class RandomNumberGenerator extends Component {
  state = {randomNumber: 0}

  numberChange = () => {
    const randomNo = Math.ceil(Math.random() * 101)
    this.setState({randomNumber: randomNo})
  }

  render() {
    const {randomNumber} = this.state
    return (
      <div className="Container">
        <div className="cardContainer">
          <h1 className="heading">Random Number</h1>
          <p className="description">
            Generate a random number in the range of 0 to 100
          </p>
          <button className="btn" type="button" onClick={this.numberChange}>
            Generate
          </button>
          <h1 className="heading">{randomNumber}</h1>
        </div>
      </div>
    )
  }
}

export default RandomNumberGenerator
