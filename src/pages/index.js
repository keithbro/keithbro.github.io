import React from 'react'
import Link from 'gatsby-link'

import elasticsearch from '../images/elasticsearch.svg'
import emberjs from '../images/emberjs.svg'
import kinesis from '../images/kinesis.svg'
import mysql from '../images/mysql.svg'
import nodejs from '../images/nodejs.svg'
import perl5 from '../images/perl5.svg'
import postgresql from '../images/postgresql.svg'
import rails from '../images/rails.svg'
import ruby from '../images/ruby.svg'
import vagrant from '../images/vagrant.svg'

const IndexPage = () => (
  <div
    style={{
      flex: 1,
    }}
  >
    <h1>Keith Broughton</h1>
    <h4>Developer in Sydney, Australia</h4>

    <hr/>

    <p>Developer @ Fat Zebra / Cloud Payments (August 2017 - Present)</p>

    <img className="logo" src={ruby}/>
    <img className="logo" src={rails}/>
    <img className="logo" src={elasticsearch}/>
    <img className="logo" src={postgresql}/>

    <p>Senior Developer / Tech Lead @ YOOX NET-A-PORTER Group (2016/17)</p>

    <img className="logo" src={perl5}/>
    <img className="logo" src={postgresql}/>
    <img className="logo" src={kinesis}/>
    <img className="logo" src={nodejs}/>

    <p>Senior Developer @ Broadbean Technology (2014 - 2016)</p>
    <img className="logo" src={perl5} alt="Perl 5"/>
    <img className="logo" src={mysql}/>
    <img className="logo" src={emberjs}/>
    <img className="logo" src={vagrant}/>

  </div>
)

export default IndexPage
