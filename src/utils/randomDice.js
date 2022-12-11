const randomInteger = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}
const randomDice = () => {
  return randomInteger(1, 6);
}
export default randomDice;