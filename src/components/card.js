import React from "react"
import PropTypes from "prop-types"
import "./layout.css"

class Card extends React.Component {
  constructor(props) {
    super(props)
    this.state = { flipped: false, clicked: false }
    this.flip = this.flip.bind(this)
  }

  flip() {
    this.setState({
      flipped: !this.state.flipped,
      clicked: true,
    })
  }

  render() {
    let frontCSS = !this.state.flipped ? " Visible" : ""
    let backCSS = this.state.flipped ? " Visible" : ""
    if (!this.state.clicked) {
      frontCSS = " Visible"
      backCSS = ""
    }
    return (
      <div className="Card" onClick={this.flip}>
        <div className={"Card-Front" + frontCSS}>
          <img
            className="home-card-image"
            src={require("../images/react-express-shakespeare.webp")}
          />
        </div>
        <div className={"Card-Back" + backCSS}>{this.props.children}</div>
      </div>
    )
  }
}

Card.defaultProps = {}

Card.propTypes = {
  image: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
}

export default Card
