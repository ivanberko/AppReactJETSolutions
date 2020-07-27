export const actionsType = {
  COUNTER_GUESS: 'COUNTER_GUESS',
};

export const counter = (num) => ({
  type: actionsType.COUNTER_GUESS,
  payload: num,
});
