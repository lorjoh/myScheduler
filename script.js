$(document).ready(function () {
//create currentday and time
var currentDay = moment().format('dddd, MMMM Do');
$("#currentDay").append(currentDay);

var i = 0;
var dayHours = 24;
var blockContainerEl = $(".container");

createTimeBlocks();
function createTimeBlocks() {
    var nowHour = moment().format('h A');
    console.log(nowHour);

    // added 1 because of the nowHour which was included with fromNow statement
    // var pastHours = moment().startOf('day').add(1, 'hour').fromNow('h');
    // console.log(pastHours);
    // subtracted 1 because of the nowHour which was included with fromNow statement
    // var laterHours = moment().endOf('day').subtract(1, 'hour').fromNow('h');
    // console.log(laterHours);

    for (; i < dayHours; i++) {

        var timeBlock = $("<div>").addClass("row");

        var dayHour = moment().startOf('day').add(i, 'hour').format('h A');
        console.log(dayHour);
        var everyHour = $("<h5>").addClass("hour col-md-2");

        everyHour.append("<br>" + dayHour);
        var inputEl = $("<input>").addClass("description col-md-8");
        inputEl.textContent = "";
        if (nowHour === dayHour) {
            inputEl.addClass("present");
        }
        else if (dayHour < nowHour) {
            inputEl.addClass("past");
        }
        else if (dayHour > nowHour) {
            inputEl.addClass("future");
        }

        var saveBtn = $("<button>").addClass("saveBtn saveBtn,i:hover col-md-2");
        var Icon = $("<i>").addClass("fas fa-save");
        saveBtn.append(Icon);
        timeBlock.append(everyHour, inputEl, saveBtn);
        blockContainerEl.append(timeBlock);

    }
}

$(".saveBtn").on("click",function (event) {
    event.preventDefault();
    var textInput = inputEl.value;

    localStorage.setItem("description", textInput);

    textInput = localStorage.getItem("description");
    if (!textInput) {
        return;
    }
    inputEl.textContent = textInput;
   
});









});