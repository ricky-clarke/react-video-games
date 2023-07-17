'use client'
import { useState, useEffect } from "react";
import GameList from "../game_list/game-list.component";
import '../filters/filters.css';

const ComingSoonList = () => {

    const [data, HighestRatedHandler] = useState([]);


    useEffect(() => {
    
      const fetchData = async () => {
        try {
          const response = await fetch(`/api/coming_soon_list`);
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
 
export default ComingSoonList;