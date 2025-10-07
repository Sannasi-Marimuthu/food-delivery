import React from 'react'
import CategoryPage from '../CategoryPage/CategoryPage'
import BgBreakFast from  "../../assets/breakfast.webp"

const Breackfast = () => {
  return (
    <div>
        <CategoryPage title="Break Fast" bgImage={BgBreakFast} category={["Breakfast"]}/>
    </div>
  )
}

export default Breackfast