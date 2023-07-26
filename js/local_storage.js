/** localStorage 함수 */
const inputSide = doc.getElementById("get_ID_place"),
  place = doc.querySelector(".placefordata"),
  data = "nickname",
  firstFace = doc.querySelector(".first_face");

function changer(e) {
  e.preventDefault();
  if (inputSide.value.length === 0) {
    firstFace.classList.remove("fade");
    console.log(inputSide.value.length);
    alert("별명을 입력해주세요.");
    hider();
  } else {
    localStorage.setItem(data, inputSide.value);
    place.innerText = `${inputSide.value} 님!`;
    firstFace.classList.add("fade");
    inputSide.value = "";
    appearer();
  }
}
function init() {
  const loadData = localStorage.getItem(data);
  if (localStorage.getItem(data) === null) {
    localStorage.clear();
    hider();
    sh.classList.remove("on");
    place.innerText = "";
    inputSide.value = "";
    firstFace.classList.remove("fade");
  } else {
    place.innerText = `${loadData} 님!`;
    appearer();
    sh.classList.remove("on");
    firstFace.classList.add("fade");
    inputSide.value = "";
  }
}
init();
inputSide.addEventListener("change", (e) => {
  changer(e);
});

/** reset 작동하기 */
const reseter = doc.getElementById("reseter");
reseter.addEventListener("click", () => {
  localStorage.clear();
  sh.classList.remove("on");
  firstFace.classList.remove("fade");
  place.innerText = "";
  inputSide.value = "";
  init();
});
