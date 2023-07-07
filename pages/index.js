import Head from "next/head";
import PageHeader from "../components/page-header/page-header.component";
import HighestRatedList from "../components/highest_rated_list/highest_rated_list.component";

export default function Home() {

    return (
		<>
        <Head>
            <title>Highest rated</title>
            <meta name='description' content='Highest rated games'/>
        </Head>
        <PageHeader title="Highest rated" intro="Highest rated games of all time"/>
       <HighestRatedList />
		</>
    )

}