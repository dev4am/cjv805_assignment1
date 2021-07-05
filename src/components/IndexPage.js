import React from 'react'

import Hero from './Hero';
import Feature from './Feature';

function IndexPage() {
    return (
      <>
        <Hero/>
        <div class="container">
          <Feature/>
          <Feature/>
          Service
        </div>
      </>
    )
}

export default IndexPage
