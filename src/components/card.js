import React from "react"
import PropTypes from "prop-types"
import "./layout.css"

const Card = ({
  imageSrc,
  imageAlt,
  projectName,
  projectDescription,
  projectGithub,
  projectDemo,
}) => (
  <div className="card">
    <div className={"card-front"}>
      <img
        className="home-card-image"
        src={imageSrc}
        loading="lazy"
        alt={imageAlt}
      />
    </div>
    <div className={"card-back"}>
      <div className="project-box-text">
        <div className="project-name">{projectName}</div>
        <div className="project-description">{projectDescription}</div>
        <div className="project-icons">
          <div className="project-icon">
            <a href={projectGithub} target="_blank" rel="noopener external">
              <img
                className="project-link-icon"
                src={require("../images/github-logo-128.png")}
                alt="Github Icon"
              />
            </a>
          </div>
          <div className="project-icon">
            <a href={projectDemo} target="_blank" rel="noopener external">
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

Card.defaultProps = {}

Card.propTypes = {
  imageSrc: PropTypes.string.isRequired,
  imageAlt: PropTypes.string.isRequired,
  projectName: PropTypes.string.isRequired,
  projectDescription: PropTypes.string.isRequired,
}

export default Card
