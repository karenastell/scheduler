// ********************* HTML *********************************************
// when the page opens, the date and time are displayed at the top
// there are text areas where the user can type evens for the day
//      there is a section with the time
//      there is a section with the text
//      there is a save button

var eventElement = $(".event-element").val();
var schedulerTime;
var schedulerTimeElement;

// ********************** Keeping Time *************************************
// set a the current time
function updateTime() {
    $(".time-date").text(moment().format('MMMM Do YYYY, h:mm a'));
}
updateTime();
// current time updates each minute
setInterval(function () {
    updateTime();
}, 60000);


// ********************* Saving events in the scheduler *******************
// when the save button is clicked the event is stored in local storage
//      when the page is refreshed the events will still be where they were inputted
var nine = $(".9").val();
var ten = $(".10").val();
var eleven = $(".11").val();
var twelve = $(".12").val();
var thirteen = $(".13").val();
var forteen = $(".14").val();
var fifteen = $(".15").val();
var sixteen = $(".16").val();
var seventeen = $(".17").val();
var eighteen = $(".18").val();
var ninteen = $(".19").val();

function saveEvents() {

    var eventsObject = {
        9: nine,
        10: ten,
        11: eleven,
        12: twelve,
        13: thirteen,
        14: forteen,
        15: fifteen,
        16: sixteen,
        17: seventeen,
        18: eighteen,
        19: ninteen

    }

    var event = getEventsFromLS();
    event.push(eventsObject);
    var eventsJSON = JSON.stringify(event);
    localStorage.setItem("event", eventsJSON);

}

function getEventsFromLS() {
    event = localStorage.getItem("event");
    if (event) {
        return JSON.parse(event);
    } else {
        return [];
    }

}





// *********************** Elapsed Time ***********************************
// depending on the current time the text areas will change colors
//       past = grey
//       present = green
//       future = blue


//schedulerTimeElement = event.target;
//schedulerTime = schedulerTimeElement.getAttribute("data-time");


var currentTime = moment().toObject();
var check = $(".time-date").text() === currentTime.hour;
console.log("moment.toObject", moment().toObject);
console.log("check", check);
console.log("time-date", $(".time-date").text());
console.log("currentTime.hours", currentTime.hours);
console.log("moment to object", moment().toObject());
var currentHour = currentTime.hours;

// var hourChecker = event.target;
// var time = hourChecker.getAttribute("data-time");
//console.log(time);

// if (currentHour)


// currentTime.hours 
