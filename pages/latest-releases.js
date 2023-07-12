import Head from "next/head";
import PageHeader from "../components/page-header/page-header.component";
import LatestList from "../components/latest_list/latest_list.component";

export default function LastestReleases() {

    return ( 
        <>
			<Head>
                <title>Latest releases</title>
                <meta name='description' content='Games to be released within the last month'/>
            </Head>
			<PageHeader title="Latest releases" intro="Released within the last 30 days" />
            <div className="full_container">
                <LatestList />
            </div>
        </>
     );

}