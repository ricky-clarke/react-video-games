'use client'
import { useState, useEffect, useContext } from "react";
import GameCard from "../game_card/game_card.component";
import { motion } from "framer-motion";
import Masonry from 'react-masonry-css'
import globalContext from "../../context/global-context";
import '../filters/filters.css';

const ComingSoonList = () => {

    const { state } = useContext(globalContext);
    const [game, HighestRatedHandler] = useState([]);


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

    const breakpointColumnsObj = {
      default: 4,
      1100: 3,
      700: 2,
      500: 1
    };

    return ( 
        <>

         { state.displayButton === 'grid' ? 

            <Masonry
              breakpointCols={breakpointColumnsObj}
              className="my-masonry-grid"
              columnClassName="my-masonry-grid_column">
                    {game && game.results?.map((game, i) => {
                        return( 
                          <motion.div
                              key={i}
                              initial={{ opacity: 0.1, marginTop: 150}}
                              whileInView={{ opacity: 1, marginTop: 0 }}
                              transition={{ duration: 0.8}}
                              viewport={{ once: true }}>
                                 <GameCard 
                                //  key={i}
                                  id={game.id}
                                  name = {game.name}
                                  slug = {game.slug}
                                  release_date ={game.released}
                                  meta_rating ={game.metacritic}
                                  img= {game.background_image}
                                  parent_platforms = {game.parent_platforms}
                                  genre = {game.genres}
                            />
                          </motion.div>
                        )
                        })
                      }
            </Masonry>

              : 

              game && game.results?.map((game, i) => {
                return( 
                    <GameCard 
                    display = 'game__card--row'
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

        </>
     );
}
 
export default ComingSoonList;