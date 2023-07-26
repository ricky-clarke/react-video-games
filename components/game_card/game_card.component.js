import Image from "next/image";
import Link from "next/link";
import { GameCardContainer, GameCardInfo, GameCardMore, GameCardGenre, GameCardMeta } from "./game_card.styles";
import { motion } from "framer-motion";

const GameCard = ({ game_info, display }) => {

const meta_rating_color = game_info.metacritic >= '80' ? 'green' : 'orange';
 const card_type = display == 'game__card--row' ? 'game__card--row' : 'game__card--grid';

 // Format the date
 const date = new Date(game_info.released)
 const formattedDate = date.toLocaleDateString("en-GB", {
   day: "numeric",
   month: "long",
   year: "numeric"
 })
 
    return ( 
        <>
        <motion.div
            initial={{ opacity: 0.1, marginTop: 150}}
            whileInView={{ opacity: 1, marginTop: 0 }}
            transition={{ duration: 0.8}}
            viewport={{ once: true }}>
            {/* <div className={`game__card ${card_type}`}> */}
                <GameCardContainer display_type={card_type} className="game__card">
                    <div className="card_img">
                        <div>
                        { game_info.background_image ? <Image src={game_info.background_image} alt="" width="280" height="155" /> : <Image src="/placeholder-image.jpeg"width="280" height="155" alt=""/> }
                        </div>
                    </div>
                    <GameCardInfo>
                        <div className="flex justify-between items-start">
                            <h4>{game_info.name}</h4>
                            {game_info.metacritic && <GameCardMeta title="Metascore"><span className={`meta_rating--`+meta_rating_color}>{game_info.metacritic}</span></GameCardMeta> }
                        </div>
                    <GameCardMore className="game__card__more">
                        <div>
                            <div className="game__card__meta flex mt-5 mb-4">
                                    {game_info.parent_platforms && game_info.parent_platforms?.map((platform, i) => {
                                    return( 
                                    <div key={i} className={`game__card__platform game__card__platform--` + platform.platform.slug}></div>
                                    )
                                    })
                                }
                            </div>
                            <div className="mb-1">
                                <span>Released: {formattedDate}</span>
                            </div>
                            <GameCardGenre>
                                <span>Genre:</span>
                                <span className="flex flex-wrap">
                                    {game_info.genres && game_info.genres?.map((genre, i) => {
                                        return( 
                                        <span key={i} className="ml-2">{genre.name}</span>
                                        )
                                        })
                                    }
                                 </span>
                            </GameCardGenre>
                        </div>
                    </GameCardMore>
                    </GameCardInfo>
                    <Link href={{pathname: `/game/${game_info.slug}` }} scroll={false}></Link>
                </GameCardContainer>
        </motion.div>

        </>
     );
}
 
export default GameCard;