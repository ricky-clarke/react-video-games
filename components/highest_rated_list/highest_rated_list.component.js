// 'use client'
// import { useState, useEffect, useContext } from "react";
// import GameCard from "../game_card/game_card.component";
// import { motion } from "framer-motion";
// import Masonry from 'react-masonry-css'
// import globalContext from "../../context/global-context";
// import '../filters/filters.css';

// const HighestRatedList = () => {

//     const { state } = useContext(globalContext);
//     const [game, HighestRatedHandler] = useState([]);
//     const [order, sortOrderHandler] = useState('2');

//     useEffect(() => {
    
//       const fetchData = async () => {
//         try {
//           const response = await fetch(`/api/highest-rated/${order}`);
//           const game = await response.json();
//           HighestRatedHandler(game);
//         } catch (error) {
//           console.log(error)
//         }
//       };
  
//       fetchData();
//     }, []);


//     const platformHandleChange = (e) => {
//         const order = e.target.value;
//         sortOrderHandler(order);
//     }

//     // useEffect(() => {
//     //   const fetchData = async () => {
//     //     try {
//     //       const response = await fetch(`/api/highest-rated/${order}`);
//     //       const game = await response.json();
//     //       HighestRatedHandler(game);
//     //     } catch (error) {
//     //       console.log(error)
//     //     }
//     //   };
  
//     //   fetchData();
//     // }, [game, HighestRatedHandler]);

//     const breakpointColumnsObj = {
//       default: 4,
//       1100: 3,
//       700: 2,
//       500: 1
//     };

//     return ( 
//         <>

//           <div className="filters my-8">
//             <label>Sort</label>
//             <select name="" onChange={platformHandleChange}>
//                 <option default value="0">Platform</option>
//                 <option value="1">PC</option>
//                 <option value="2">Playstation</option>
//                 <option value="3">Xbox</option>
//                 <option value="4">Nintendo</option>
//             </select>

//             </div>

//          { state.displayButton === 'grid' ? 

//             <Masonry
//               breakpointCols={breakpointColumnsObj}
//               className="my-masonry-grid"
//               columnClassName="my-masonry-grid_column">
//                     {game && game.results?.map((game, i) => {
//                         return( 
//                           <motion.div
//                               key={i}
//                               initial={{ opacity: 0.1, marginTop: 150}}
//                               whileInView={{ opacity: 1, marginTop: 0 }}
//                               transition={{ duration: 0.8}}
//                               viewport={{ once: true }}>
//                                  <GameCard 
//                                 //  key={i}
//                                   id={game.id}
//                                   name = {game.name}
//                                   slug = {game.slug}
//                                   release_date ={game.released}
//                                   meta_rating ={game.metacritic}
//                                   img= {game.background_image}
//                                   parent_platforms = {game.parent_platforms}
//                                   genre = {game.genres}
//                             />
//                           </motion.div>
//                         )
//                         })
//                       }
//             </Masonry>

//               : 

//               game && game.results?.map((game, i) => {
//                 return( 
//                     <GameCard 
//                     display = 'game__card--row'
//                     key={i}
//                     id={game.id}
//                     name = {game.name}
//                     slug = {game.slug}
//                     release_date ={game.released}
//                     meta_rating ={game.metacritic}
//                     img= {game.background_image}
//                     parent_platforms = {game.parent_platforms}
//                     genre = {game.genres}
//                     />
//                 )
//                 })

//               }

//         </>
//      );
// }
 
// export default HighestRatedList;