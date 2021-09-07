days_el = document.getElementById('days');
hours_el = document.getElementById('hours');
mins_el = document.getElementById('mins');
secs_el = document.getElementById('secs');

const newYear = '01 Jan 2022'


function countdown()
{
    const newYearDate = new Date(newYear);
    const currDate = new Date();

    const total_sec = (newYearDate - currDate)/1000;
    const days =  Math.floor(total_sec/3600/24);
    const hours =  Math.floor(total_sec/3600) % 24;
    const mins =  Math.floor(total_sec/60) % 60;
    const sec =  Math.floor(total_sec) % 60;


    console.log(days,hours,mins,sec);

    days_el.innerHTML = days;
    mins_el.innerHTML =  set_time(mins);
    hours_el.innerHTML = set_time(hours);
    secs_el.innerHTML = set_time(sec);
   
}

function set_time(time){
    return time < 10 ? (`0${time}`) :time;
}
//countdown();
//clearInterval();
 setInterval(countdown,1000);