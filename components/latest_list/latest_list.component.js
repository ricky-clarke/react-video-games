'use client'
import { useState, useEffect, useContext } from "react";
import GameList from "../game_list/game-list.component";

const LatestList = () => {

    const [data, HighestRatedHandler] = useState([]);

    useEffect(() => {
    
      const fetchData = async () => {
        try {
          const response = await fetch(`/api/latest`);
          const game = await response.json();
          HighestRatedHandler(game);
        } catch (error) {
          console.log(error)
        }
      };
  
      fetchData();
    }, []);

    return ( 
        <>

       <GameList data={data}/>

        </>
     );
}
 
export default LatestList;