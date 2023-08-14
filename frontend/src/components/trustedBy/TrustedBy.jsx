import React from 'react'
import './TrustedBy.css';
import trustedBy from '../../assets/images/trustlogo.png'

const TrustedBy = () => {
  return (
    <div className='trustedBy'>
        <div className="container">
        <span>Trusted By:</span>
        <img src={trustedBy} alt="" />
        <img src={trustedBy} alt="" />
        <img src={trustedBy} alt="" />
        
        </div>
     
    </div>
  )
}

export default TrustedBy
