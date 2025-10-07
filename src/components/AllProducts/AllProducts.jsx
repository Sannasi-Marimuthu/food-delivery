import React from 'react'
import CategoryPage from '../CategoryPage/CategoryPage'
import BgAll from "../../assets/all.jpg"

const AllProducts = () => {
  return (
    <div>
        <h1>
           <CategoryPage title="All Products" bgImage={BgAll} category={["All"]}/>
        </h1>
    </div>
  )
}

export default AllProducts