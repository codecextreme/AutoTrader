import React from 'react'
import './App.css'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Signin from './screens/auth/signin/Signin'
import Signup from './screens/auth/signup/Signup';
import Verify from './screens/auth/verify/Verify';
import Forget from './screens/auth/forgetPassword/Forget'
import Reset from './screens/auth/resetPassword/Reset'
import Home from './screens/home/Home';
import Trucks from './screens/trucks & SUV/Trucks';
import Trailer from './screens/trailers/Trailer';
import RVs from './screens/RVs/RVs'
import Boats from './screens/boats/Boats'
import Watercraft from './screens/watercrafts/Watercraft'
import Bikes from './screens/bikes/Bikes'
import Snowmobiles from './screens/snowmobiles/Snowmobiles'
import Heavyequipments from './screens/heavyEquipments/Heavyequipments'
import Farm from './screens/farm/Farm'
import Sellmycar from './screens/sellmycar/Sellmycar'

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="Signin/" element={<Signin />} />
        <Route path="Signup/" element={<Signup/>} />
        <Route path="Verify/" element={<Verify/>} />
        <Route path="Forget/" element={<Forget/>} />
        <Route path="Reset/" element={<Reset/>} /> 
        <Route path="Trucks/" element={<Trucks/>} />
        <Route path="Trailer/" element={<Trailer/>} />
        <Route path="RVs/" element={<RVs/>} />
        <Route path="Boats/" element={<Boats/>} />
        <Route path="Watercraft/" element={<Watercraft/>} />
        <Route path="Bikes/" element={<Bikes/>} />
        <Route path="Snowmobiles/" element={<Snowmobiles/>} />
        <Route path="Heavyequipments/" element={<Heavyequipments/>} />
        <Route path="Farm/" element={<Farm/>} />
        <Route path="Sellmycar/" element={<Sellmycar/>} />
      </Routes>
    </Router>
  )
}
