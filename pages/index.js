import Head from "next/head";
import { useState, useEffect } from "react";
import PageHeader from "../components/page-header/page-header.component";
import GameList from "../components/game_list/game-list.component";

export async function getServerSideProps() {

  const client_id = process.env.RAWG_API_KEY;

  const res = await fetch(`https://api.rawg.io/api/games?key=${client_id}&ordering=-metacritic&page_size=40`)

  const data = await res.json()
 
  return { props: { data } }
}


export default function Home( { data }) {

  const [filteredGames, GetFilteredGames] =  useState([]); 
  const [newGames, TestHandler] = useState(null) //
  const [platformActive, PlatformActiveHandler] = useState('0'); // Set button to active

  useEffect(() => {
        
    const fetchData = async () => {
      try {
        const response = await fetch(`/api/highest-rated/${filteredGames}`);
        const game = await response.json();
       TestHandler(game)
      } catch (error) {
        console.log(error)
      }
    };

    fetchData();

}, [filteredGames, GetFilteredGames]);

  const getPlatforms = [
    { value: '01', platform: 'PC'},
    { value: '02', platform: 'Playstation'},
    { value: '03', platform: 'Xbox'},
    { value: '07', platform: 'Nintendo'},
  ]

  const platformClick = (event) => {
    const target = event.target.value;
    GetFilteredGames(target);
    PlatformActiveHandler(target);
    
    // Remove button--current class from current month button
     document.getElementById('date_button--0').classList.remove('button--current');
}

    // Set button state
    const isActive = (buttonId) => {
      return platformActive === buttonId ? 'button--active' : '';
    };


    return (
		<>
        <Head>
            <title>Highest rated</title>
            <meta name='description' content='Highest rated games'/>
        </Head>
        <PageHeader title="Highest rated" intro="Highest rated games of all time"/>

        <div className="full_container">

            <div className="flex flex-wrap gap-2 mb-7">    

                  <button
                        id="date_button--0"
                        className={`toggle_button ${isActive('0')}`}
                        value="0"
                        onClick={platformClick}>
                          All
                    </button>

                    {getPlatforms?.map((platform, i) => {
                            return (
                                <button
                                key={i}
                                id={`date_button--${platform.value}`}
                                className={`toggle_button ${isActive(platform.value)}`}
                                value={platform.value}
                                onClick={platformClick}>
                                  {platform.platform}
                                </button>
                            )
                        })
                    }       
              </div>

              {newGames ? <GameList data={newGames}/> : <GameList data={data}/>}

        </div>
		</>
    )

}