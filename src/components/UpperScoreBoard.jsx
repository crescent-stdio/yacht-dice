import React from "react";
import sumScore from "../utils/sumScore";
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
      <table className="table table-fixed table-compact">
        <thead>
          <tr className="dark:[&>*]:border-[#e5e7eb]">
            <th className="border w-36 md:w-40 py-1 sm:py-2"></th>
            <th className="border-y py-1 sm:py-2">Earned</th>
            <th className="border py-1 sm:py-2">Expected</th>
          </tr>
        </thead>
        <tbody>
          <tr onClick={handleOnes} className="score hover dark:[&>*]:border-[#e5e7eb]">
            {/* A. 점수 선택 */}
            {/* 클릭하면 현재 주사위에 대한 예상 점수가 선택한 점수로 바뀌며 다음 라운드로 진행하게 된다. */}
            <th
              className="border-x text-left tooltip tooltip-top md:tooltip-left tooltip-info-content w-36 md:w-40 cursor-pointer py-1 sm:py-2"
              data-tip="1이 하나 이상 | 1의 개수 * 1"
            >
              Ones
            </th>
            {/* A. 점수 출력 */}
            {/* `earned`, 선택한 점수 */}
            <td className="earned py-1 sm:py-2">
              {ref.current.ones !== -1 ? ref.current.ones : ""}
            </td>
            {/* `expected`, 현재 주사위에 대한 예상 점수 */}
            <td className="expected border-x py-1 sm:py-2">
              {expectedScore.ones}
            </td>
          </tr>
          <tr onClick={handleTwos} className="score hover dark:[&>*]:border-[#e5e7eb]">
            <th
              className="border-x w-36 md:w-40 tooltip tooltip-top md:tooltip-left text-left py-1 sm:py-2"
              data-tip="2가 하나 이상 | 2의 개수 * 2"
            >
              Twos
            </th>
            <td className="earned py-1 sm:py-2">
              {ref.current.twos !== -1 ? ref.current.twos : ""}
            </td>
            <td className="expected border-x py-1 sm:py-2">
              {expectedScore.twos}
            </td>
          </tr>
          <tr onClick={handleThrees} className="score hover dark:[&>*]:border-[#e5e7eb]">
            <th
              className="border-x w-36 md:w-40 text-left tooltip tooltip-top md:tooltip-left tooltip-info-content"
              data-tip="3이 하나 이상	| 3의 개수 * 3"
            >
              Threes
            </th>
            <td className="earned py-1 sm:py-2">
              {ref.current.threes !== -1 ? ref.current.threes : ""}
            </td>
            <td className="expected border-x py-1 sm:py-2">
              {expectedScore.threes}
            </td>
          </tr>
          <tr onClick={handleFours} className="score hover dark:[&>*]:border-[#e5e7eb]">
            <th
              className="border-x w-36 md:w-40 text-left tooltip tooltip-top md:tooltip-left tooltip-info-content py-1 sm:py-2"
              data-tip="4가 하나 이상	| 4의 개수 * 4"
            >
              Fours
            </th>
            <td className="earned py-1 sm:py-2">
              {ref.current.fours !== -1 ? ref.current.fours : ""}
            </td>
            <td className="expected border-x py-1 sm:py-2">
              {expectedScore.fours}
            </td>
          </tr>
          <tr onClick={handleFives} className="score hover dark:[&>*]:border-[#e5e7eb]">
            <th
              className="border-x w-36 md:w-40 text-left tooltip tooltip-top md:tooltip-left tooltip-info-content py-1 sm:py-2"
              data-tip="5가 하나 이상	| 5의 개수 * 5"
            >
              Fives
            </th>
            <td className="earned py-1 sm:py-2">
              {ref.current.fives !== -1 ? ref.current.fives : ""}
            </td>
            <td className="expected border-x py-1 sm:py-2">
              {expectedScore.fives}
            </td>
          </tr>
          <tr onClick={handleSixes} className="score hover dark:[&>*]:border-[#e5e7eb]">
            <th
              className="border-x w-36 md:w-40 text-left tooltip tooltip-top md:tooltip-left tooltip-info-content"
              data-tip="6이 하나 이상	| 6의 개수 * 6"
            >
              Sixes
            </th>
            <td className="earned py-1 sm:py-2">
              {ref.current.sixes !== -1 ? ref.current.sixes : ""}
            </td>
            <td className="expected border-x py-1 sm:py-2">
              {expectedScore.sixes}
            </td>
          </tr>
          {/* C. 중간 점수 출력 */}
          <tr className="subtotal bg-primary-content font-extrabold  dark:[&>*]:border-[#e5e7eb]">
            <th
              className="border-x w-36 md:w-40 text-left tooltip tooltip-top md:tooltip-left tooltip-info-content py-1 sm:py-2"
              data-tip="Section 1의 점수 합"
            >
              Subtotal
            </th>
            <td className="border-r font-bold py-1 sm:py-2" colSpan={2}>
              {subtotal}
            </td>
          </tr>
          <tr className="bonus">
            <th
              className="border-x border-b w-36 md:w-40 text-left tooltip tooltip-top md:tooltip-left tooltip-info-content py-1 sm:py-2"
              data-tip="Section 1의 점수가 63점 이상이면 35점 보너스"
            >
              Bonus
            </th>
            <td
              className="border-b border-r font-bold py-1 sm:py-2"
              colSpan={2}
            >
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
