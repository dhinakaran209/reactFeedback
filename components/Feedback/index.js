import {Component} from 'react'
import './index.css'

class Feedback extends Component {
  state = {isReviewGiven: true}

  reviewClick = () =>
    this.setState(prevState => ({
      isReviewGiven: !prevState.isReviewGiven,
    }))

  render() {
    const {resources} = this.props
    const {emojis, loveEmojiUrl} = resources
    const {isReviewGiven} = this.state

    if (isReviewGiven === false) {
      return (
        <div className="bg-container">
          <div className="card-container">
            <img src={loveEmojiUrl} alt="love emoji" />
            <h1 className="thank-you">Thank You</h1>
            <p className="para">
              We use your feedback to improve our customer support
            </p>
          </div>
        </div>
      )
    }

    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">
            How satisfied are you with our customer support performance ?
          </h1>
          <ul className="btns">
            {emojis.map(eachItem => (
              <li key={eachItem.id}>
                <button
                  type="button"
                  className="emoji-btn"
                  onClick={this.reviewClick}
                >
                  <img
                    src={eachItem.imageUrl}
                    alt="emoji"
                    className="emoji-size"
                  />
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default Feedback
