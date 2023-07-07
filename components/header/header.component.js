'use client';
// import { useRouter } from 'next/router';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import SearchForm from '../search-form/search-form.component';
import ToggleContrast from '../toggle-contrast/toggle-contrast.component';
import ToggleDisplay from '../toggle-display/toggle-display.component';
import Hamburger from '../hamburger/hamburger.component';
import './header.css';

const Header = () => {

    const router = useRouter();

 //   const on_game_page = router.pathname.includes('game');

    return ( 
        <>
            <header className='page__container flex items-center justify-between gap-4'>
                <div className='flex gap-5 items-center'>
                    <nav className='navigation mr-8'>
                        <Link href="/">Home</Link>
                        <Link href="/latest-releases">Latest releases</Link>
                    </nav>
                    <SearchForm />
                    </div>
                    <div className='flex gap-5 items-center'>
                       {/* { on_game_page ? '' : <ToggleDisplay /> } */}
                       <ToggleDisplay />
                        <ToggleContrast />
                        <Hamburger />
                    </div>
                  
            </header>
        </>
     );
}
 
export default Header;