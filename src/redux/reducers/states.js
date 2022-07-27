const initstate = {
  addTaskDisplay: false,
};

const states = (state = initstate, action) => {
  if (action.type === "SHOW") {
    return { ...state, addTaskDisplay: true };
  } else if (action.type === "HIDE") {
    return { ...state, addTaskDisplay: false };
  } else {
    return state;
  }
};

export default states;
