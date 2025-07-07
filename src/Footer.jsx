import React from 'react'
import 'bootstrap-icons/font/bootstrap-icons.css';
import { Link } from 'react-router-dom'

function Footer() {
  return (
    <>
   <footer className=' bg-dark text-white'>
        <div className='container p-3 '>
          <div className='row'>
            <div className='col-lg-4'>
              <h3 className='fw-bold'>Nepal Travels</h3> <h4>& Expedition Pvt.Ltd</h4>
              <p><strong>Our aim is to provide clients with every kind of viable programs Nepal can possibly offer. Our team of expert travel planners is always there to answer your specific question with absolutely authentic information and help you design your or your clients trips that perfectly suit the interest and budget.</strong></p>

            </div>
            <div className='col-lg-4'>
              <h3 className='fw-bold py-3'>Quick Link</h3>
              <ul className='list-unstyled d-flex flex-column gap-3'>
                <li><strong><Link className='text-decoration-none text-white' href="/company-profile">Company Profile</Link></strong></li>
                <li><strong><Link className='text-decoration-none text-white' href="/contact-us">Contact Us</Link></strong></li>
                <li><strong><Link className='text-decoration-none text-white' href="/terms-and-conditions">Terms and Conditions</Link></strong></li>
                <li><strong><Link className='text-decoration-none text-white' href="/our-services">Our Services</Link></strong></li>
                <li><strong><Link className='text-decoration-none text-white' href="/our-charity">Our Charity</Link></strong></li>
              </ul>


            </div>
            <div className='col-lg-4'>
              <h3 className='fw-bold py-3'>Contact Details</h3>
              <ul className='list-unstyled d-flex flex-column gap-3'>
                <li><strong className='text-decoration-none text-white '>Jawalakhel Lalitpur,Kathmandu, Nepal Post Box No:- 13965</strong></li>
                <li><strong><Link className='text-decoration-none text-white ' href="">+9775175204</Link></strong></li>
                <li><strong><Link className='text-decoration-none text-white ' href="">+9779851090618</Link></strong></li>
                <li><strong><Link className='text-decoration-none text-white ' href=""> info@nepaltravels.com</Link></strong></li>
                <li><strong><Link className='text-decoration-none text-white ' href=""> sales@nepaltravels.com</Link></strong></li>
              </ul>
            </div>
          </div>

          <div className='row'>
            <div className='col-lg-6'>
            <strong> Copyright 2025 - Nepal Travels & Expedition - by Sameer Humagain</strong>
            </div>
            <div  className='col-lg-6'>
                <ul className="list-unstyled d-flex gap-3 justify-content-end" >
            <li><a href='/' className='text-white'><i className="bi bi-instagram"></i></a></li>
            <li><a href='/' className='text-white'><i className="bi bi-facebook"></i></a></li>
            <li><a href='/' className='text-white'><i className="bi bi-twitter"></i></a></li>
            <li><a href='/' className='text-white'><i className="bi bi-youtube"></i></a></li>
            </ul>
             
            </div>
          </div>

        </div>
      </footer>
    </>
  )
}


export default Footer




