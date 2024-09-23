const EndDate = new Date("27 Sep, 2024 13:40:00").getTime();
const startDate = new Date().getTime();
document.getElementById("target-date").innerHTML = new Date("23 Sep, 2024 20:00:00").toLocaleString();


let x = setInterval(function updateTimer() {
    const currentDate = new Date().getTime();

    const distanceCovered = currentDate - startDate;
    const distancePending = EndDate - currentDate;

    const onedayinmillies = (24 * 60 * 60 * 1000);
    const oneHourinmillies = (60 * 60 * 1000);
    const onemininmillies = (60 * 1000);
    const onsecinmillies = (1000);

    const days = Math.floor(distancePending / onedayinmillies);
    const hrs = Math.floor((distancePending % onedayinmillies) / oneHourinmillies);
    const mins = Math.floor((distancePending % oneHourinmillies) / onemininmillies);
    const secs = Math.floor((distancePending % onemininmillies) / onsecinmillies);

    document.getElementById("days").innerHTML = days;
    document.getElementById("hours").innerHTML = hrs;
    document.getElementById("mins").innerHTML = mins;
    document.getElementById("seconds").innerHTML = secs;

    const totaldistance = EndDate - startDate;
    const widthPercentage = (distanceCovered / totaldistance) * 100;

    document.getElementById("progress-bar").style.width = widthPercentage + "%";

    if (distancePending <= 0) {
        clearInterval(x);
        document.querySelector(".container").innerHTML = "EXPIRED";
        document.getElementById("progress-bar").style.width = "100%";
    }
}, 1000);

// setInterval(updateTimer,1000);