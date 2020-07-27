import { combineReducers } from 'redux';
import { actionsType } from '../actions';

const implementation = (state = 0, { type, payload }) => {
  switch (type) {
    case actionsType.COUNTER_GUESS:
      return payload;

    default:
      return state;
  }
};

export default combineReducers({
  implementation,
});
