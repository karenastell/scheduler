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
  $(".time-date").text(moment().format("MMMM Do YYYY, h:mm a"));
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
    nine: nine,
    ten: ten,
    eleven: eleven,
    twelve: twelve,
    thirteen: thirteen,
    forteen: forteen,
    fifteen: fifteen,
    sixteen: sixteen,
    seventeen: seventeen,
    eighteen: eighteen,
    ninteen: ninteen,
  };

  var event = getEventsFromLS();
  event.push(eventsObject);
  var eventsJSON = JSON.stringify(event);
  localStorage.setItem("event", eventsJSON);
  //console.log("eventsObject.nine", eventsObject.nine);
}

saveEvents();

function getEventsFromLS() {
  event = localStorage.getItem("event");
  if (event) {
    return JSON.parse(event);
  } else {
    return [];
  }
}

// another data-save for the buttons?

// *********************** Elapsed Time ***********************************
// depending on the current time the text areas will change colors
//       past = grey
//       present = green
//       future = blue

//schedulerTimeElement = event.target;
//schedulerTime = schedulerTimeElement.getAttribute("data-time");

var currentTime = moment().toObject();

// gives current time from webpage display
console.log("time-date", $(".time-date").text());

// gives current hour from moment object
console.log("currentTime.hours", currentTime.hours);

// gives the current time/date information from moment in an object form
console.log("moment to object", moment().toObject());

var currentHour = currentTime.hours;
console.log(currentHour);

var time;
$(".hour").each(function () {
  time = parseInt($(this).attr("id"));
  console.log(time);
  if (currentHour == time) {
    $(this).addClass("present");
    $(this).removeClass("future", "past");
  } else if (currentHour > time) {
    $(this).addClass("past");
    $(this).removeClass("future", "present");
  } else {
    $(this).addClass("future");
    $(this).removeClass("present", "past");
  }
});

// currentTime.hours
