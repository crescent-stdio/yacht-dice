const sumScore = (score) => {
  let sum = 0;
  for (const key in score) {
    if (score[key] >= 0) sum += score[key];
    else sum += 0;
  }
  return sum;
};
export default sumScore;
