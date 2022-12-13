import React from "react";
import sumScore from "../utils/sumScore";
import "./board.css";
const UpperScoreBoard = (props, ref) => {
  const { expectedScore } = props;
  const { setIsSubmitted } = props;

  // B. 상태 변경
  const handleOnes = () => {
    if (ref.current.ones !== -1) return;
    ref.current.ones = expectedScore.ones;
    setIsSubmitted(true);
  };
  const handleTwos = () => {
    if (ref.current.twos !== -1) return;
    ref.current.twos = expectedScore.twos;
    setIsSubmitted(true);
  };
  const handleThrees = () => {
    if (ref.current.threes !== -1) return;
    ref.current.threes = expectedScore.threes;
    setIsSubmitted(true);
  };
  const handleFours = () => {
    if (ref.current.fours !== -1) return;
    ref.current.fours = expectedScore.fours;
    setIsSubmitted(true);
  };
  const handleFives = () => {
    if (ref.current.fives !== -1) return;
    ref.current.fives = expectedScore.fives;
    setIsSubmitted(true);
  };
  const handleSixes = () => {
    if (ref.current.sixes !== -1) return;
    ref.current.sixes = expectedScore.sixes;
    setIsSubmitted(true);
  };
  // C. 중간 점수 계산
  const subtotal = sumScore(ref.current);
  return (
    <div>
      <h3 className="text-lg font-bold text-secondary">[Section 1]</h3>
      <table className="table table-fixed table-compact border-separate">
        <thead>
          <tr>
            <th className="w-36 md:w-40 py-1 sm:py-2"></th>
            <th className="py-1 sm:py-2">Earned</th>
            <th className="py-1 sm:py-2">Expected</th>
          </tr>
        </thead>
        <tbody>
          <tr className="score hover">
            {/* A. 점수 선택 */}
            {/* 클릭하면 현재 주사위에 대한 예상 점수가 선택한 점수로 바뀌며 다음 라운드로 진행하게 된다. */}
            <td
              className="text-left z-50 tooltip tooltip-top md:tooltip-left tooltip-info-content w-36 md:w-40 md:cursor-pointer py-1 sm:py-2 before:text-left before:-translate-x-1/4 before:content-[attr(data-tip)]"
              data-tip="1이 하나 이상 | 1의 개수 * 1"
            >
              Ones
            </td>
            {/* A. 점수 출력 */}
            {/* `earned`, 선택한 점수 */}
            <td onClick={handleOnes} className="earned py-1 sm:py-2">
              {ref.current.ones !== -1 ? ref.current.ones : ""}
            </td>
            {/* `expected`, 현재 주사위에 대한 예상 점수 */}
            <td onClick={handleOnes} className="expected py-1 sm:py-2">
              {ref.current.ones !== -1 ? "-" : expectedScore.ones}
            </td>
          </tr>
          <tr className="score hover">
            <td
              className="w-36 md:w-40 z-50 tooltip tooltip-top md:tooltip-left text-left py-1 sm:py-2 before:text-left before:-translate-x-1/4 before:content-[attr(data-tip)]"
              data-tip="2가 하나 이상 | 2의 개수 * 2"
            >
              Twos
            </td>
            <td onClick={handleTwos} className="earned py-1 sm:py-2">
              {ref.current.twos !== -1 ? ref.current.twos : ""}
            </td>
            <td onClick={handleTwos} className="expected py-1 sm:py-2">
              {ref.current.twos !== -1 ? "-" : expectedScore.twos}
            </td>
          </tr>
          <tr className="score hover">
            <td
              className="w-36 md:w-40 text-left z-50 tooltip tooltip-top md:tooltip-left tooltip-info-content py-1 sm:py-2 before:text-left before:-translate-x-1/4 before:content-[attr(data-tip)]"
              data-tip="3이 하나 이상	| 3의 개수 * 3"
            >
              Threes
            </td>
            <td onClick={handleThrees} className="earned py-1 sm:py-2">
              {ref.current.threes !== -1 ? ref.current.threes : ""}
            </td>
            <td onClick={handleThrees} className="expected py-1 sm:py-2">
              {ref.current.threes !== -1 ? "-" : expectedScore.threes}
            </td>
          </tr>
          <tr className="score hover">
            <td
              className="w-36 md:w-40 text-left z-50 tooltip tooltip-top md:tooltip-left tooltip-info-content py-1 sm:py-2 before:text-left before:-translate-x-1/4 before:content-[attr(data-tip)]"
              data-tip="4가 하나 이상	| 4의 개수 * 4"
            >
              Fours
            </td>
            <td onClick={handleFours} className="earned py-1 sm:py-2">
              {ref.current.fours !== -1 ? ref.current.fours : ""}
            </td>
            <td onClick={handleFours} className="expected  py-1 sm:py-2">
              {ref.current.fours !== -1 ? "-" : expectedScore.fours}
            </td>
          </tr>
          <tr className="score hover">
            <td
              className="w-36 md:w-40 text-left z-50 tooltip tooltip-top md:tooltip-left tooltip-info-content py-1 sm:py-2 before:text-left before:-translate-x-1/4 before:content-[attr(data-tip)]"
              data-tip="5가 하나 이상	| 5의 개수 * 5"
            >
              Fives
            </td>
            <td onClick={handleFives} className="earned py-1 sm:py-2">
              {ref.current.fives !== -1 ? ref.current.fives : ""}
            </td>
            <td onClick={handleFives} className="expected  py-1 sm:py-2">
              {ref.current.fives !== -1 ? "-" : expectedScore.fives}
            </td>
          </tr>
          <tr className="score hover">
            <td
              className="w-36 md:w-40 text-left z-50 tooltip tooltip-top md:tooltip-left tooltip-info-content py-1 sm:py-2 before:text-left before:-translate-x-1/4 before:content-[attr(data-tip)]"
              data-tip="6이 하나 이상	| 6의 개수 * 6"
            >
              Sixes
            </td>
            <td onClick={handleSixes} className="earned py-1 sm:py-2">
              {ref.current.sixes !== -1 ? ref.current.sixes : ""}
            </td>
            <td onClick={handleSixes} className="expected py-1 sm:py-2">
              {ref.current.sixes !== -1 ? "-" : expectedScore.sixes}
            </td>
          </tr>
          {/* C. 중간 점수 출력 */}
          <tr className="subtotal bg-primary-content font-extrabold">
            <td
              className="w-36 md:w-40 text-left z-50 tooltip tooltip-top md:tooltip-left tooltip-info-content py-1 sm:py-2 before:text-left before:-translate-x-1/4 before:content-[attr(data-tip)]"
              data-tip="Section 1의 점수 합"
            >
              Subtotal
            </td>
            <td className="font-bold py-1 sm:py-2" colSpan={2}>
              {subtotal}
            </td>
          </tr>
          <tr className="bonus font-extrabold">
            <td
              className="w-36 md:w-40 text-left z-50 tooltip tooltip-top md:tooltip-left tooltip-info-content py-1 sm:py-2 before:text-left before:-translate-x-1/4 before:content-[attr(data-tip)]"
              data-tip="Section 1의 점수가 63점 이상이면 35점 보너스"
            >
              Bonus
            </td>
            <td className="font-bold py-1 sm:py-2" colSpan={2}>
              {subtotal >= 63 ? "+35" : "0"}
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  );
};
const ForwardedUpperScoreBoard = React.forwardRef(UpperScoreBoard);
export default ForwardedUpperScoreBoard;
