import React from "react"
import Card from "./card"

const Project = () => (
  <section id="project">
    <div
      style={{
        margin: `0 auto`,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h2>Projects</h2>
      <hr />
      <ul className="projects-section">
        <li>
          <Card
            imageSrc={require("../images/react-express-shakespeare.webp")}
            imageAlt={"Shakespeare Sunday Project"}
          >
            <div className="project-box-text">
              <div className="project-name">Shakespeare Quotes</div>
              <div className="project-description">
                To be or not to be, that is the question
              </div>
            </div>
          </Card>
        </li>
        <li>
          <Card
            imageSrc={require("../images/js-spotify.webp")}
            imageAlt={"Spotify Playlist Project"}
          >
            <div className="project-box-text">
              <div className="project-name">Spotify Playlist Backup</div>
              <div className="project-description">
                Download track details from your playlists
              </div>
            </div>
          </Card>
        </li>
      </ul>
    </div>
  </section>
)

export default Project
