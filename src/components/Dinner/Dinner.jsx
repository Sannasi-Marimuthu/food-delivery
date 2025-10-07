import React from 'react'
import CategoryPage from '../CategoryPage/CategoryPage'
import BgDinner from "../../assets/dinner.jpg"


const Dinner = () => {
  return (
    <div>
          <CategoryPage title="Dinner" bgImage={BgDinner} category={["Dinner"]}/>
    </div>
  )
}

export default Dinner