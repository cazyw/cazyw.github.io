import React from "react"
import PropTypes from "prop-types"
import "./layout.css"

function Card({ image }) {
  console.log(image)
  return (
    <div className="card">
      <img
        className="home-card-image"
        src={require("../images/react-express-shakespeare.webp")}
      />
    </div>
  )
}

Card.defaultProps = {}

Card.propTypes = {
  image: PropTypes.string.isRequired,
}

export default Card
