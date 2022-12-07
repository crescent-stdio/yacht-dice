import React from "react";
import { useRef } from "react";
import UpperScoreBoard from "./UpperScoreBoard";
import LowerScoreBoard from "./LowerScoreBoard";
import sumScore from "../utils/sumScore";
const ScoreBoard = (props, ref) => {
  // Section 1 / Upper score 채워 넣은 점수를 기록
  const upperScore = useRef({
    ones: -1,
    twos: -1,
    threes: -1,
    fours: -1,
    fives: -1,
    sixes: -1,
  });
  // Section 2 / Lower score 채워 넣은 점수를 기록
  const lowerScore = useRef({
    choice: -1,
    fourOfAKind: -1,
    fullHouse: -1,
    smallStraight: -1,
    largeStraight: -1,
    yacht: -1,
  });
  const { expectedScore } = props;
  const { setIsSubmitted } = props;

  // B. 최종 점수 계산
  const totalScore =
  (sumScore(upperScore.current) >= 63 ? 35 : 0) +
  sumScore(upperScore.current) +
  sumScore(lowerScore.current);

  // C. 초기화
  if (ref.current.reset) {
    upperScore.current = {
      ones: -1,
      twos: -1,
      threes: -1,
      fours: -1,
      fives: -1,
      sixes: -1,
    };
    lowerScore.current = {
      choice: -1,
      fourOfAKind: -1,
      fullHouse: -1,
      smallStraight: -1,
      largeStraight: -1,
      yacht: -1,
    };
  }
  return (
    <div>
      {/* A. 매개변수 전달 */}
      <UpperScoreBoard
        ref={upperScore}
        expectedScore={expectedScore}
        setIsSubmitted={setIsSubmitted}
      />
      <div className="my-2" />
      <LowerScoreBoard
        ref={lowerScore}
        expectedScore={expectedScore}
        setIsSubmitted={setIsSubmitted}
      />
      <div className="mb-2" />
      {/* B. 최종 점수 출력 */}
      <h3 className="totalScore text-lg font-extrabold text-primary">Total: {totalScore}</h3>
    </div>
  );
};
const ForwardedScoreBoard = React.forwardRef(ScoreBoard);
export default ForwardedScoreBoard;
