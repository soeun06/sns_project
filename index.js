const timeContainer = document.querySelector(".time");
// const nowHour = timeContainer.querySelector("#hour");
// const nowMin = timeContainer.querySelector("#minutes");
// const nowSec = timeContainer.querySelector("#seconds");
const nowAmpm = timeContainer.querySelector("#period");

// const dayContainer = document.querySelector(".date"),
//   nowDay = dayContainer.querySelector("#dayname"),
//   nowMonth = dayContainer.querySelector("#month"),
//   nowDate = dayContainer.querySelector("#daynum"),
//   nowYear = dayContainer.querySelector("#year");

function getTime(){
    const now = new Date();
    let minutes = now.getMinutes();
    let hours = now.getHours();
    let seconds = now.getSeconds();

    if(hours >12){
        hours = hours - 12;
    }

    if (hours >= 12 ){
        nowAmpm.innerText = "PM";
    }
    if(hours == 0){
        hours = 12;
    }

    if (hours < 10 ){
        hours = `0${hours}`;
    }

    if (minutes < 10 ){
        minutes = `0${minutes}`;
    }

    if (seconds < 10 ){
        seconds = `0${seconds}`;
    }
    

    // nowHour.innerText = hours < 10 ? `0${hours}` : hours;
    // nowMin.innerText = minutes < 10 ? `0${minutes}` : minutes;
    // nowSec.innerText = seconds < 10 ? `0${seconds}` : seconds;


    //html에 text넣기
    // nowHour.innerText = hours;
    // nowMin.innerText = minutes;
    // nowSec.innerText = seconds;

    let hid = ["hour", "minutes", "seconds"];
    let hvalue = [ hours, minutes, seconds ];

    

    for(let i=0; i<hid.length; i++){
        document.getElementById(hid[i]).firstChild.nodeValue = hvalue[i];
    }

}

function getCalender() {
    const now = new Date();
    const day = now.getDay(); // 요일
    const month = now.getMonth(); // 월
    let date = now.getDate(); // 일
    const year = now.getFullYear(); // 년

    let week = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];

    let a = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];

    if (date < 10 ){
        date = `0${date}`;
    }
    

    // nowDay.innerText = week[day];  //요일
    // nowMonth.innerText = month;
    // nowDate.innerText = date;
    // nowYear.innerText = year;

    let ids = ["dayname", "month", "daynum", "year"];
    let values = [ week[day], a[month], date, year ];

    

    for(let i=0; i<ids.length; i++){
        document.getElementById(ids[i]).firstChild.nodeValue = values[i];
    }

  }

function init(){
    getTime();
    setInterval(getTime, 1000);
    getCalender();
}

init();