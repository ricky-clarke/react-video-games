import { useRouter } from 'next/router';
import './page-header.css';

const PageHeader = ( { title, intro }) => {

    const router = useRouter();

    return ( 
        <>
        <div className='page_header full_container'>
               <h1>{title}</h1>
               { intro && <p>{intro}</p> }
        </div>
        </>
     );
}
 
export default PageHeader;