'use client';
import { useContext } from 'react';
import globalContext from '../../context/global-context';
import { useRouter } from 'next/router';
import Link from 'next/link';
import SearchForm from '../search-form/search-form.component';
import ToggleContrast from '../toggle-contrast/toggle-contrast.component';
import ToggleDisplay from '../toggle-display/toggle-display.component';
import Hamburger from '../hamburger/hamburger.component';
import SearchIcon from '../svgs/search-icon';
import HomeIcon from '../svgs/home-icon';
import './header.css';

const Header = () => {

    const router = useRouter();
    const { state, dispatch } = useContext(globalContext);

    const CloseNav = () => {

        dispatch({type:"MENU", payload: false });

        setTimeout(() => {
            document.body.classList.remove('menu_open');
        }, 500)

    }

    const MobileSearch = () => {

        if(state.searchOpen === false) {
            dispatch({type:"SEARCH", payload: true });
             document.body.classList.add('search_open');
        }
        else {
            dispatch({type:"SEARCH", payload: false });
            document.body.classList.remove('search_open');
        }

        dispatch({type:"MENU", payload: false });
        document.body.classList.remove('menu_open');

    }

    return ( 
        <>
          
            <header className='page__container flex items-center justify-between gap-4 full_container'>
                <div className='flex gap-5 items-center'>
                    <Link className='xl:hidden mr-2' href="/" aria-label="Home page"><HomeIcon/></Link>
                    <nav className='navigation mr-8'>
                        <Link href="/" className="hidden xl:block" onClick={CloseNav} aria-label="Home page"><HomeIcon /></Link>
                        <Link href="/" className="xl:hidden" onClick={CloseNav} aria-label="Home page">Home</Link>
                        <Link href="/latest-releases/" onClick={CloseNav}>Latest</Link>
                        <Link href="/coming-soon/" onClick={CloseNav}>Coming soon</Link>
                    </nav>
                    <SearchForm />
                    </div>
                    <div className='flex gap-5 items-center'>
                       <div className='inline-flex gap-5'>
                            { router.pathname.includes('game') ? '' : <div className='hidden md:block'><ToggleDisplay /></div> }
                            <ToggleContrast />
                        </div>
                        <button className="mobile_search xl:hidden" onClick={MobileSearch} title="Search">
                            {state.searchOpen === false ? <SearchIcon/> : 'X' }</button>
                        <Hamburger />
                    </div>
                  
            </header>
        </>
     );
}
 
export default Header;