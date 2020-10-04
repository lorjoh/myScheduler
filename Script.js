$(document).ready(function () {
    //create currentday and time
    var currentDay = moment().format('dddd, MMMM Do'); // September 21st 2020
    $("#currentDay").append(currentDay);

    var i = 0;
    var dayHours = 24;
    var blockContainerEl = $(".container");

    for (; i < dayHours; i++) {

        var timeBlock = $("<div>").addClass("row");

        var dayHour = moment().startOf('day').add(i, 'hour').format('h A');
        console.log(dayHour);
        var everyHour = $("<h5>").addClass("hour col-md-2");
        var nowHour = moment().format('h A');
        console.log(nowHour);

        var input = $("<h5>").addClass("description col-md-8");
        input.textContent = "";
        if (nowHour === dayHour) {
            input.addClass("present");
        }
        if (dayHour < nowHour) {
            input.addClass("past");
        }
        if (dayHour > nowHour) {
            input.addClass("future");
        }

        var saveBtn = $("<button>").addClass("saveBtn saveBtn,i:hover col-md-2");
        var Icon = $("<i>").addClass("fas fa-save");

        everyHour.append("<br>" + dayHour);
        saveBtn.append(Icon);
        timeBlock.append(everyHour, input, saveBtn);
        blockContainerEl.append(timeBlock);



    }






});