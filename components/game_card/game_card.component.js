import Image from "next/image";
import Link from "next/link";
import './game_card.css'


const GameCard = ({ display, name, meta_rating, img, parent_platforms, release_date, genre, slug, id }) => {

const meta_rating_color = meta_rating >= '80' ? 'green' : 'orange';
const card_type = display == 'game__card--row' ? 'game__card--row' : 'game__card--grid';

 // Format the date
 const date = new Date(release_date)
 const formattedDate = date.toLocaleDateString("en-GB", {
   day: "numeric",
   month: "long",
   year: "numeric"
 })

    return ( 
        <>
            <div className={`game__card ${card_type}`}>
                <div className='game__card__img'>
                    <div>
                       { img && <Image src={img} alt="" width="280" height="155" /> }
                    </div>
                </div>
                <div className="game__card__info">
                    <div className="flex justify-between items-start">
                        <h4>{name}</h4>
                        <div className="game__card__meta_score" title="Metascore"><span className={`meta_rating--`+meta_rating_color}>{meta_rating}</span></div>
                    </div>
                    <div className="game__card__more">
                        <div>
                            <div className="game__card__meta flex mt-5 mb-4">
                                    {parent_platforms && parent_platforms?.map((platform, i) => {
                                    return( 
                                    <div key={i} className={`game__card__platform game__card__platform--` + platform.platform.slug}></div>
                                    )
                                    })
                                }
                            </div>
                            <div className="mb-1"><span>Released: {formattedDate}</span></div>
                            <div className="flex">
                                <span>Genre:</span>
                                <span className="flex flex-wrap">
                                    {genre && genre?.map((genre, i) => {
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

                <Link href={{pathname: `/game/${slug}` }}></Link>

            </div>
           
        </>
     );
}
 
export default GameCard;