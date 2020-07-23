const colors = [
  '#283c86',
  '#283c86',
  '#45a247',
  '#45a247',
  '#FFF200',
  '#FFF200',
  '#7303c0',
  '#7303c0',
  '#fdeff9',
  '#fdeff9',
  '#b21f1f',
  '#b21f1f',
  '#EECDA3',
  '#EECDA3',
  '#EF629F',
  '#EF629F',
];

const compareRandom = (a, b) => {
  return Math.random() - 0.5;
};

const randomColors = colors.sort(compareRandom);
export default randomColors;
