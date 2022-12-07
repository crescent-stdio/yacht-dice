import "./App.css";
import React from "react";
import { useState, useEffect, useRef } from "react";
import DiceGroup from "./components/DiceGroup";
import ScoreBoard from "./components/ScoreBoard";
import calculateScore from "./utils/calculateScore";
// import { themeChange } from "theme-change";
import useLocalStorage from "use-local-storage";

function App() {
  // useEffect(() => {
  //   themeChange(false);
  //   // 👆 false parameter is required for react project
  // }, []);

  // 주사위 5개의 현재 상태를 나타내는 배열
  const [dice, setDice] = useState([1, 1, 1, 1, 1]);
  // 라운드 수(`round`, `number`), 그 라운드에서 주사위를 굴린 횟수(`roll`, `number`) 그리고 초기화 여부(`reset`, `boolean`)를 담은 현재 진행 상황을 담은 객체
  const playStatus = useRef({ round: 1, roll: 1, reset: false });
  // C. `isSubmitted` 선언
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [, updateState] = useState();
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
  const [theme, setTheme] = useLocalStorage(
    "theme",
    defaultDark ? "dracula" : "light"
  );

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dracula" : "light";
    document.documentElement.dataset.theme = newTheme;
    setTheme(newTheme);
  };

  // C. 초기화
  const toggleReset = () => {
    playStatus.current.round = 1;
    playStatus.current.roll = 1;
    playStatus.current.reset = true;
    updateState({});
  };

  // D. 점수 선택시 상태 변경
  useEffect(() => {
    if (!isSubmitted) return;
    playStatus.current.round += 1;
    playStatus.current.roll = 1;
    setIsSubmitted(false);
  }, [isSubmitted]);

  // set html data-theme to current theme
  // B. 현재 주사위의 조합의 점수
  const expectedScore = calculateScore(dice);
  return (
    <div className="app box-border max-x-screen h-[100vh] flex content-center justify-center">
      <div className="px-2 my-6 sm:px-4 sm:my-8">
        <div className="w-full flex flex-row flex-wrap justify-between h-fit mb-4">
          <div className="flex flex-row">
            <h1 className="text-2xl sm:text-3xl font-extrabold mr-2">
              <button onClick={toggleReset}>🎲</button>
            </h1>
            <h1 className="text-2xl sm:text-3xl font-extrabold">Yacht Dice</h1>
          </div>
          {/* theme button */}
          <button
            onClick={switchTheme}
            className="text-2xl sm:text-3xl font-extrabold"
          >
            {theme === "light" ? "🌞" : "🌙"}
          </button>
        </div>
        <div className="flex flex-col-reverse sm:flex-row">
          {/* 스코어보드를 표시하는 컴포넌트 */}
          <div className="sm:mr-4">
            <ScoreBoard
              ref={playStatus}
              expectedScore={expectedScore}
              isSubmitted={isSubmitted}
              setIsSubmitted={setIsSubmitted}
            />
          </div>
          {/* <div className="w-[0vw] sm:mr-4"></div> */}
          <div className="max-h-[100%]">
            {/* B. 현재 게임의 상태 전달 */}
            {/* 주사위들을 표시하는 컴포넌트 */}
            <DiceGroup ref={playStatus} dice={dice} setDice={setDice} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
