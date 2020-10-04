$(document).ready(function () {
    //create currentday and time
    var currentDay = moment().format('dddd, MMMM Do');
    $("#currentDay").append(currentDay);

    var i = 0;
    var dayHours = 24;
    var blockContainerEl = $(".container");

    getInput();

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
            var input = $("<input>").addClass("description col-md-8");
            
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
            saveBtn.append(Icon);
            timeBlock.append(everyHour, input, saveBtn);
            blockContainerEl.append(timeBlock);
        }
    }

    function getInput() {
        var savedInput = JSON.parse(localStorage.getItem("description"));
      if (savedInput != null){
          input.textContent = savedInput;
      }
        createTimeBlocks();
    }
 
    $(".saveBtn").on("click", function (event) {
        event.preventDefault();
        var inputText = JSON.stringify(input.value.trim());
        if (inputText === "") {
            return;
          }
         localStorage.setItem("description", inputText);  
            createTimeBlocks();
       

    });










});