import React from "react";
import Banner from "../Banner/Banner";
import ProductList from "../ProductList/Productlist"
import Cards from "../Cards/Cards";
 
const CategoryPage = ({title,bgImage,category=[]}) => {

    let filterItems =  category.includes('All')
    ? ProductList
    :ProductList.filter(item => category.includes(item.Category))

   let renderProducts =  filterItems.map((product)=>{
    return(
        <Cards image={product.Image} name={product.name} price={product.price}/>
    )
   })
  
  return (
    <div>
      <Banner title={title} bgImage={bgImage}/>
      <div className="grid grid-cols-1   md:grid-cols-4 gap-9 py-20 max-w-[1400px] mx-auto  px-10">
        {renderProducts}
      </div>
    </div>
  );
};

export default CategoryPage;
