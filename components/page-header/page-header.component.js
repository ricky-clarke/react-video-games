import './page-header.css';
import ToggleDisplay from '../toggle-display/toggle-display.component';

const PageHeader = ( { title, intro }) => {

    return ( 
        <>
        <div className='page_header full_container'>
               <h1>{title}</h1>
               { intro && <p>{intro}</p> }
               <div className='md:hidden mt-5'><ToggleDisplay /></div>
        </div>
        </>
     );
}
 
export default PageHeader;