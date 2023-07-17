'use client'
import GameList from "../game_list/game-list.component";

const ComingSoonListMonthly = ({monthly_games}) => {

    return ( 
        <>
          <GameList data={monthly_games.items}/>
        </>
     );
}
 
export default ComingSoonListMonthly;