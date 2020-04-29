// ********************* HTML *********************************************
// when the page opens, the date and time are displayed at the top
// there are text areas where the user can type evens for the day
//      there is a section with the time
//      there is a section with the text
//      there is a save button

var eventElement = $(".event-element").val();
var time;

// ********************** Keeping Time *************************************
// set a the current time
function updateTime() {
    time = $(".time-date").text(moment().format('MMMM Do YYYY, h:mm a'));
}
updateTime();
// current time updates each minute
setInterval(function () {
    updateTime();
}, 60000);


// ********************* Saving events in the scheduler *******************
// when the save button is clicked the event is stored in local storage
//      when the page is refreshed the events will still be where they were inputted



// *********************** Elapsed Time ***********************************
// depending on the current time the text areas will change colors
//       past = grey
//       present = green
//       future = blue
