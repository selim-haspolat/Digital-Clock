const body = document.querySelector("body");
const h = document.getElementById("h");
const min = document.getElementById("min");
const sec = document.getElementById("sec");
const akrep = document.querySelector(".akrep");
const yelkovan = document.querySelector(".yelkovan");
const saniye = document.querySelector(".saniye");
const btn = document.querySelector(".btn");
const container = document.querySelector(".container");
const duzSaat = document.querySelector(".duz-saat");

window.addEventListener("load", (e) => {
  getCurrentTime();
});

const getCurrentTime = () => {
  const n = new Date();
  let hour = n.getHours();
  let minute = n.getMinutes();
  let second = n.getSeconds();
  saniye.style.transform = `rotate(${second * 6 - 90}deg)`;
  yelkovan.style.transform = `rotate(${minute * 6 - 90}deg)`;
  akrep.style.transform = `rotate(${hour * 30 + minute * 0.5 - 90}deg`;
  hour < 10 && (hour = `0${hour}`);
  minute < 10 && (minute = `0${minute}`);
  second < 10 && (second = `0${second}`);
  h.innerText = hour;
  min.innerText = minute;
  sec.innerText = second;
};
setInterval(getCurrentTime, 1000);

body.style.backgroundColor = "rgb(161, 146, 166)";

btn.addEventListener("click", (e) => {
  container.classList.toggle("container-display");
  duzSaat.classList.toggle("duz-saat-display");
  btn.style.letterSpacing = "-8px"
  const letterSpc = () =>{
    (btn.style.letterSpacing = "5px")
  }
  setTimeout(letterSpc,100)
  if(body.style.backgroundColor == "rgb(161, 146, 166)"){
    body.style.backgroundColor = "rgb(72, 161, 217)"
    btn.querySelector("strong").innerText = "analog"
  }
  else{
    body.style.backgroundColor = "rgb(161, 146, 166)"
    btn.querySelector("strong").innerText = "digital"
  }
});
