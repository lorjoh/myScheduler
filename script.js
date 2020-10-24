$(document).ready(function () {
    //create currentday and time
    var currentDay = moment().format('dddd, MMMM Do');
    $("#currentDay").append(currentDay);
    var i = 0;
    var j = 1;
    var businessHours = 10;
    var blockContainerEl = $(".container");
    var nowHour = moment().hour();
    console.log(nowHour);



    


    for (; i < businessHours; i++) {

        var eachHour = moment().startOf('day').hour(i+8).hour();
        console.log(eachHour);
        var timeBlock = $("<div>").addClass("row").attr("value", i);
        var hour = $("<h5>").addClass("hour col-md-2");
        hour.append("<br>" + eachHour + ":00");

        var inputEl = $("<input>").addClass("description col-md-8").attr("text", i);

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





        function getInput() {
            var savedInput = localStorage.getItem("description.text");
            if (savedInput !== null) {
                inputEl.html(savedInput);
            }
            else {
                inputEl.html("");
            }
            console.log(savedInput);
        }

        $(".saveBtn,text").on("click", function (event) {

            if (event.target.matches("button")) {

                event.preventDefault();
                // stop.event.Propagation();
                inputEl.value = $(this).parent().find("input").val();
                var textInput = inputEl.value;

                localStorage.setItem("description.text", textInput);
                console.log(textInput);
            }


        });
    }getInput();
});




