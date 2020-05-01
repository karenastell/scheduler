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

// function saveEvents() {
//   var saveButtonEl = $(this);
//   var inputEl = document.getElementsByClassName(".hour");
//   //console.log(inputEl.val());
//   var storageKey = saveButtonEl.attr("data-hour");
//   localStorage.setItem(storageKey, inputEl.val());
// }

// var nine = $(".9").val();
// var ten = $(".10").val();
// var eleven = $(".11").val();
// var twelve = $(".12").val();
// var thirteen = $(".13").val();
// var fourteen = $(".14").val();
// var fifteen = $(".15").val();
// var sixteen = $(".16").val();
// var seventeen = $(".17").val();
// var eighteen = $(".18").val();
// var ninteen = $(".19").val();

// function saveEvents() {
//   var eventsObject = {
//     nine: nine,
//     ten: ten,
//     eleven: eleven,
//     twelve: twelve,
//     thirteen: thirteen,
//     fourteen: fourteen,
//     fifteen: fifteen,
//     sixteen: sixteen,
//     seventeen: seventeen,
//     eighteen: eighteen,
//     ninteen: ninteen,
//   };

//   console.log(eventsObject);
//   var event = getEventsFromLS();

//   event.push(eventsObject);
//   var eventsJSON = JSON.stringify(event);
//   localStorage.setItem("event", eventsJSON);
// }

// function getEventsFromLS() {
//   event = localStorage.getItem("event");
//   if (event) {
//     return JSON.parse(event);
//   } else {
//     return [];
//   }
// }

function saveEvents() {
  var saveBtnEl = $(this);
  var storageKey = saveBtnEl.attr("data-time");
  //var inputEl = $(".hour").val();
  var inputEl = saveBtnEl.parent().siblings(".hour");
  console.log(inputEl.val());
  localStorage.setItem(storageKey, inputEl.val());
}

$(".btn").on("click", saveEvents);

// another data-save for the buttons?

// *********************** Elapsed Time ***********************************
// depending on the current time the text areas will change colors:
var currentTime = moment().toObject();
// currentHour is the hour of the current moment - in military time
var currentHour = currentTime.hours;
var time;

// for each element with the class "hour"
$(".hour").each(function () {
  // make each id into an integer
  time = parseInt($(this).attr("id"));
  //   console.log(time);
  // compare the current hour from the moment object to the hour that is displayed on the webpage
  if (currentHour == time) {
    //present = green
    $(this).addClass("present");
    $(this).removeClass("future", "past");
  } else if (currentHour > time) {
    //past = grey
    $(this).addClass("past");
    $(this).removeClass("future", "present");
  } else {
    //future = blue
    $(this).addClass("future");
    $(this).removeClass("present", "past");
  }
});
