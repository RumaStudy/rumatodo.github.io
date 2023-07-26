const schList = doc.querySelectorAll(".schedules > ul > li > span"); // 최종 갯수를 적을 곳
/** 노드 트리 변경 감지 시 실행할 함수 */
function CountForSche() {
  const everyCount = doc.querySelectorAll(".added");
  const compCount = doc.querySelectorAll(".checked");
  const everyResult = everyCount.length;
  const compResult = compCount.length;
  const uncompResult = everyResult - compResult;
  const resultList = [everyResult, compResult, uncompResult];
  /* resultList를 각각의 자리에 기재 */
  resultList.forEach((resultItem, resultIdx) => {
    schList[resultIdx].innerText = `(${resultItem * 1})`;
  });
}

/* Mutation Observer를 통한 노드 변경 감지 */
const countersTargetLock = doc.getElementById("add_place"); // 감지 대상
const countObserver = new MutationObserver(CountForSche);
const countTargetOb = { attributes: true, childList: true, subtree: true }; // 감지 요소
countObserver.observe(countersTargetLock, countTargetOb);
