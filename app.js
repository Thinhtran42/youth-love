const lovingDays = new Date("2020-06-04T03:00:00");

document.addEventListener("DOMContentLoaded", function() {
    var rootTime = document.querySelector("time");

    document.querySelector("anni").textContent = `${(lovingDays.getDate()>9) ? lovingDays.getDate():"0" + lovingDays.getDate()} - ${(lovingDays.getMonth()>8) ?(lovingDays.getMonth()+1):"0" +(lovingDays.getMonth() + 1)} -${lovingDays.getFullYear()}`;
    document.querySelector("date").textContent = Math.floor(Math.floor((new Date() - lovingDays) / 1000) / 60 / 60 / 24) + " DAYS";

    function olock() {
        var today = new Date(),
            hrs = (Math.floor(Math.floor((today - lovingDays) / 1000) / 60 / 60)) % 24,
            min = (Math.floor(Math.floor((today - lovingDays) / 1000) / 60)) % 60,
            sec = Math.floor((today - lovingDays) / 1000) % 60;
        rootTime.textContent = `${(hrs>9)?hrs:"0"+hrs}:${(min>9)?min:"0"+min}:${(sec>9)?sec:"0"+sec}`;
    }
    olock();
    var timer = setInterval(function() { olock() }, 1000);

}, false);