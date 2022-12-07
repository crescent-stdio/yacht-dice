const calculateScore = (dices) => {
  const score = {};
  const diceCount = [0, 0, 0, 0, 0, 0, 0];
  dices.forEach((dice) => {
    diceCount[dice] += 1;
  });

  // Upper Section, section 1
  score.ones = dices.filter((dice) => dice === 1).length;
  score.twos = dices.filter((dice) => dice === 2).length * 2;
  score.threes = dices.filter((dice) => dice === 3).length * 3;
  score.fours = dices.filter((dice) => dice === 4).length * 4;
  score.fives = dices.filter((dice) => dice === 5).length * 5;
  score.sixes = dices.filter((dice) => dice === 6).length * 6;

  // Lower Section, section 2
  // Choice
  score.choice = dices.reduce((a, b) => a + b, 0);
  // Four of a kind
  const isFourOfAKind = diceCount.some((count) => count >= 4);
  score.fourOfAKind = isFourOfAKind ? dices.reduce((a, b) => a + b, 0) : 0;
  // Full house
  const isFullHouse =
    (diceCount.some((count) => count === 2) &&
      diceCount.some((count) => count === 3)) ||
    diceCount.some((count) => count === 5);
  score.fullHouse = isFullHouse ? dices.reduce((a, b) => a + b, 0) : 0;
  // Small straight
  const isSmallStraight =
    (diceCount[1] && diceCount[2] && diceCount[3] && diceCount[4]) ||
    (diceCount[2] && diceCount[3] && diceCount[4] && diceCount[5]) ||
    (diceCount[3] && diceCount[4] && diceCount[5] && diceCount[6]);
  score.smallStraight = isSmallStraight ? 15 : 0;
  // Large straight
  const isLargeStraight =
    (diceCount[1] &&
      diceCount[2] &&
      diceCount[3] &&
      diceCount[4] &&
      diceCount[5]) ||
    (diceCount[2] &&
      diceCount[3] &&
      diceCount[4] &&
      diceCount[5] &&
      diceCount[6]);
  score.largeStraight = isLargeStraight ? 30 : 0;
  // Yacht
  const isYacht = diceCount.some((count) => count === 5);
  score.yacht = isYacht ? 50 : 0;

  // console.log(score);
  return score;
};
export default calculateScore;
