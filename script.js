const hourEl = document.querySelector("#hour");
const minuteEl = document.querySelector("#minute");
const secondEl = document.querySelector("#second");
const ampmEl = document.querySelector("#ampm")

function getTime() {
 let hour = new Date().getHours();
 let minute = new Date().getMinutes();
 let second = new Date().getSeconds();

 if(hour > 12){
  hour = hour - 12;
  ampmEl.innerText = "PM" 
 }

 hour = hour<10 ? "0" + hour : hour;
 minute = minute<10 ? "0" + minute : minute;
 second = second<10 ? "0" + second : second;

 hourEl.innerText = hour;
 minuteEl.innerText = minute;
 secondEl.innerText = second;
}

setInterval(() =>{
  getTime()
}, 1000) 
