'use client'
import { useState, useEffect, useContext } from "react";
import globalContext from "../../context/global-context";
import GameCard from "../game_card/game_card.component";
import Masonry from 'react-masonry-css'

const SearchResultList = ({search_term}) => {

  const { state } = useContext(globalContext);
  
    const search = search_term;
    const [search_terms, GetResults] = useState('');

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

            { state.displayButton === 'grid' ? 

            <Masonry
              breakpointCols={4}
              className="my-masonry-grid"
              columnClassName="my-masonry-grid_column">
                  {search_terms && search_terms.items.results?.map((game, i) => {
                      return( 
                          <GameCard 
                          key={i}
                          id={game.id}
                          name = {game.name}
                          slug = {game.slug}
                          release_date ={game.released}
                          meta_rating ={game.metacritic}
                          img= {game.background_image}
                          parent_platforms = {game.parent_platforms}
                          genre = {game.genres}
                          />
                      )
                      })
                    }
            </Masonry>

              : 

              search_terms && search_terms.items.results?.map((game, i) => {
                  return( 
                      <GameCard 
                      key={i}
                      display = 'game__card--row'
                      id={game.id}
                      name = {game.name}
                      slug = {game.slug}
                      release_date ={game.released}
                      meta_rating ={game.metacritic}
                      img= {game.background_image}
                      parent_platforms = {game.parent_platforms}
                      genre = {game.genres}
                      />
                  )
                  })
          

                  }
                
        </>
     );
}
 
export default SearchResultList;