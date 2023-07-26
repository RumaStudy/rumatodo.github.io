/* 배경 전환용 배열 */
const bgArray = [
  "bg01.jpg",
  "bg02.jpg",
  "bg03.jpg",
  "bg05.jpg",
  "bg06.jpg",
  "bg07.jpg",
  "bg08.jpg",
  "bg09.jpg",
];
/** 현재 배경 확인용 변수 */
let currentBG = "";
const bgPlace = doc.querySelector(".wrap"); // 배경 넣을 곳
/** 시작 시 랜덤 배경 지정 */
function initialize() {
  let randomize = Math.floor(Math.random() * bgArray.length);
  bgPlace.style.backgroundImage = `url(img/bg/${bgArray[randomize]})`;
  currentBG = bgArray[randomize];
}
initialize();
/** 배경 전환 함수 setInterval() */
let bgChanger = setInterval(randomChanger, 7000);
function randomChanger() {
  let randomBG = Math.floor(Math.random() * bgArray.length);
  /** 중복된 배경화면일 경우 추가 전환 */
  if (bgArray[randomBG] === currentBG) {
    randomChanger();
  } else {
    bgPlace.style.backgroundImage = `url(img/bg/${bgArray[randomBG]})`;
    currentBG = bgArray[randomBG];
  }
}
