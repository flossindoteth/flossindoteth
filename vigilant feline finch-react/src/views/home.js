import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Vigilant Feline Finch</title>
        <meta property="og:title" content="Vigilant Feline Finch" />
      </Helmet>
      <a href="https://example.com" target="_blank" rel="noreferrer noopener">
        https://twitter.com/flossin_eth
      </a>
    </div>
  )
}

export default Home
