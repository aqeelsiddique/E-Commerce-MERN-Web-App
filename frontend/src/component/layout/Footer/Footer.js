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






// import React from 'react'

// const Footer = () => {
//     return (
//         <>
//             <div className="Footer">
//                 <div className="container">
//                     <div className="row">
//                         <div className="col-md-6 col-lg-5 col-12 ft-1">
//                             <h3><span>WALEED</span>CODES</h3>
//                             <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Laborum ea quo ex ullam laboriosam magni totam, facere eos iure voluptate.</p>
//                             <div className="footer-icons">
//                                 <i class="fa-brands fa-facebook"></i>
//                                 <i class="fa-brands fa-twitter"></i>
//                                 <i class="fa-brands fa-instagram"></i>
//                                 <i class="fa-brands fa-linkedin-in"></i>
//                             </div>
//                         </div>
//                         <div className="col-md-6 col-lg-3 col-12 ft-2">
//                             <h5>Quick Links</h5>
//                             <ul>
//                                 <li className="nav-item">
//                                     <a className="" href="/">Services</a>
//                                 </li>
//                                 <li className="nav-item">
//                                     <a className="" href="/">Portfolio</a>
//                                 </li>
//                                 <li className="nav-item">
//                                     <a className="" href="/">Contact Us</a>
//                                 </li>
//                                 <li className="nav-item">
//                                     <a className="" href="/">Services</a>
//                                 </li>
//                                 <li className="nav-item">
//                                     <a className="" href="/">Portfolio</a>
//                                 </li>
//                             </ul>
//                         </div>
//                         <div className="col-md-6 col-lg-4 col-12 ft-3">
//                             <h5>Quick Links</h5>
//                             <p><i class="fa-solid fa-phone-volume"></i> +92 3121324083</p>
//                             <p><i class="fa-solid fa-envelope"></i> waleedishfaq1515@gmail.com</p>
//                             <p><i class="fa-solid fa-paper-plane"></i> Abbottabad, Pakistan.</p>
//                         </div>
//                     </div>
//                 </div>
//             </div>
//             <div className='Last-footer'>
//                 <p>Design By Waleed Ishfaq</p>
//             </div>
//         </>
//     )
// }

// export default Footer
