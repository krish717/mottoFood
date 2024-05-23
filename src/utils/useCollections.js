import { useEffect, useState } from "react";

const useCollections = (colId) => {
   
    const [collInfo,setcollInfo] = useState(null)
    //fetchdata
    useEffect(()=>{
        fetchCollections(colId);
    },)
    
    const fetchCollections = async (colId) => {
      // const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=25.59080&lng=85.13480&collection="+colId+"&tags=layout_CCS_Pizza&sortBy=&filters=&type=rcv2&offset=0&page_type=null");
      const data = await fetch(`https://cors-handlers.vercel.app/api/?url=https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Frestaurants%2Flist%2Fv5%3Flat%3D28.65420%26lng%3D77.23730%26collection%3D${colId}%26tags%3Dlayout_CCS_NorthIndian%26sortBy%3D%26filters%3D%26type%3Drcv2%26offset%3D0%26page_type%3Dnull`);

      const json = await data.json();
      //console.log(json)
      setcollInfo(json.data.cards);
      //  console.log(json)
    
    };
    return collInfo;
    
}

export default useCollections;