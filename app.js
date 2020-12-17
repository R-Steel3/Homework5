var d = new Date();
document.getElementById("currentDay").innerHTML = d;

var newEvent = {
    types: ['Mindful', 'Productive', 'Fun', 'Important'],
    hours: ['7 AM', '8 AM', '9 AM', '10 AM', '11 AM', '12 PM', '1 PM', '2 PM', '3 PM', '4 PM', '5 PM', '6 PM', '7 PM'],
    days:  ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
    text: (""),
}

document.getElementsByClassName("time-block").addEventListner("click", function () {
    document.getElementById("eventAdd").innerHTML = ("");
});
