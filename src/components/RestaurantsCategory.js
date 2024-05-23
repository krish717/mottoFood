// import React, { useState } from 'react'

import ItemList from './ItemList';

 const RestaurantsCategory = ({categoryData,ShowItems,setShowIndex}) => {
    
    console.log(categoryData);
    const handleClick  = ()=>{
      setShowIndex();
    }
  return (
    
    <div>
        <div className='category-cards' onClick={handleClick}>
        <span>{categoryData.title} ({categoryData.itemCards.length})</span>
        <span className='plus'>+</span>
        </div>
        {ShowItems && <ItemList itemsData={categoryData?.itemCards}/>}
    </div>
    
  )
}

export default RestaurantsCategory;
