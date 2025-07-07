import React from 'react'
import { category, data } from './Data'
import { Link } from 'react-router-dom'

function Home() {
  return (
    <>
      <section>
        <div className="container">
          <div className="  bg-primary-subtle p-2 rounded">
            <ul className=' d-flex justify-content-end gap-4'>
              {category.map(a => (

                <li className='fw-bold list-style-none' key={a}>
                  <Link to={`/category/${a}`} className='text-decoration-none text-dark'>{a}</Link>
                </li>

              ))}
            </ul>
          </div>
        </div>
      </section>
       <section className='p-5'>
        <div className='container'>
          <div className='row '>
            <div className='col-lg-6 banner-content text-center mb-1 text-lg-start align-items-center'>
              <h4 className='text-primary'>Explore Nepal</h4>
              <h1 className='fw-bold text-dark mb-3'>Discover Your Next Adventure With Us.</h1>
              <p><strong className='text-secondary'>Nepal Travels & Expedition is a leading, full-service trekking, tour, mountaineering, scenic, cultural and spiritual tours, wilderness expedition, and overland adventure agency, offering a variety of experiences for every type of traveler. Start by searching your dream trip.</strong></p>


            </div>
            <div className='col-lg-6 '>
              <img className='img-fluid' src="https://sdewpncqs13k.compat.objectstorage.ap-sydney-1.oraclecloud.com/nepaltravels/theme/travel/images/home-travel.png" alt=""></img>

            </div>
            <div style={{ borderBottom: '2px dotted grey' }}>
            </div>



          </div>

        </div>
      </section>

     
      <nav>
        <div className='container'>
          <div className='row'>
            <div className='col-lg-3 shadow-sm text-center bg-white rounded py-4'>
              <img className='img fluid' src="https://sdewpncqs13k.compat.objectstorage.ap-sydney-1.oraclecloud.com/nepaltravels/theme/travel/images/icons/007-hiking-1.png" ></img>
              <a href="/" className='text-decoration-none text-dark'><h4 className='py-3'>NT Specials</h4></a>

            </div>
            <div className='col-lg-3 shadow-sm text-center bg-white rounded py-4'>
              <img className='img fluid' src="https://sdewpncqs13k.compat.objectstorage.ap-sydney-1.oraclecloud.com/nepaltravels/theme/travel/images/icons/004-camping-tent.png" ></img>
              <a href="/" className='text-decoration-none text-dark'><h4 className='py-3'>NT Offers</h4></a>
            </div>
            <div className='col-lg-3 shadow-sm text-center bg-white rounded py-4'>
              <img className='img fluid' src="https://sdewpncqs13k.compat.objectstorage.ap-sydney-1.oraclecloud.com/nepaltravels/theme/travel/images/icons/005-sunbed.png" ></img>
              <a href="/" className='text-decoration-none text-dark'><h4 className='py-3'>Day Trips</h4></a>
            </div>
            <div className='col-lg-3 shadow-sm text-center bg-white rounded py-4'>
              <img className='img fluid' src="https://sdewpncqs13k.compat.objectstorage.ap-sydney-1.oraclecloud.com/nepaltravels/theme/travel/images/icons/002-safari.png" ></img>
              <a href="/" className='text-decoration-none text-dark'><h4 className='py-3'>Fixed Departure</h4></a>
            </div>

          </div>

        </div>
      </nav>
       <section>
        <div className='container py-5'>
          <div className='row'>
            <div className='col-lg-6'>
              <img className='img-fluid' src="https://sdewpncqs13k.compat.objectstorage.ap-sydney-1.oraclecloud.com/nepaltravels/theme/travel/images/travel1.png" alt=""></img>

            </div>
            <div className='col-lg-6 text-lg-start align-items-center'>
              <h1 className='fw-bold text-dark mb-4'>Tours and Travel Agency in Nepal | Nepal Travels & Expedition</h1>
              <p><strong className='text-secondary '>Specializes in tailor-made journeys in South Asia Nepal, Bhutan, and Tibet. We match travelers with their dream destinations and holidays, where the experience is unique and memorable.</strong></p>
              <p><strong className='text-secondary '>Namaste! Nepal Travels & Expedition is 100% owned and operated by Nepalese experience and specializing in ethically based, environmentally conscious trekking, tour, mountaineering, scenic, cultural and spiritual tours, wilderness expedition, overland adventure with the extreme sport through Nepal, Tibet, Bhutan, and India. Traveling alone, solo travelers and a small group are welcome to join and other outgoing group activities like-minded people together to enhance your traveling experience. Our entire staffs are local Nepalese and have high experience in customer care, English Language other languages are in priority. </strong></p>

            </div>

          </div>

        </div>
      </section>

       <section>
        <div className='container'>
          <div className='text-center mt-5'>
            <h4 className='text-danger'>Services</h4>
            <h2>Find <span className='text-primary'>Travel Perfection</span></h2>
            <p  className='text-secondary '>Create Unforgettable Experiences with Our Adventure-Filled Tours</p>
          </div>
          <div className='row '>
            <div className='col-lg-3 shadow-sm text-center bg-white rounded py-4 '>
              <h3>Equipment and Safety</h3>
              <p>We provide high-quality equipment for tents, foam mattresses, remote and high altitude areas all essential equipment for porters & staff.</p>

            </div>
            <div className='col-lg-3 shadow-sm text-center bg-white rounded py-4 '>
              <h3>Transportation</h3>
              <p>Our guides will escort you to all destinations. Trips outside the Katmandu valley will be on large buses or in Toyota Land cruisers</p>


            </div>
            <div className='col-lg-3 shadow-sm text-center bg-white rounded py-4 '>
              <h3>Staff</h3>
              <p>Our staff (Guide, Sherpa, cooks) are well trained, licensed by the Ministry of tourism and civil aviation of Nepal.</p>
            </div>
             <div className='col-lg-3 shadow-sm text-center bg-white rounded py-4 '>
              <h3>Price and Guarantee</h3>
              <p>Our motto is client satisfaction; offering a reasonable price for the quality and professional service</p>
            </div>


          </div>

        </div>
      </section>
      <section className='my-5'>
        <div className="container">
          <div className='text-center mt-5'>
            <h4 className='text-danger'>Top Destinations</h4>
            <h2>Explore <span className='text-primary'>Top Destinations</span></h2>
            <p >Experience the best the world has to offer:</p>

          </div>
          <div className="row">
            {data.map(a => (
              <div className="col-lg-3 py-4" key={a.id}>
                <div className="shadow p-3 mb-3 bg-body rounded nn">
                  <Link to={`/details/${a.id}`} className='text-decoration-none text-dark'>
                  <img className='w-100' src={a.image_url} alt="" />
                  <p>{a.title}</p>
                  <p>Country: {a.country}</p>
                  <p>Price: {a.price}</p>
                  <p>Destination: {a.destination}</p>
                </Link>
                <div className='d-flex  p-2'>
                  <button className='btn btn-1 bg-primary'>BOOK NOW</button>
                </div>
              </div>
</div>
        ))}
        </div>
      </div>
    </section >
   </>
  )
}

export default Home







