import React from 'react'
import BgLunch from "../../assets/Lunch.webp"
import CategoryPage from '../CategoryPage/CategoryPage'

const Lunch = () => {
  return (
    <div>
         <CategoryPage title="Lunch" bgImage={BgLunch} category={["Lunch"]}/>
    </div>
  )
}

export default Lunch