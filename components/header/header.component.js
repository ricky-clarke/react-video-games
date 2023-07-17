'use client';
import { useRouter } from 'next/router';
//import { useRouter } from 'next/navigation';
import Link from 'next/link';
import SearchForm from '../search-form/search-form.component';
import ToggleContrast from '../toggle-contrast/toggle-contrast.component';
import ToggleDisplay from '../toggle-display/toggle-display.component';
import Hamburger from '../hamburger/hamburger.component';
import './header.css';

const Header = () => {

    const router = useRouter();

    return ( 
        <>
            <header className='page__container flex items-center justify-between gap-4 full_container'>
                <div className='flex gap-5 items-center'>
                    <nav className='navigation mr-8'>
                        <Link href="/">Home</Link>
                        <Link href="/latest-releases/">Latest</Link>
                        <Link href="/coming-soon/">Coming soon</Link>
                        <div className="md:hidden">
                        { router.pathname.includes('game') ? '' : <ToggleDisplay /> }
                        <ToggleContrast />
                        </div>
                    </nav>
                    <SearchForm />
                    </div>
                    <div className='flex gap-5 items-center'>
                       <div className='hidden md:flex gap-5'>
                            { router.pathname.includes('game') ? '' : <ToggleDisplay /> }
                            <ToggleContrast />
                        </div>
                        <Hamburger />
                    </div>
                  
            </header>
        </>
     );
}
 
export default Header;