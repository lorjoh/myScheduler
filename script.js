$(document).ready(function () {
    //create currentday and time
    var currentDay = moment().format('dddd, MMMM Do');
    $("#currentDay").append(currentDay);
    var i = 0;
    var businessHours = 10;
    var blockContainerEl = $(".container");
    var nowHour = moment().format('h A');
    console.log(nowHour);
    var dayHour = moment().hour();


    console.log(dayHour);
    for (; i < businessHours; i++) {
        var eachHour = moment().startOf('day').hour(i + 8).format('h A');
        console.log(eachHour);
        var timeBlock = $("<div>").addClass("row");
        var hour = $("<h5>").addClass("hour col-md-2").attr("value", [eachHour]);
        hour.append("<br>" + eachHour);

        var inputEl = $("<input>").addClass("description col-md-8");
        nowHour = dayHour;

        if (eachHour === nowHour) {
            inputEl.addClass("present");
        }
        else if (eachHour < nowHour) {
            console.log("yes");
            inputEl.addClass("past");
        }
        else if (eachHour > nowHour){

            inputEl.addClass("future");
        }



        var saveBtn = $("<button>").addClass("saveBtn saveBtn,i:hover col-md-2");
        var Icon = $("<i>").addClass("fas fa-save");
        saveBtn.append(Icon);
        timeBlock.append(hour, inputEl, saveBtn);
        blockContainerEl.append(timeBlock);

    }

    function getInput() {
        var savedInput = localStorage.getItem("description");
        inputEl.HTML(savedInput);
    }


    $(".saveBtn").on("click", function showInput(event) {
        event.preventDefault();
        var textInput = inputEl.value;
        if (!textInput) {
            return;
        }
        localStorage.setItem("description", textInput);
        getInput();
    });


});




