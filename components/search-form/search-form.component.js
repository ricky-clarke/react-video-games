import { useState } from 'react';
import SearchIcon from '../svgs/search-icon';
import './search-form.css';

const SearchForm = () => {

    const [name, setName] = useState("");

    const onSubmitHandler = (event) => {
        event.preventDefault();
        window.localStorage.setItem('search_game', name); // Set search term as local storage        
        window.location.href = "/search/"; // Redirect to search page
    }

    return ( 
        <>
          <form className='search_form' action='' onSubmit={onSubmitHandler} >
                <label htmlFor="search_games" hidden>Search games</label>
                <input
                 type="text"
                 id="search_games"
                 name="search_games"
                 placeholder="Search games"
                 value={name}
                onChange={(e) => setName(e.target.value)}
                 />
                <button type="submit"><SearchIcon /></button>
            </form>
        </>
     );
}
 
export default SearchForm;