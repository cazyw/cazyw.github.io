import React from "react"
import githubMark from "../images/GitHub-Mark-32px.png"
import githubLogo from "../images/GitHub_Logo.png"

const About = () => (
  <section id="about">
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `1.45rem 1.0875rem`,
      }}
    >
      <h2 style={{ color: `rgb(255, 255, 255)` }}>About Me</h2>
      <hr />
      <p className="text-faded">
        Software developer working in DevOps. I love writing code, learning and
        figuring out how things work. Coding has been a part of most of my life
        in some way, and recently I changed careers and started my first job as
        a software developer! It took a while, but I'm now doing what I enjoy
        every day :)
      </p>
      <p className="text-faded">
        Below are some of the projects I've made over the years and some I'm
        working on now.
      </p>

      <div
        style={{
          backgroundColor: `rgb(255,255,255)`,
          width: `115px`,
          height: `44px`,
          padding: `5px 10px`,
          margin: `30px auto`,
          borderRadius: `300px`,
          border: `1px solid rgb(204, 204, 204)`,
        }}
      >
        <a
          style={{ color: `rgb(255, 255, 255)` }}
          href="https://github.com/cazyw"
          title="Github cazyw"
          target="_blank"
          rel="external noopener noreferrer"
          margin="auto"
        >
          <img
            style={{
              display: `inline-block`,
              verticalAlign: `middle`,
            }}
            src={githubMark}
            alt="GitHub Logo"
          />
          <img
            style={{
              display: `inline-block`,
              width: `60px`,
              verticalAlign: `middle`,
              paddingLeft: `5px`,
            }}
            src={githubLogo}
            alt="GitHub Logo"
          />
        </a>
      </div>
    </div>
  </section>
)

export default About
