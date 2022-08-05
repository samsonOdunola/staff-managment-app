const initstate = {
  addTaskDisplay: false,
  showProfileModal: false,
};

const states = (state = initstate, action) => {
  if (action.type === "SHOW") {
    return { ...state, addTaskDisplay: true, showProfileModal: true };
  } else if (action.type === "HIDE") {
    return { ...state, addTaskDisplay: false, showProfileModal: false };
  } else {
    return state;
  }
};

export default states;
