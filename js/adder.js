const addBtn = doc.querySelector(".add_schezule"); // 버튼 추가 버튼
const addPlace = doc.getElementById("add_place"); //버튼 추가할 지점

/** 일정 추가 이벤트리스너 */
addBtn.addEventListener("click", () => {
  const hasAdded = doc.createElement("div");
  hasAdded.classList.add("added");
  const scheNum = addPlace.querySelectorAll(".added");
  if (scheNum.length >= 5) {
    alert("일정은 다섯개까지만! 쉬엄쉬엄해요 우리");
  } else {
    addPlace.append(hasAdded);
    makingDesc(hasAdded);
  }
});

/** 일정 추가 내부 제작 */
function makingDesc(whereDiv) {
  /* 체크, 삭제 버튼 */
  const removerBtn = doc.createElement("button");
  const checkerBtn = doc.createElement("button");
  removerBtn.classList.add("remover");
  checkerBtn.classList.add("checker");

  /* Input & Label */
  const inputPlacer = doc.createElement("div");
  inputPlacer.classList.add("sche_place");
  const titlePutter = doc.createElement("input");
  titlePutter.placeholder = "제목을 입력해주세요.";
  const titleConfirmer = doc.createElement("label");
  const memoPutter = doc.createElement("input");
  memoPutter.placeholder = "메모를 입력해주세요.";
  const memoConfirmer = doc.createElement("label");

  /** 삭제버튼 함수 */
  removerBtn.addEventListener("click", () => {
    whereDiv.remove();
  });
  /** 체크버튼 함수 */
  checkerBtn.addEventListener("click", (e) => {
    let confirmChecker = e.target.classList.contains("checked");
    if (!confirmChecker) {
      e.target.classList.add("checked");
      titleConfirmer.style.textDecoration = "line-through";
      memoConfirmer.style.textDecoration = "line-through";
    } else {
      e.target.classList.remove("checked");
      titleConfirmer.style.textDecoration = "none";
      memoConfirmer.style.textDecoration = "none";
    }
  });
  function putterAction(things) {
    things.addEventListener("change", (e) => {
      const textInput = e.target.value;
      const nextLabel = e.target.nextElementSibling;
      if (textInput.length === 0) {
      } else {
        nextLabel.innerText = textInput;
        e.target.style.display = "none";
      }
    });
  }
  putterAction(memoPutter);
  putterAction(titlePutter);

  /* input 부분 제작 */
  inputPlacer.append(titlePutter);
  inputPlacer.append(titleConfirmer);
  inputPlacer.append(memoPutter);
  inputPlacer.append(memoConfirmer);
  whereDiv.append(removerBtn);
  whereDiv.append(checkerBtn);
  whereDiv.append(inputPlacer);
}
const clearBtn = doc.getElementById("clearer"); // Clear 버튼
/** Clear 버튼 함수 */
function scheClear() {
  const sches = doc.querySelectorAll("#add_place > .added");
  sches.forEach((schsNum) => {
    schsNum.remove();
  });
}
clearBtn.addEventListener("click", scheClear);
