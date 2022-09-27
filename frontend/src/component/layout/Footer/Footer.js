import React from 'react'
import playstore from '../../images/downloadapp.png'
import google from "../../images/googleplay.png"
import ReactDOM from 'react-dom'
import { SocialIcon } from 'react-social-icons'
import { FcApproval } from "react-icons/fc"

import { FaFacebook } from "react-icons/fa"

// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faRandom } from '@fortawesome/free-solid-svg-icons'

import '../Footer/Footer.css'
const Footer = () => {
  return (
    <>
    <footer id='footer'>
        <div className='leftfooter'>
        <h1>Company</h1>
        <a href="#">About us</a>
        <a href="#">Store Loctor</a>
        <a href="#">Contact</a>

        </div>

        <div className='midfooter'>
            <h1>
                Ecommerce Store
            </h1>
            <h4>High Quality is first priority</h4>
        </div>
        <div className='rightfooter'>
       
        <h1>Goya Theme</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia,
            molestiae quas vel sint commodi repudiandae</p>

<form>
 <input type="text" name="name" placeholder='Your Email Adress' />

  <input type="submit" value="Singup" />
  </form>
        </div>
        
    </footer>
    <div className='bottomline'>
         
    <SocialIcon url="https://twitter.com/jaketrent" />
    <SocialIcon url="https://linkedin.com/jaketrent" />

    <SocialIcon url="https://facebook.com/jaketrent" />
    </div>
    </>   
  )
}

export default Footer
