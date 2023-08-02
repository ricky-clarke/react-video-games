import { useContext } from "react";
import globalContext from "../../context/global-context";
import './hamburger.css';

const Hamburger = () => {

    const { state, dispatch } = useContext(globalContext);

    const hamburgerHandler = () => {

        if(state.menuOpen === false) {
            dispatch({type:"MENU", payload: true });
            document.body.classList.add('menu_open');
        }
        else {
            dispatch({type:"MENU", payload: false });
            document.body.classList.remove('menu_open');
        }

        dispatch({type:"SEARCH", payload: false });
        document.body.classList.remove('search_open');

    }

    return ( 
            // <button className='xl:hidden hamburger' onClick={hamburgerHandler}>
            //     {state.menuOpen == false ? 'Menu' : 'Close' }
            // </button>

                    <button class={`xl:hidden hamburger hamburger--slider ${state.menuOpen == true && 'is-active'}`}type="button" onClick={hamburgerHandler}>
                        <span class="hamburger-box">
                        <span class="hamburger-inner"></span>
                        </span>
                    </button>
     );
}
 
export default Hamburger;