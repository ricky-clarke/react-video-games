import './page-header.css';

const PageHeader = ( { title, intro }) => {

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