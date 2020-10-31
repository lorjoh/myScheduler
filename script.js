$(document).ready(function () {
    //create currentday and time
    var currentDay = moment().format('dddd, MMMM Do');
    $("#currentDay").append(currentDay);
    var i = 0;
    var businessHours = 10;
    var blockContainerEl = $(".container");
    var nowHour = moment().hour();
    console.log(nowHour);
    var inputArray = [];





    renderTimeBlocks();
    // getInput();
     

    function renderTimeBlocks() {

        for (; i < businessHours; i++) {

            var eachHour = moment().startOf('day').hour(i + 8).hour();
            console.log(eachHour);
            var timeBlock = $("<div>").addClass("row").attr("data-index", i);
            var hour = $("<h5>").addClass("hour col-md-2");
            hour.append("<br>" + eachHour + ":00");

            var inputEl = $("<input>").addClass("description col-md-8");

            if (eachHour === nowHour) {
                inputEl.addClass("present");
            }
            else if (eachHour < nowHour) {
                inputEl.addClass("past");
            }
            else if (eachHour > nowHour) {
                inputEl.addClass("future");
            }

            var saveBtn = $("<button>").addClass("saveBtn saveBtn,i:hover col-md-2");
            var Icon = $("<i>").addClass("fas fa-save");
            saveBtn.append(Icon);
            timeBlock.append(hour, inputEl, saveBtn);
            blockContainerEl.append(timeBlock);
        }
    }


   function getInput() {

        var savedInput = localStorage.getItem(time);

        if (savedInput !== null) {
            // textInput = savedInput;
            inputEl.html(savedInput);
        }
        else {
            return;
        }

    }


    $(".saveBtn").on("click", function (event) {
        // event.stopPropagation();
        
        if (event.target.matches("button")) {
            event.preventDefault();

            var textInput = $(this).siblings(".description").val();
            var time = $(this).parent().attr("data-index");

            localStorage.setItem(time, textInput);
            getInput();
        }



    });

});




