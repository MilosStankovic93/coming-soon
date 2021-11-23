const countDownDate = new Date("June 07, 2022 00:00:00").getTime();

let x = setInterval(() =>{

    let now = new Date().getTime();
    let remain = countDownDate - now;

    let days = Math.floor(remain / (1000 * 60 * 60 * 24));
    let hours = Math.floor((remain % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    let minutes = Math.floor((remain % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((remain % (1000 * 60)) / 1000);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hours;
    document.getElementById("minutes").innerHTML = minutes;
    document.getElementById("seconds").innerHTML = seconds;

    if(remain < 0){
        clearInterval(x);
        document.getElementById("days").innerHTML = "00";
        document.getElementById("hours").innerHTML = "00";
        document.getElementById("minutes").innerHTML = "00";
        document.getElementById("seconds").innerHTML = "00";
    }

},1000);