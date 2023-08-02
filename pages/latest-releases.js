import Head from "next/head";
import PageHeader from "../components/page-header/page-header.component";
import GameList from "../components/game_list/game-list.component";
import ToggleDisplay from "../components/toggle-display/toggle-display.component";

export async function getServerSideProps() {

    const client_id = process.env.RAWG_API_KEY;
  
    const currentDate = new Date();
    const todays_date = currentDate.toJSON().slice(0, 10);
  
    const oneMonthAgo = new Date(currentDate.getFullYear(), currentDate.getMonth() - 1, currentDate.getDate());
    const oneMonthAgoFormatted = oneMonthAgo.toJSON().slice(0, 10);
  
    const res = await fetch(`https://api.rawg.io/api/games?key=${client_id}&dates=${oneMonthAgoFormatted},${todays_date}&parent_platforms=2,3,7&ordering=-released&page_size=50`)
  
    const data = await res.json()
   
    return { props: { data } }
  }

export default function LastestReleases({ data }) {

    return ( 
        <>
			<Head>
                <title>Latest releases</title>
                <meta name='description' content='Games to be released within the last month'/>
            </Head>
			<PageHeader title="Latest releases" intro="Released within the last 30 days" />
            <div className="full_container">
                <div className='md:hidden mb-7'><ToggleDisplay /></div>
                <GameList data={data}/>
            </div>
        </>
     );

}