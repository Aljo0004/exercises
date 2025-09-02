export function getRandomNum(max) {
  return Math.floor(Math.random() * max);
}
const computerNum = getRandomNum(100);
console.log(computerNum);
