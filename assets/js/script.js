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

var storageKey;
getEventsFromLS();
function saveEvents() {
  // recognizes which button is clicked
  var saveBtnEl = $(this);
  // sets the storage key to the data attribute
  storageKey = saveBtnEl.attr("data-time");
  // sets the value of the input to variable inputEl
  var inputEl = saveBtnEl.parent().siblings(".hour");
  //console.log(inputEl.val());
  // saves the input into local storage under the key
  localStorage.setItem(storageKey, inputEl.val());
  getEventsFromLS();
}

function getEventsFromLS() {
  // gets each item in local storage by it's key
  var inputEl9 = localStorage.getItem("9");
  var inputEl10 = localStorage.getItem("10");
  var inputEl11 = localStorage.getItem("11");
  var inputEl12 = localStorage.getItem("12");
  var inputEl13 = localStorage.getItem("13");
  var inputEl14 = localStorage.getItem("14");
  var inputEl15 = localStorage.getItem("15");
  var inputEl16 = localStorage.getItem("16");
  var inputEl17 = localStorage.getItem("17");
  var inputEl18 = localStorage.getItem("18");

  // sets each textarea to the correct local storage text
  $(".9").text(inputEl9);
  $(".10").text(inputEl10);
  $(".11").text(inputEl11);
  $(".12").text(inputEl12);
  $(".13").text(inputEl13);
  $(".14").text(inputEl14);
  $(".15").text(inputEl15);
  $(".16").text(inputEl16);
  $(".17").text(inputEl17);
  $(".18").text(inputEl18);
}
console.log(localStorage);

$(".btn").on("click", saveEvents);

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

// ************************ Clear Button ************************************
//when user clicks the button
$(".clear-button").on("click", function () {
  // clear local storage
  localStorage.clear();
  console.log(localStorage);
  // reload the page to set each text area back to default
  location.reload();
});
