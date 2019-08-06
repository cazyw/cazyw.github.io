import React from "react"
import Card from "./card"

const Project = () => (
  <section id="project">
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h2>Projects</h2>
      <hr />
      <ul className="projects-section">
        <li>
          <Card image="../images/GitHub_Logo.png" />
        </li>
      </ul>
    </div>
  </section>
)

export default Project
