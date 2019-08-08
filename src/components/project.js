import React from "react"
import Card from "./card"
import { graphql, StaticQuery } from "gatsby"

const getProjectDescriptions = data => {
  const projects = []
  data.allProjectsJson.edges.forEach(item => {
    projects.push(
      <li key={item.node.id}>
        <Card
          imageSrc={require(`../images/${item.node.image}`)}
          imageAlt={item.node.title}
          projectName={item.node.title}
          projectDescription={item.node.description}
          projectGithub={item.node.github}
          projectDemo={item.node.demo}
        />
      </li>
    )
  })
  return projects
}

const Project = () => (
  <StaticQuery
    query={graphql`
      query ProjectsQuery {
        allProjectsJson {
          edges {
            node {
              id
              anchor
              image
              title
              description
              github
              demo
            }
          }
        }
      }
    `}
    render={data => (
      <section id="project">
        <div
          style={{
            margin: `0 auto`,
            padding: `1.45rem 1.0875rem`,
          }}
        >
          <h2>Projects</h2>
          <hr />
          <ul className="projects-section">{getProjectDescriptions(data)}</ul>
        </div>
      </section>
    )}
  />
)

export default Project
