export const calculatedActionTypes = {
    ADD: "ADD",
    SUBTRACT: "SUBTRACT",
    DIVIDE: "DIVIDE",
    MULTIPLY: "MULTIPLY",
  };
  
  const initialState = {
    result: 0,
  };
  
 export const calculateReducer = (state = initialState, action) => {
    switch (action.type) {
      case calculatedActionTypes.ADD:
        return {
          ...state,
          result: state.result + action.payload,
        };
      case calculatedActionTypes.SUBTRACT:
        return {
          ...state,
          result: state.result - action.payload,
        };
      case calculatedActionTypes.DIVIDE:
        return {
          ...state,
          result: state.result / action.payload,
        };
      case calculatedActionTypes.MULTIPLY:
        return {
          ...state,
          result: state.result * action.payload,
        };
      default:
        return state;
    }
  };