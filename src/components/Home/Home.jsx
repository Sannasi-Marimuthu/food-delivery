import React from 'react'
import Navbar from '../Navbar/Navbar'
import Hero from '../Hero/Hero'
import Category from '../Category/Category'
import Values from '../Values/Values'
import Products from '../Products/Products1'
import Discount from '../Discount/Discount'
import Review from '../Review/Review'
 
const Home = () => {
  return (
    <div>
         <Hero/>
        <Category/>
        <Values/>
        <Products/>
        <Discount/>
        <Review/>
         
    </div>
  )
}

export default Home