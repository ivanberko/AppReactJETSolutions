import { combineReducers } from 'redux';
import { actionsType } from '../actions';

const firstColor = (state = null, { type, payload }) => {
  switch (type) {
    case actionsType.ADD_COLOR:
      return payload;

    default:
      return state;
  }
};

const secondColor = (state = null, { type, payload }) => {
  switch (type) {
    case actionsType.ADD_COLOR:
      return payload;

    default:
      return state;
  }
};

const implementation = (state = 0, { type, payload }) => {
  switch (type) {
    case actionsType.COUNTER_GUESS:
      return payload;

    default:
      return state;
  }
};

export default combineReducers({
  firstColor,
  secondColor,
  implementation,
});
