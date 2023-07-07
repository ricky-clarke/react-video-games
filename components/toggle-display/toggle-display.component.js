'use client';
import {  useContext } from 'react';
import { globalContext } from '../../context/global-context';
import '../toggle-contrast/toggle-contrast.css';

const ToggleDisplay= () => {

   const { state, dispatch } = useContext(globalContext);

    const toggleRowHandler = (event) => {
        if(state.displayButton === 'grid') {
            dispatch({type:"DISPLAY", payload: 'row' });
            document.body.classList.add('display_row');
        }
    }
   
    const toggleGridHandler = (event) => {
        if(state.displayButton === 'row') {
            dispatch({type:"DISPLAY", payload: 'grid' });
            document.body.classList.remove('display_row');
        }
    }

    return ( 
        <>
            <div className='toggle_buttons flex gap-4'>
              <button
              onClick={toggleGridHandler}
              className={`toggle_button ${state.displayButton === 'grid' ? 'toggle_button--active' : ''}`}>Grid</button>

              <button
              onClick={toggleRowHandler}
              className={`toggle_button ${state.displayButton === 'row' ? 'toggle_button--active' : ''}`}>Row</button>
            </div>
        </>
     );
}
 
export default ToggleDisplay;