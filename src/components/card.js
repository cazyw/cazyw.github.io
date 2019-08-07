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
      <div className="card" onClick={this.flip}>
        <div className={"card-front" + frontCSS}>
          <img
            className="home-card-image"
            src={this.props.imageSrc}
            alt={this.props.imageAlt}
          />
        </div>
        <div className={"card-back" + backCSS}>
          <div className="project-box-text">
            <div className="project-name">{this.props.projectName}</div>
            <div className="project-description">
              {this.props.projectDescription}
            </div>
            <div className="project-icons">
              <div className="project-icon">
                <a
                  href={this.props.projectGithub}
                  target="_blank"
                  rel="noopener"
                  alt={this.props.projectGithub}
                >
                  <img
                    className="project-link-icon"
                    src={require("../images/github-logo-128.png")}
                    alt="Github Icon"
                  />
                </a>
              </div>
              <div className="project-icon">
                <a
                  href={this.props.projectDemo}
                  target="_blank"
                  rel="noopener"
                  alt={this.props.projectDemo}
                >
                  <img
                    className="project-link-icon"
                    src={require("../images/demo-128.png")}
                    alt="Demo Icon"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

Card.defaultProps = {}

Card.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  projectName: PropTypes.string.isRequired,
  projectDescription: PropTypes.string.isRequired,
}

export default Card
