import { useRouter } from "next/router"
import { useEffect, useState } from "react";
import PageHeader from "../../components/page-header/page-header.component"
import Image from "next/image";
import GameScreenshots from "../../components/game-screenshots/game-screenshots.components";
import './game.css'

export default function Game() {

const router = useRouter();
const [game, GetGameInfo] = useState([]);

useEffect(() => {
  if(router.isReady){
    const slug = router.query.slug;
    async function fetchData() {
      const result = await fetch(`/api/game/${slug}`)
      const game = await result.json();
      GetGameInfo(game);
    }
      fetchData();
  }
}, [router.isReady]);


   // Format the date
 const date = new Date(game.items?.released)
 const formattedDate = date.toLocaleDateString("en-GB", {
   day: "numeric",
   month: "long",
   year: "numeric"
 })

  return (
          <>

          <PageHeader title={game.items?.name} intro=""/>
            <div className="flex single_game__grid">
              <div className="w-7/12">

              {game.items?.background_image &&  
              <Image src={game.items?.background_image} alt="" width="1000" height="500" loading="eager"/> }

              {game.items?.background_image_additional && <Image src={game.items?.background_image_additional} alt="" width="1000" height="500" />}

                <GameScreenshots />
              </div>
              <div className="w-5/12 px-10">
                  <div className="sticky top-5">
                    <h2>About</h2>
                    <div className="game_grid__about">
                      <div dangerouslySetInnerHTML={{ __html: game.items?.description }}></div>
                    </div>
                    <div className="single_game__meta">
                      <div className="flex justify-start mb-4">
                        {game.items && game.items?.parent_platforms.map((platform, i) => {
                              return( 
                              <div key={i} className={`game__card__platform game__card__platform--` + platform.platform.slug}></div>
                              )
                          })
                        }</div>
                      <div><span>Metacritic rating</span> <span>{game.items?.metacritic}</span></div>
                      <div><span>Released</span> <span>{formattedDate}</span></div>
                    { game.items?.developers[0]?.name ? <div><span>Developer</span><span>{game.items?.developers[0]?.name}</span></div> : null }
                      <div><span>Publisher</span><span>
                        {game.items && game.items?.publishers.map((publisher, i) => {
                            return( 
                            <span key={i} className="ml-2">{publisher.name}</span>
                            )
                            })
                          }  
                        </span>
                      </div>
                      <div>
                          <span>Genre</span><span>
                            {game.items && game.items?.genres.map((genre, i) => {
                              return( 
                              <span key={i} className="ml-2">{genre.name}</span>
                              )
                              })
                            }  
                        </span>
                      </div>
                    {game.items?.website ? <div><span>Website</span><span><a href={game.items?.website} target="_blank">Visit website</a></span></div> : null }
                    </div>
                  </div>
              </div>
            </div>
      </>
  )
}
