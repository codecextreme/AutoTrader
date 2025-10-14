import React from 'react'
import { useNavigate } from 'react-router-dom';
import './Watercraft.css'
import Navbar from '../../Components/navbar/Navbar'
import Searchtype from '../../Components/searchtypes/Searchtype'
import Winner from '../../Components/awardwinners/Winner'
import Slider from '../../Components/homeComponents/slider/Slider'
import NewUsed from '../../Components/New&Used/New&Used'
import Footer from '../../Components/footer/Footer'
import truck from '../../assets/media/images/Truck.jpg'

export default function Trucks() {
     const navigate = useNavigate();

  return (
    <div>
      <Navbar/>
      <div className="top-cover">
        <img src={truck} alt="" />
      </div>
      <div className="list-it">
        <Searchtype/>
        <div className="sell-it">
          <img src={truck} alt="" />
          <div className="sell-div">
            <h2>Selling Your Truck?</h2>
            <button className='list-btn'>List It Free</button>
          </div>
        </div>
      </div>
      <Winner/>
      <Slider/>
      <NewUsed/>
      <Footer/>
      
    </div>
  )
}
