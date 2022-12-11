import "./App.css";
import React from "react";
import { useState, useEffect, useRef } from "react";
import DiceGroup from "./components/DiceGroup";
import ScoreBoard from "./components/ScoreBoard";
import calculateScore from "./utils/calculateScore";
import useLocalStorage from "use-local-storage";
import twitter from "./assets/twitter.svg";
import { toBlob } from "html-to-image";

function App() {
  // 주사위 5개의 현재 상태를 나타내는 배열
  const [dice, setDice] = useState([1, 1, 1, 1, 1]);
  const defaultDark = window.matchMedia("(prefers-color-scheme: dark)");
  const localTheme =
    JSON.parse(localStorage.getItem("theme")) ||
    (defaultDark.matches ? "dracula" : "light");
  const [theme, setTheme] = useLocalStorage("theme", localTheme);
  // 라운드 수(`round`, `number`), 그 라운드에서 주사위를 굴린 횟수(`roll`, `number`) 그리고 초기화 여부(`reset`, `boolean`)를 담은 현재 진행 상황을 담은 객체
  const playStatus = useRef({
    round: 1,
    roll: 1,
    score: 0,
    reset: false,
    theme: "light",
  });
  // C. `isSubmitted` 선언
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [, updateState] = useState();

  playStatus.current.theme = theme;
  document.documentElement.dataset.theme = theme;

  const switchTheme = () => {
    const newTheme = theme === "light" ? "dracula" : "light";
    setTheme(newTheme);
  };

  // C. 초기화
  const toggleReset = () => {
    playStatus.current.round = 1;
    playStatus.current.roll = 1;
    playStatus.current.score = 0;
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

  const imageRef = useRef(null);
  const handleShare = async () => {
    const newFile = await toBlob(imageRef.current);
    const data = {
      files: [
        new File([newFile], `yacht-${playStatus.current.score}.png`, {
          type: "image/png",
        }),
      ],
      title: "Yacht Dice!",
      text: `I got ${playStatus.current.score} points in Yacht Dice!`,
    };
    // try {
    //   // make a share data64 image

    //   await navigator.share(data);
    // } catch(err) {
    //   console.log(err);
    // }
    // return base64 image url
    return data.files[0].name;
    // make base64 image
    // const reader = new FileReader();
    // reader.readAsDataURL(newFile);
    // reader.onloadend = () => {
    //   const base64data = reader.result;
    //   data.files = [base64data];
    //   navigator.share(data);
    // }
  };
  const shareTwitter = () => {
    // const imageUrl = handleShare();
    // return;
    const title = "Yacht Dice!: ";
    const sendText =
      playStatus.current.round > 12
        ? `I got ${playStatus.current.score} points`
        : `I got ${playStatus.current.score} points, round ${playStatus.current.round}`;
    const sendUrl = `https://yacht.crescent.dev/`;
    window.open(
      "https://twitter.com/intent/tweet?text=" +
        title +
        sendText +
        "&hashtags=yacht_dice" +
        "&url=" +
        sendUrl
    );
  };
  return (
    <div className="app box-border max-x-screen h-[100vh] flex content-center justify-center">
      <div ref={imageRef} className="px-2 my-6 sm:px-4 sm:my-8">
        <div className="w-full flex flex-row flex-wrap justify-between h-fit mb-4">
          <div className="flex flex-row">
            <h1 className="text-2xl sm:text-3xl font-extrabold mr-2">
              <button onClick={toggleReset}>🎲</button>
            </h1>
            <h1 className="text-2xl sm:text-3xl font-extrabold">Yacht Dice</h1>
          </div>
          {/* theme button */}
          <div className="flex flex-row">
            <button onClick={shareTwitter} className="">
              <img
                src={twitter}
                alt="twitter"
                className="w-6 h-6 sm:w-8 sm:h-8"
              />
            </button>
            <button
              className="text-xl sm:text-2xl font-extrabold mx-1 tooltip tooltip-left md:tooltip-bottom whitespace-pre-line text-left z-[100] before:translate-y-0 before:w-[16rem] md:before:w-[20rem] before:top-0 before:content-[attr(data-tip)]"
              data-tip="🎲 Yacht Dice!
A. 주사위 굴리기
1. 주사위는 5개가 있다.
2. 한 라운드에서는 최대 세 번, 한 번에 최대 주사위 5개를 굴릴 수 있다.
3. 주사위를 굴리기 전 굴리고 싶지 않은 주사위를 하나 이상 선택할 수 있다.
4. 주사위를 적어도 한 번 굴린 후 점수 책정 단계로 넘어갈 수 있다.
B. 점수 책정
- 주사위 눈에 따라 다음 `12`개 조합 중 하나를 반드시 골라 해당 조합의 점수를 얻는다. 만약 주사위 눈이 해당 조합의 조건을 만족하지 않는데 선택했다면 `0`점을 얻는다.
- `12`라운드 동안 모든 조합을 한 번씩 선택하면 게임이 끝난다.
C. 조작법
ℹ️: 게임 설명
🌞: 현재 밝은 테마
🌙: 현재 어두운 테마
🎲: 게임 초기화
D. Credit
- Rule from 51 Worldwide Games
- Made by @crescent-stdio
- Thanks to @16silver"
            >
              ℹ️
            </button>
            <button
              onClick={switchTheme}
              className="text-xl sm:text-2xl font-extrabold"
            >
              {theme === "light" ? "🌞" : "🌙"}
            </button>
          </div>
        </div>
        <div className="flex flex-col-reverse sm:flex-row">
          {/* 스코어보드를 표시하는 컴포넌트 */}
          <div className="sm:mr-4 mb-4 sm:mb-0">
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
