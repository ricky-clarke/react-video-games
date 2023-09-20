'use client'
import GameList from "../game_list/game-list.component";

const ComingSoonListMonthly = ({monthly_games}) => {
  
    return ( 
        <>
          {monthly_games.items.count == 0 ? <p>No releases this month</p> : <GameList data={monthly_games.items}/> } 
        </>
     );
}
 
export default ComingSoonListMonthly;