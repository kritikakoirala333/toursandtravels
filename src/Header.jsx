import React from 'react'
import { Link, Route, Routes } from 'react-router-dom'
import Home from './Home'
import Category from './Category'
import Details from './Details'
import About from './About'
import Contactus from './Contactus'
import 'bootstrap-icons/font/bootstrap-icons.css';

function Header() {
  return (
    <>
      <header className='p-2 bg-primary text-white '>
        <div className='container d-flex  justify-content-between '>
          <ul className="navbar-nav gap-5  flex-row ">
            <li className="nav-item">
              <Link className="nav-link active fw-bold" aria-current="page" to="/">Home</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link active fw-bold" aria-current="page" to="/about">About Us</Link>
            </li>

            <li className="nav-item">
              <Link className="nav-link active fw-bold" aria-current="page" to="/contactus">Contact Us</Link>
            </li>

          </ul>
          <ul className="list-unstyled  d-flex gap-3">
            <li >
              <strong><a href="/" className="text-white text-decoration-none">+9775175204</a></strong></li>
            <li><strong><a href="/" className='text-white text-decoration-none'>info@nepaltravels.com</a></strong></li>
            <li><strong><a href="/" className='text-white text-decoration-none'>Mon-Fri:10 AM -5PM</a></strong></li>


          </ul>


        </div>
      </header>








      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/about' element={<About />} />
        <Route path='/contactus' element={<Contactus />} />
        <Route path='/category/:cid/' element={<Category />} />
        <Route path='/details/:id/' element={<Details />} />
      </Routes>

    </>


  )
}

export default Header
