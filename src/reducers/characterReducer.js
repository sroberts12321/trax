import * as actions from "../actions/types";

const initialState = {
  characters: []
};

export default function(state = initialState, action) {
  switch (action.type) {
    case actions.GET_CHARACTERS:
      return {
        ...state,
        characters: action.payload
      };
    default:
      return state;
  }
}
