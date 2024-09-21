import React from 'react'
import Banner from '../components/Common/Banner/Banner'
import ReservationFilter from '../components/ReservationFilter/ReservationFilter'
import './Home.css';

const Home = () => {
  return (
   <>
   <Banner />
   <div className="reservation-filter-container">
        <ReservationFilter />
      </div>
   </>
  )
}

export default Home