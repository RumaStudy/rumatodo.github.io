const sh = doc.querySelector(".sh"),
  fader = doc.querySelector(".first_face");
const mainTitle = doc.querySelector(".title"),
  mainContent = doc.querySelector("main > .main_content"),
  aside = doc.querySelector("aside");
hideArray = [aside, mainContent, mainTitle];

/** Hide And Show 클릭 시 함수 */
sh.addEventListener("click", hideShow);

/* Aside, ID Place, SchedulePlace를 전체 치우기 */
function hideShow() {
  if (fader.classList.contains("fade")) {
    if (sh.classList.contains("on")) {
      sh.classList.remove("on");
      appearer();
    } else {
      sh.classList.add("on");
      hider();
    }
  } else {
    sh.classList.remove("on");
    hider();
    alert("로그인 후 이용해주세요.");
  }
}
function hider() {
  hideArray.forEach((things) => {
    things.classList.add("hide");
  });
}
function appearer() {
  hideArray.forEach((things) => {
    things.classList.remove("hide");
  });
}
