'use client'
import { useState, useEffect } from "react";
import GameList from "../game_list/game-list.component";

const SearchResultList = ({search_term}) => {

    const search = search_term;
    const [search_terms, GetResults] = useState([]);

    useEffect(() => {
        async function fetchData() {;
          const result = await fetch(`/api/search-results/${search}`)
          const search_term = await result.json();
          GetResults(search_term);
        }
          fetchData();
      
    }, [search]);

    return ( 
        <>
            {search_terms && <GameList data={search_terms.items}/> }
        </>
     );
}
 
export default SearchResultList;