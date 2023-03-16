import React from 'react'
import Featured from '../../components/featured';
import TrustedBy from '../../components/trustedBy';
import "./Home.scss";

const Home = () => {
  return (
    <div>
      <Featured />
      <TrustedBy />
    </div>
  )
}

export default Home;