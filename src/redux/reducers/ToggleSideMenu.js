export const initialState = false;

const ToggleSideMenu = (state = initialState, action) => {
  switch (action.type) {
    case "toggle":
      return !state;
    default:
      return state;
  }
};

export default ToggleSideMenu;
