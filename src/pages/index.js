import React from 'react'
import Link from 'gatsby-link'

import elasticsearch from '../images/elasticsearch.svg'
import kinesis from '../images/kinesis.svg'
import perl5 from '../images/perl5.svg'
import postgresql from '../images/postgresql.svg'
import rails from '../images/rails.svg'
import ruby from '../images/ruby.svg'

const IndexPage = () => (
  <div
    style={{
      flex: 1,
    }}
  >
    <h1>Keith Broughton</h1>
    <p>Developer | Sydney, Australia</p>

    <hr/>

    <h2>Current Position</h2>

    <p>Developer | Fat Zebra / Cloud Payments | Sydney, Australia</p>
    <img className="logo" src={ruby}/>
    <img className="logo" src={rails}/>
    <img className="logo" src={elasticsearch}/>
    <img className="logo" src={postgresql}/>

    <hr/>

    <h2>Previous Positions</h2>

    <p>Senior Developer / Tech Lead | YOOX NET-A-PORTER Group | London, United Kingdom</p>
    <img className="logo" src={perl5}/>
    <img className="logo" src={postgresql}/>
    <img className="logo" src={kinesis}/>
  </div>
)

export default IndexPage
