import { useContext } from "react";
import globalContext from "../../context/global-context";
import MasonryWrap from "../masonry/masonry.component";
import GameCard from "../game_card/game_card.component";

const GameList = ({data}) => {

    const { state } = useContext(globalContext);

    return (
        <>
         { state.displayButton === 'grid' ? 
             <MasonryWrap>
                {data && data.results?.map((game, i) => {
                    return( 
                        <GameCard key={i} game_info={game}/>
                      )
                    })
                    }
             </MasonryWrap>
            : 
            data && data.results?.map((game, i) => {
                return( 
                  <GameCard key={i} game_info={game} display="game__card--row"/>
                )
                })
            }
        </>
    )


}

export default GameList;