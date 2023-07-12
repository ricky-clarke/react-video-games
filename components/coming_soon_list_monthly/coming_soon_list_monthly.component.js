'use client'
import { useState, useEffect, useContext } from "react";
import GameCard from "../game_card/game_card.component";
import { motion } from "framer-motion";
import Masonry from 'react-masonry-css'
import globalContext from "../../context/global-context";
import '../filters/filters.css';

const ComingSoonListMonthly = ({monthly_games}) => {

    const { state } = useContext(globalContext);

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
                    {monthly_games && monthly_games?.items.results?.map((game, i) => {
                        return( 
                          <motion.div
                              key={i}
                              initial={{ opacity: 0.1, marginTop: 150}}
                              whileInView={{ opacity: 1, marginTop: 0 }}
                              transition={{ duration: 0.8}}
                              viewport={{ once: true }}>
                                 <GameCard 
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

          monthly_games && monthly_games?.items.results?.map((game, i) => {
                return( 
                  <motion.div
                  key={i}
                  initial={{ opacity: 0.1, marginTop: 150}}
                  whileInView={{ opacity: 1, marginTop: 0 }}
                  transition={{ duration: 0.8}}
                  viewport={{ once: true }}>
                     <GameCard 
                      id={game.id}
                      display = 'game__card--row'
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

        </>
     );
}
 
export default ComingSoonListMonthly;