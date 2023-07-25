import PageHeader from "../../components/page-header/page-header.component"
import Image from "next/image";
import GameScreenshots from "../../components/game-screenshots/game-screenshots.components";
// import './game.css'

export default function Game( { data }) {

  // Format the date
 const date = new Date(data.released)
 const formattedDate = date.toLocaleDateString("en-GB", {
   day: "numeric",
   month: "long",
   year: "numeric"
 })

  return(
      <>
        <PageHeader title={data.name} intro=""/>
        <div className="flex single_game__grid full_container full_container--page">
                <div className="w-7/12">
                {data.background_image &&  
                  <Image
                  src={data.background_image}
                  alt=""
                  width="1000"
                  height="500"
                  loading="eager"
                  style={{
                    maxWidth: '100%',
                    height: 'auto'
                  }}
                  /> }
                {data.background_image_additional && <Image src={data.background_image_additional} alt="" width="1000" height="500" />}
                  <GameScreenshots />
                </div>
                <div className="w-5/12 px-10">
                    <div className="sticky top-5">
                      <h2>About</h2>
                      <div className="game_grid__about">
                        <div dangerouslySetInnerHTML={{ __html: data.description }}></div>
                      </div>
                      <div className="single_game__meta">
                        <div className="flex justify-start mb-4">
                          {data.parent_platforms && data.parent_platforms.map((platform, i) => {
                                return( 
                                <div key={i} className={`game__card__platform game__card__platform--` + platform.platform.slug}></div>
                                )
                            })
                          }</div>
                        {data.metacritic && <div><span>Metacritic rating</span> <span>{data.metacritic}</span></div> }
                      <div><span>Released</span> <span>{data.released ? formattedDate : '-'}</span></div>
                      {data.developers[0]?.name && <div><span>Developer</span><span>{data.developers[0]?.name}</span></div>}
                        <div><span>Publisher</span><span>
                          {data.publishers.map((publisher, i) => {
                              return( 
                              <span key={i} className="ml-2">{publisher.name}</span>
                              )
                              })
                            }  
                          </span>
                        </div>
                        <div>
                            <span>Genre</span><span>
                              {data.genres && data.genres.map((genre, i) => {
                                return( 
                                <span key={i} className="ml-2">{genre.name}</span>
                                )
                                })
                              }  
                          </span>
                        </div>
                      {data.website ? <div><span>Website</span><span><a href={data.website} target="_blank">Visit website</a></span></div> : null }
                      </div>
                    </div>
                </div>
              </div>
      </>
  )
}


export async function getServerSideProps(context) {

  const slug = context.query.slug;
  const client_id = process.env.RAWG_API_KEY;

  const res = await fetch(`https://api.rawg.io/api/games/${slug}?key=${client_id}`);

  const data = await res.json()
 
  return { props: { data } }
}