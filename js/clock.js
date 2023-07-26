const clock = doc.querySelector("#date > p");
const datePutter = doc.querySelector("#date > span");

function getTime() {
  const time = new Date();
  const year = time.getFullYear();
  const month = time.getMonth() + 1;
  const date = time.getDate();
  const hour = ("0" + time.getHours()).slice(-2);
  const minutes = ("0" + time.getMinutes()).slice(-2);
  const week = time.getDay();
  const dayOfWeek = ["일", "월", "화", "수", "목", "금", "토"];
  clock.innerHTML = `${year}. ${month}. ${date} (${dayOfWeek[week]})`;
  datePutter.innerHTML = `${hour} : ${minutes}`;
}
getTime();
setInterval(getTime, 1000);
