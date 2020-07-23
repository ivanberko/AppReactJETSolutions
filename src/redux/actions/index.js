export const actionsType = {
  ADD_COLOR: 'ADD_COLOR',
  COUNTER_GUESS: 'COUNTER_GUESS',
};

export const openColor = (color) => ({
  type: actionsType.ADD_COLOR,
  payload: color,
});

export const counter = (num) => ({
  type: actionsType.ADD_COLOR,
  payload: num,
});
