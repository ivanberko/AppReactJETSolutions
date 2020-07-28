const colors = [
  { color: 'red', isOpen: false, isCompleted: false },
  { color: 'red', isOpen: false, isCompleted: false },
  { color: 'black', isOpen: false, isCompleted: false },
  { color: 'black', isOpen: false, isCompleted: false },
  { color: 'blue', isOpen: false, isCompleted: false },
  { color: 'blue', isOpen: false, isCompleted: false },
  { color: 'purple', isOpen: false, isCompleted: false },
  { color: 'purple', isOpen: false, isCompleted: false },
  { color: 'grey', isOpen: false, isCompleted: false },
  { color: 'grey', isOpen: false, isCompleted: false },
  { color: 'yellow', isOpen: false, isCompleted: false },
  { color: 'yellow', isOpen: false, isCompleted: false },
  { color: 'pink', isOpen: false, isCompleted: false },
  { color: 'pink', isOpen: false, isCompleted: false },
  { color: 'orange', isOpen: false, isCompleted: false },
  { color: 'orange', isOpen: false, isCompleted: false },
];

const compareRandom = (a, b) => {
  return Math.random() - 0.5;
};

const randomColors = () => colors.sort(compareRandom);
export default randomColors;
