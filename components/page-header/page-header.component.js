import './page-header.css';

const PageHeader = ( { title, intro }) => {

    return ( 
        <>
        <div className='page_header'>
               <h1>{title}</h1>
               <p className="mb-5">{intro}</p>
          </div>
        </>
     );
}
 
export default PageHeader;