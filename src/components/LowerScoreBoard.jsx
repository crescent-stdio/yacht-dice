import React from "react";
import "./board.css";

const LowerScoreBoard = (props, ref) => {
  const { expectedScore } = props;
  const { setIsSubmitted } = props;
  // B. 상태 변경
  const handleChoice = () => {
    if (ref.current.choice !== -1) return;
    ref.current.choice = expectedScore.choice;
    setIsSubmitted(true);
  };
  const handleFourOfAKind = () => {
    if (ref.current.fourOfAKind !== -1) return;
    ref.current.fourOfAKind = expectedScore.fourOfAKind;
    setIsSubmitted(true);
  };
  const handleFullHouse = () => {
    if (ref.current.fullHouse !== -1) return;
    ref.current.fullHouse = expectedScore.fullHouse;
    setIsSubmitted(true);
  };
  const handleSmallStraight = () => {
    if (ref.current.smallStraight !== -1) return;
    ref.current.smallStraight = expectedScore.smallStraight;
    setIsSubmitted(true);
  };
  const handleLargeStraight = () => {
    if (ref.current.largeStraight !== -1) return;
    ref.current.largeStraight = expectedScore.largeStraight;
    setIsSubmitted(true);
  };
  const handleYacht = () => {
    if (ref.current.yacht !== -1) return;
    ref.current.yacht = expectedScore.yacht;
    setIsSubmitted(true);
  };
  return (
    <div>
      <h3 className="text-lg font-bold text-secondary">[Section 2]</h3>
      <table className="table table-fixed table-compact w-auto border-collapse">
        <thead>
          <tr>
            <th className="w-36 md:w-40 py-1 sm:py-2"></th>
            <th className="py-1 sm:py-2">Earned</th>
            <th className="py-1 sm:py-2">Expected</th>
          </tr>
        </thead>
        <tbody>
          <tr className="table-row score hover ">
            {/* A. 점수 선택 */}
            {/* 클릭하면 현재 주사위에 대한 예상 점수가 선택한 점수로 바뀌며 다음 라운드로 진행하게 된다. */}
            <td
              className="z-50 tooltip tooltip-top md:tooltip-left text-left w-36 md:w-40 py-1 sm:py-2 before:text-left before:-translate-x-1/4 before:content-[attr(data-tip)]"
              data-tip="주사위 5개의 합"
            >
              Choice
            </td>
            {/* A. 점수 출력 */}
            {/* `earned`, 선택한 점수 */}
            <td onClick={handleChoice} className="earned py-1 sm:py-2">
              {ref.current.choice !== -1 ? ref.current.choice : ""}
            </td>
            {/* `expected`, 현재 주사위에 대한 예상 점수 */}
            <td onClick={handleChoice} className="expected py-1 sm:py-2">
              {ref.current.choice !== -1 ? "-" : expectedScore.choice}
            </td>
          </tr>
          <tr className="score hover">
            <td
              className="w-36 md:w-40 z-50 tooltip tooltip-top md:tooltip-left text-left py-1 sm:py-2 before:text-left before:-translate-x-1/4 before:content-[attr(data-tip)]"
              data-tip="같은 눈을 가진 주사위가 4개 이상	| 주사위 5개의 합"
            >
              4 of a Kind
            </td>
            <td onClick={handleFourOfAKind} className="earned py-1 sm:py-2">
              {ref.current.fourOfAKind !== -1 ? ref.current.fourOfAKind : ""}
            </td>
            <td onClick={handleFourOfAKind} className="expected py-1 sm:py-2">
              {ref.current.fourOfAKind !== -1 ? "-" : expectedScore.fourOfAKind}
            </td>
          </tr>
          <tr className="score hover">
            <td
              className="w-36 md:w-40 z-50 tooltip tooltip-top md:tooltip-left text-left whitespace-pre-line py-1 sm:py-2 before:text-left before:-translate-x-1/4 before:content-[attr(data-tip)]"
              data-tip="같은 눈을 가진 주사위가 3개 그리고 또 다른 같은 눈을 가진 주사위가 2개.
              같은 눈을 가진 주사위가 5개인 경우(Yacht)에도 해당 
              | 주사위 5개의 합"
            >
              Full House
            </td>
            <td onClick={handleFullHouse} className="earned py-1 sm:py-2">
              {ref.current.fullHouse !== -1 ? ref.current.fullHouse : ""}
            </td>
            <td onClick={handleFullHouse} className="expected py-1 sm:py-2">
              {ref.current.fullHouse !== -1 ? "-" : expectedScore.fullHouse}
            </td>
          </tr>
          <tr className="score hover">
            <td
              className="w-36 md:w-40 z-50 tooltip tooltip-top md:tooltip-left text-left py-1 sm:py-2 before:text-left before:-translate-x-1/4 before:content-[attr(data-tip)]"
              data-tip="주사위 4개 이상이 연속된 숫자 | 15점"
            >
              Small Straight
            </td>
            <td onClick={handleSmallStraight} className="earned py-1 sm:py-2">
              {ref.current.smallStraight !== -1
                ? ref.current.smallStraight
                : ""}
            </td>
            <td onClick={handleSmallStraight} className="expected py-1 sm:py-2">
              {ref.current.smallStraight !== -1
                ? "-"
                : expectedScore.smallStraight}
            </td>
          </tr>
          <tr className="score hover">
            <td
              className="w-36 md:w-40 z-50 tooltip tooltip-top md:tooltip-left text-left py-1 sm:py-2 before:text-left before:-translate-x-1/4 before:content-[attr(data-tip)]"
              data-tip="주사위 5개가 연속된 숫자 | 30점"
            >
              Large Straight
            </td>
            <td onClick={handleLargeStraight} className="earned py-1 sm:py-2">
              {ref.current.largeStraight !== -1
                ? ref.current.largeStraight
                : ""}
            </td>
            <td onClick={handleLargeStraight} className="expected py-1 sm:py-2">
              {ref.current.largeStraight !== -1
                ? "-"
                : expectedScore.largeStraight}
            </td>
          </tr>
          <tr className="score hover">
            <td
              className="w-36 md:w-40 z-50 tooltip tooltip-top md:tooltip-left text-left py-1 sm:py-2 before:text-left before:-translate-x-1/4 before:content-[attr(data-tip)]"
              data-tip="같은 눈을 가진 주사위가 5개 | 50점"
            >
              Yacht
            </td>
            <td onClick={handleYacht} className="earned py-1 sm:py-2">
              {ref.current.yacht !== -1 ? ref.current.yacht : ""}
            </td>
            <td onClick={handleYacht} className="expected py-1 sm:py-2">
              {ref.current.yacht !== -1 ? "-" : expectedScore.yacht}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
const ForwardedLowerScoreBoard = React.forwardRef(LowerScoreBoard);
export default ForwardedLowerScoreBoard;
