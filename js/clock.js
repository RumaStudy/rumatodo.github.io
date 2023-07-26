const clock = doc.querySelector("#date > p");

function getTime() {
  const time = new Date();
  const year = time.getFullYear();
  const month = time.getMonth() + 1;
  const date = time.getDate();
  const hour = ("0" + time.getHours()).slice(-2);
  const minutes = ("0" + time.getMinutes()).slice(-2);
  const week = time.getDay();
  const dayOfWeek = ["일", "월", "화", "수", "목", "금", "토"];
  clock.innerHTML = `${year}년 ${month}월 ${date}일 (${dayOfWeek[week]})<br/> ${hour} : ${minutes}`;
}
getTime();
setInterval(getTime, 1000);
