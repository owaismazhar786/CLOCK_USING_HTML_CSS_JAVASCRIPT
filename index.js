function clock() {
    const time = new Date();
    var hour = time.getHours();
    var mins = time.getMinutes();
    var secs = time.getSeconds();
    if (hour < 10) {
        hour = "0" + hour;
    }
    if (mins < 10) {
        mins = "0" + mins;
    }
    if (secs < 10) {
        secs = "0" + secs;
    }
    document.getElementById('hour').innerHTML = hour;
    document.getElementById('minute').innerHTML = ":" + mins;
    document.getElementById('second').innerHTML = ":" + secs;
}
setInterval(clock, 100);