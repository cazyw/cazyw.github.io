/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React, { useEffect } from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import Navbar from "./navbar"
import Footer from "./footer"
import About from "./about"
import Technology from "./technology"
import Project from "./project"
import Contact from "./contact"
import "./layout.css"

const Layout = ({ children }) => {
  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined") {
        const navs = document.querySelector(".nav-links")
        if (navs.classList.contains("open") && window.innerWidth <= 650) {
          navs.classList.remove("open")
        }
      }
    }

    window.addEventListener("resize", handleResize)

    return () => {
      window.removeEventListener("resize", handleResize)
    }
  })

  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          author
          menuLinks {
            name
            link
          }
        }
      }
    }
  `)

  return (
    <>
      <main>{children}</main>
      <Navbar className="anchor" menuLinks={data.site.siteMetadata.menuLinks} />
      <Header className="anchor" siteTitle={data.site.siteMetadata.author} />
      <About className="anchor" />
      <Technology className="anchor" />
      <Project className="anchor" />
      <Contact className="anchor" />
      <Footer className="anchor" />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
