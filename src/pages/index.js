import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Button from "../components/button"

class IndexPage extends React.Component {
  render() {
    const siteTitle = "Rohit M Sasi"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title="Home"
          keywords={[
            `rohitmsasi`,
            `devloper`,
            `rohit`,
            `blog`,
            `gatsby`,
            `javascript`,
            `react`,
          ]}
        />
        {/*<img style={{ margin: 0 }} src="./GatsbyScene.svg" alt="Gatsby Scene" />*/}
        <h1>
          {" "}
          Hey people{" "}
          <span role="img" aria-label="wave emoji">
            👋
          </span>
        </h1>
        <p>
          Welcome to my new website. You are on the home page and there's lot of
          work to be donw here.
        </p>

        <Link to="/blog/">
          <Button marginTop="35px">Go to Blog</Button>
        </Link>
      </Layout>
    )
  }
}

export default IndexPage
