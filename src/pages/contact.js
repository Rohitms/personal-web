import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

class ContactPage extends React.Component {
  render() {
    const siteTitle = "Rohit M Sasi"

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO title="Contact" keywords={[`rohitmsasi`]} />

        <h1>form here</h1>
      </Layout>
    )
  }
}
export default ContactPage
