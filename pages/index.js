import { useContext } from "react";
import Head from "next/head";
import { motion } from "framer-motion";
import Masonry from 'react-masonry-css'
import PageHeader from "../components/page-header/page-header.component";
// import HighestRatedList from "../components/highest_rated_list/highest_rated_list.component";
import GameCard from "../components/game_card/game_card.component";
import globalContext from "../context/global-context";

export default function Home( { data }) {

    const { state } = useContext(globalContext);

    const breakpointColumnsObj = {
        default: 4,
        1100: 3,
        700: 2,
        500: 1
      };

    return (
		<>
        <Head>
            <title>Highest rated</title>
            <meta name='description' content='Highest rated games'/>
        </Head>
            <PageHeader title="Highest rated" intro="Highest rated games of all time"/>
            <div className="full_container">
             {/* <HighestRatedList /> */}
             
             { state.displayButton === 'grid' ? 

             <Masonry
              breakpointCols={breakpointColumnsObj}
              className="my-masonry-grid"
              columnClassName="my-masonry-grid_column">

                    {data && data.results?.map((game, i) => {
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
        
        data && data.results?.map((game, i) => {
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


            </div>
		</>
    )

}


export async function getServerSideProps() {

    const client_id = process.env.RAWG_API_KEY;

    const res = await fetch(`https://api.rawg.io/api/games?key=${client_id}&ordering=-metacritic&page_size=50`)

    const data = await res.json()
   
    return { props: { data } }
  }