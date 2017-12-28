import React from 'react'
import Link from 'gatsby-link'
import kinesis from '../images/kinesis.svg'
import postgresql from '../images/postgresql.svg'

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
    <img className="logo" src="https://avatars2.githubusercontent.com/u/210414?s=200&v=4"/>
    <img className="logo" src="https://pbs.twimg.com/profile_images/691206086955790336/CDMbA57p_400x400.png"/>
    <img className="logo" src="https://pbs.twimg.com/profile_images/573291480862744576/LP8JoaZ4_400x400.png"/>
    <img className="logo" src={postgresql}/>

    <hr/>

    <h2>Previous Positions</h2>

    <p>Senior Developer / Tech Lead | YOOX NET-A-PORTER Group | London, United Kingdom</p>
    <img className="logo" src="https://uploads.toptal.io/blog/category/logo/48/perl.png"/>
    <img className="logo" src={postgresql}/>
    <img className="logo" src={kinesis}/>
  </div>
)

export default IndexPage
