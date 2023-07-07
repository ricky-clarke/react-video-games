export const INITIAL_STATE = {
  contrastButton : 'dark',
  displayButton : 'grid',
  menuOpen : false
};

// update state return new version of state
export const GlobalReducer = (state, action) => {
    // state (current state) /  action ()

    switch (action.type) {
          case "CONTRAST":
            return {
              ...state,
              contrastButton: action.payload
            };
            case "DISPLAY":
              return {
                ...state,
                displayButton: action.payload
              };
            case "MENU":
                return {
                  ...state,
                  menuOpen: action.payload
                };
        default:
          return state;
      }

}