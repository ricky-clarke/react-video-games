import Image from "next/image";
import Link from "next/link";
// import './game_card.css'
// import styles from './game_card.module.css';
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
            <div className={styles.game__card + ' ' + card_type}>
                <div className={styles.game__card__img}>
                    <div>
                       { game_info.background_image && <Image src={game_info.background_image} alt="" width="280" height="155" /> }
                    </div>
                </div>
                <div className={styles.game__card__info}>
                    <div className="flex justify-between items-start">
                        <h4>{game_info.name}</h4>
                        {game_info.metacritic && <div className="game__card__meta_score" title="Metascore"><span className={`meta_rating--`+meta_rating_color}>{game_info.metacritic}</span></div> }
                    </div>
                    <div className={styles.game__card__more}>
                        <div>
                            <div className={styles.game__card__meta}>
                                    {game_info.parent_platforms && game_info.parent_platforms?.map((platform, i) => {
                                    return( 
                                    <div key={i}>R</div>
                                    // <div key={i} className={`game__card__platform game__card__platform--` + platform.platform.slug}></div>
                                    )
                                    })
                                }
                            </div>
                            <div className="mb-1"><span>Released: {formattedDate}</span></div>
                            <div className="flex">
                                <span>Genre:</span>
                                <span className="flex flex-wrap">
                                    {game_info.genres && game_info.genres?.map((genre, i) => {
                                        return( 
                                        <span key={i} className="ml-2">{genre.name}</span>
                                        )
                                        })
                                    }
                                    </span>
                            </div>
                        </div>
                    </div>
                </div>
                <Link href={{pathname: `/game/${game_info.slug}` }} scroll={false}></Link>
            </div>
        </motion.div>

        </>
     );
}
 
export default GameCard;