const colors = [
  { color: '#283c86', isOpen: false, isCompleted: false },
  { color: '#283c86', isOpen: false, isCompleted: false },
  { color: '#45a247', isOpen: false, isCompleted: false },
  { color: '#45a247', isOpen: false, isCompleted: false },
  { color: '#FFF200', isOpen: false, isCompleted: false },
  { color: '#FFF200', isOpen: false, isCompleted: false },
  { color: '#7303c0', isOpen: false, isCompleted: false },
  { color: '#7303c0', isOpen: false, isCompleted: false },
  { color: '#24243e', isOpen: false, isCompleted: false },
  { color: '#24243e', isOpen: false, isCompleted: false },
  { color: '#b21f1f', isOpen: false, isCompleted: false },
  { color: '#b21f1f', isOpen: false, isCompleted: false },
  { color: '#EECDA3', isOpen: false, isCompleted: false },
  { color: '#EECDA3', isOpen: false, isCompleted: false },
  { color: '#EF629F', isOpen: false, isCompleted: false },
  { color: '#EF629F', isOpen: false, isCompleted: false },
];

const compareRandom = (a, b) => {
  return Math.random() - 0.5;
};

const randomColors = colors.sort(compareRandom);
export default randomColors;
