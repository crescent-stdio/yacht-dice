import React from "react";
import { useState, useEffect, useRef } from "react";
import randomDice from "../utils/randomDice";
import dice_1 from "../assets/dice_1.png";
import dice_2 from "../assets/dice_2.png";
import dice_3 from "../assets/dice_3.png";
import dice_4 from "../assets/dice_4.png";
import dice_5 from "../assets/dice_5.png";
import dice_6 from "../assets/dice_6.png";
import selected_light_dice_1 from "../assets/selected_light/dice_1.png";
import selected_light_dice_2 from "../assets/selected_light/dice_2.png";
import selected_light_dice_3 from "../assets/selected_light/dice_3.png";
import selected_light_dice_4 from "../assets/selected_light/dice_4.png";
import selected_light_dice_5 from "../assets/selected_light/dice_5.png";
import selected_light_dice_6 from "../assets/selected_light/dice_6.png";
import selected_dark_dice_1 from "../assets/selected_dark/dice_1.png";
import selected_dark_dice_2 from "../assets/selected_dark/dice_2.png";
import selected_dark_dice_3 from "../assets/selected_dark/dice_3.png";
import selected_dark_dice_4 from "../assets/selected_dark/dice_4.png";
import selected_dark_dice_5 from "../assets/selected_dark/dice_5.png";
import selected_dark_dice_6 from "../assets/selected_dark/dice_6.png";
// 주사위 이미지
const diceImages = ["", dice_1, dice_2, dice_3, dice_4, dice_5, dice_6];
// 선택된 주사위 이미지
const selectedLightDiceImages = [
  "",
  selected_light_dice_1,
  selected_light_dice_2,
  selected_light_dice_3,
  selected_light_dice_4,
  selected_light_dice_5,
  selected_light_dice_6,
];
const selectedDarkDiceImages = [
  "",
  selected_dark_dice_1,
  selected_dark_dice_2,
  selected_dark_dice_3,
  selected_dark_dice_4,
  selected_dark_dice_5,
  selected_dark_dice_6,
];

const DiceGroup = (props, ref) => {
  const { dice, setDice } = props;
  const [selectedDice, setSelectedDice] = useState([
    false,
    false,
    false,
    false,
    false,
  ]);

  useEffect(() => {
    setDice(dice.map(() => randomDice()));
  }, []);

  // B. 주사위 굴리기
  const rollDice = () => {
    if (ref.current.roll === 3) {
      alert("You have used all your tries. Please select a score.");
      return;
    }
    if (ref.current.round > 12) {
      alert("You have used all your rounds. Please start a new game.");
      return;
    }
    setDice(
      dice.map((d, index) => {
        if (selectedDice[index]) return d;
        return randomDice();
      })
    );
    ref.current.roll += 1;
  };

  // C. 주사위 선택
  const toggleDice = (e) => {
    const index = e.target.id;
    const tmpSelectedDice = [...selectedDice];
    tmpSelectedDice[index] = !tmpSelectedDice[index];
    setSelectedDice(tmpSelectedDice);
  };

  // D. `Roll` 버튼과 현재 진행 상황
  useEffect(() => {
    setSelectedDice([false, false, false, false, false]);
    setDice(dice.map(() => randomDice()));
    if (ref.current.reset) ref.current.reset = false;
  }, [ref.current.round, ref.current.reset]);

  console.log(ref.current.theme)
  return (
    <div className="mb-4 h-full">
      <div className="mb-1">
        {/* A. 현재 진행 사항 표시 */}
        {ref.current.round <= 12 ? (
          <h3 className="status font-lg font-extrabold text-secondary">
            Round: {ref.current.round} | Roll: {ref.current.roll}
          </h3>
        ) : (
          <h3 className="status font-lg font-extrabold text-primary ">Game Over!</h3>
        )}
      </div>
      <div className="flex mb-2 md:mb-4 -ml-1">
        {/* A. 주사위 출력 */}
        {props.dice.map((value, index) => (
          <img
            src={
              !selectedDice[index]
                ? diceImages[value]
                : ref.current.theme === 'light'? selectedLightDiceImages[value]: selectedDarkDiceImages[value]
            }
            alt={`dice ${value}`}
            key={index}
            onClick={toggleDice}
            id={index}
            className="w-12 h-12 sm:w-14 sm:h-14 md:w-16 md:h-16 cursor-pointer ml-1"
          />
        ))}
      </div>
      {/* 주사위를 굴리는 버튼.  */}
      <button onClick={rollDice} className="btn btn-primary w-full ">
        Roll
      </button>
    </div>
  );
};
const ForwardedDiceGroup = React.forwardRef(DiceGroup);
export default ForwardedDiceGroup;
