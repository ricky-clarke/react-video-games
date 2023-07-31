import {  useContext } from 'react';
import { globalContext } from '../../context/global-context';

const ToggleContrast = () => {

   const { state, dispatch } = useContext(globalContext);

    const toggleLightHandler = (event) => {
        if(state.contrastButton === 'dark') {
            dispatch({type:"CONTRAST", payload: 'light' });
            document.body.classList.add('theme-light');
        }
    }
   
    const toggleDarkHandler = (event) => {
        if(state.contrastButton === 'light') {
            dispatch({type:"CONTRAST", payload: 'dark' });
            document.body.classList.remove('theme-light');
        }
    }

    return ( 
        <>
            <div className='toggle_buttons inline-flex gap-4'>
              <button
              onClick={toggleLightHandler}
              className={`toggle_button ${state.contrastButton === 'light' ? 'button--active' : ''}`}>Light</button>
              <button
              onClick={toggleDarkHandler}
              className={`toggle_button ${state.contrastButton === 'dark' ? 'button--active' : ''}`}>Dark</button>
            </div>
        </>
     );
}
 
export default ToggleContrast;