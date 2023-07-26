const API_KEY = "aaf9d6931dcb49f8e8e16ecbd4c137ff", // API Key
  putCity = doc.getElementById("city"), // 도시 삽입부
  putWeather = doc.getElementById("wet_icon"), // 날씨 삽입부
  putTemper = doc.getElementById("temper"); // 온도 삽입부

/* 날씨 아이콘 배열 */
const wetIcon = [
  "sunny",
  "few_cloud",
  "cloudy",
  "rainy",
  "thunder",
  "snow",
  "mists",
];
/** 기상 정보 표기 */
function setWeather(cities, wetCondition, temperature) {
  putCity.innerText = cities;
  /** 날씨 정보에 따른 아이콘 변경 */
  if (wetCondition * 1 > 800) {
    /* few cloud */
    wetCondition = wetIcon[1];
  } else if (wetCondition * 1 === 800) {
    /* sunny */
    wetCondition = wetIcon[0];
  } else if (wetCondition * 1 > 700) {
    /* mists */
    wetCondition = wetIcon[6];
  } else if (wetCondition * 1 >= 600) {
    /* snow */
    wetCondition = wetIcon[5];
  } else if (wetCondition * 1 >= 300) {
    /* rain */
    wetCondition = wetIcon[3];
  } else if (wetCondition * 1 >= 200) {
    /* thunder */
    wetCondition = wetIcon[4];
  }
  if (cities == "Daejeon") {
    cities = "대전";
  } else {
  }
  putWeather.style.backgroundImage = `url(img/weather_icon/${wetCondition}.svg)`;
  if (temperature >= 30) {
    putTemper.style.color = "#FF9999";
  } else {
    putTemper.style.color = "#fff";
  }
  putTemper.innerText = temperature.toFixed(1);
}

/** 사용자의 현재 위치 추적 */
/* 위치 정상 확인 */
function onGeoOk(position) {
  const lat = position.coords.latitude; // 위도
  const lon = position.coords.longitude; // 경도
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  /** 받아온 위치를 바탕으로 날씨 확인 */
  /** URL 호출( fetch() ) => 응답을 받아 실행할일 ( then() ) */
  fetch(url)
    .then((response) => response.json())
    .then((wetData) => {
      const city = wetData.name; // 도시명
      const weatherCondition = wetData.weather[0].id; // 날씨
      const temper = wetData.main.temp; // 온도 (섭씨)
      setWeather(city, weatherCondition, temper);
    });
}
/* 위치 확인 실패 */
function onGeoError() {
  console.log("can't find");
}
/* 위치 확인 및 기상 설정 시도 */
function geoCheck() {
  navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);
}
geoCheck(); // 초기화 시 실행
setInterval(geoCheck, 300000); // 5분 당 한 번 기상 및 위치 상태 리셋
