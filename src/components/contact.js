import React from "react"
import linkedInLogo from "../images/linkedin-128.png"
import githubMark from "../images/github-logo-128.png"
import "./layout.css"

const Contact = () => (
  <section id="contact">
    <div
      style={{
        margin: `0 auto`,
        maxWidth: 960,
        padding: `0.2rem 1.0875rem`,
        textAlign: `center`,
      }}
    >
      <h2>Let's Get In Touch!</h2>
      <hr />
      <p>I'm passionate about learning and coding!</p>
      <div
        style={{
          padding: `5px 10px`,
          margin: `0 auto`,
        }}
      >
        <a
          href="https://www.linkedin.com/in/carol-w-2a3b1646"
          title="Linkedin cazyw"
          target="_blank"
          rel="noopener external"
          margin="auto"
        >
          <img
            className="contact-logos"
            src={linkedInLogo}
            alt="Linkedin Logo"
            loading="lazy"
          />
        </a>
        <a
          href="https://github.com/cazyw"
          title="Github cazyw"
          target="_blank"
          rel="external noopener external"
          margin="auto"
        >
          <img
            className="contact-logos"
            src={githubMark}
            alt="GitHub Logo"
            loading="lazy"
          />
        </a>
      </div>
    </div>
  </section>
)

export default Contact
