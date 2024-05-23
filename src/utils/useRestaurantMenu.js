import { useEffect, useState } from "react";

const useRestaurantMenu = (resId) => {
   
    const [resInfo,setResInfo] = useState(null)
    //fetchdata
    useEffect(()=>{
        fetchMenu();
    },)
    
    const fetchMenu = async () => {
      const data = await fetch("https://cors-handlers.vercel.app/api/?url=https%3A%2F%2Fwww.swiggy.com%2Fdapi%2Fmenu%2Fpl%3Fpage-type%3DREGULAR_MENU%26complete-menu%3Dtrue%26catalog_qa%3Dundefined%26submitAction%3DENTER%26restaurantId%3D"+resId+"%26lat%3D28.7040592%26lng%3D77.1024901");
      const json = await data.json();
      //console.log(json)
      setResInfo(json.data);
    };
    return resInfo;
    
}

export default useRestaurantMenu;