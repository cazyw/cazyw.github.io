import React from "react"
import Card from "./card"

const Project = () => (
  <section id="project">
    <div
      style={{
        margin: `0 auto`,
        // maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h2>Projects</h2>
      <hr />
      <ul className="projects-section">
        <li>
          <Card image="../images/react-express-shakespeare.webp">
            <div className="project-box-text">
              <div className="project-name">Shakespeare Quotes</div>
              <div className="project-description">
                To be or not to be, that is the question
              </div>
            </div>
          </Card>
        </li>
      </ul>
    </div>
  </section>
)

export default Project
