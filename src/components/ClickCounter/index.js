// Write your code here
import './index.css'

import {Component} from 'react'

class ClickCounter extends Component {
  state = {count: 0}

  incrementButton = () => {
    this.setState(prevState => ({
      count: prevState.count + 1,
    }))
  }

  render() {
    const {count} = this.state
    return (
      <div className="container">
        <div className="content">
          <h1 className="heading">
            The Button has been clicked
            <span className="count"> {count}</span> times
          </h1>
          <p className="para">Click the button to increase the count!</p>
          <button
            type="button"
            onClick={this.incrementButton}
            className="button"
          >
            Click Me!
          </button>
        </div>
      </div>
    )
  }
}

export default ClickCounter
