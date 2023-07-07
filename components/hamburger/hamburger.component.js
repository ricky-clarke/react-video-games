import { useContext } from "react";
import globalContext from "../../context/global-context";

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

    }

    return ( 
            <button className='xl:hidden hamburger' onClick={hamburgerHandler}>
                {state.menuOpen == false ? 'Menu' : 'Close' }
            </button>
     );
}
 
export default Hamburger;