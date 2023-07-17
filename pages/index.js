import { useContext } from "react";
import Head from "next/head";
import MasonryWrap from "../components/masonry/masonry.component";
import PageHeader from "../components/page-header/page-header.component";
import GameList from "../components/game_list/game-list.component";

export default function Home( { data }) {

    return (
		<>
        <Head>
            <title>Highest rated</title>
            <meta name='description' content='Highest rated games'/>
        </Head>
        <PageHeader title="Highest rated" intro="Highest rated games of all time"/>
        <div className="full_container">
          <GameList data={data}/>
        </div>
		</>
    )

}


export async function getServerSideProps() {

    const client_id = process.env.RAWG_API_KEY;

    const res = await fetch(`https://api.rawg.io/api/games?key=${client_id}&ordering=-metacritic&page_size=40`)

    const data = await res.json()
   
    return { props: { data } }
  }