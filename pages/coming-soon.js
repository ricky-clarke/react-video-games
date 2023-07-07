import Head from "next/head";
import PageHeader from "../components/page-header/page-header.component";
import ComingSoonList from "../components/coming_soon_list/coming_soon_list.component";

export default function Upcoming() {

    return ( 
        <>
            <Head>
                <title>Coming soon</title>
                <meta name='description' content='Games to be released within the next month'/>
            </Head>
			<PageHeader title="Coming soon" intro="Up and coming releases in the next month" />
			<ComingSoonList />
        </>
     );

}