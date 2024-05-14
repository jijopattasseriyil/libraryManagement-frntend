import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'


import footerStyles from './Footer.module.css'
function Footer() {
  return (
    <>

    <div className={` ${footerStyles.mainDiv} bg-dark bg-gradient text-white px-4 py-2`}>
         <div className={`d-flex flex-column ${footerStyles.firstSection}`}>
            <h3>Library</h3>
            <p>"Books are the quietest and most constant of friends; they are the most accessible and wisest of counselors, and the most patient of teachers." - Charles William Eliot</p>
         </div>
         <div className={`d-flex flex-column ${footerStyles.secondSection}`} >
         <h4 className='mb-3 mt-4 text-center'>Hours of Operation</h4>
            <div className='text-center'>
            <p>Current Hours</p>
            <p>Weekdays closed</p>
            </div>
         </div>
         <div className={`d-flex flex-column ${footerStyles.thirdSection}`} >
         <h4 className='mb-3 mt-4'>Contact Us</h4>
            <div className='d-flex'>
              <input type="text" placeholder='Enter Your Email' className='form-control'/>
              <button className='btn btn-warning bg-gradient ms-2'>Subscribe</button>
            </div>
            <div className='d-flex justify-content-evenly mt-4 w-100'>
            <FontAwesomeIcon icon={faInstagram} size='xl'/>
            <FontAwesomeIcon icon={faTwitter} size='xl'/>
            <FontAwesomeIcon icon={faLinkedin} size='xl'/>
            <FontAwesomeIcon icon={faFacebook} size='xl'/>
            </div>
         </div>
    </div>
        

       
    </>
  )
}

export default Footer