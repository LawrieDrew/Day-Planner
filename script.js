//setting planner date to current 
var todayDisplay = moment().format("dddd, MMMM Do YYYY");
$("#currentDay").text(todayDisplay);

//now change color of rows based on the hours past present and future
function changeColor() {
    $(".time-block").each(function(index,item){
        var textArea = $(item).find("textarea");
//setting hour to current 
//console.log("found index" + index);
var currentHour = moment().format("HH");
    //console.log(currentHour);
var currentInt = parseInt(currentHour);
var timeBlock = parseInt($(item).attr("data-hour"));
//if the current hour is less than the value of the timeblock, it will yellow out
//if the current hour is more than the value of the timeblock, it will blue out
//if the current hour is equal to the value of the timeblock, it will grey out
if (currentInt < timeBlock){
   $(textArea).addClass("future");
}
else if (currentInt > timeBlock){
   $(textArea).addClass("past");
}
else {
     $(textArea).addClass("present");
    }
})};

changeColor();

//recheck for changing time to adjust color of timeblock accordingly 
var timeCheck = window.setInterval(function(){
   changeColor();
       }, 1000);

//make save buttons...save!
//retain text information in timeblock by saving to local storage
function saveText(event){
   var buttonClicked = $(event.target);
var timeBlock = buttonClicked.parent();
console.log(JSON.stringify(buttonClicked));
console.log("====================");
console.log(JSON.stringify(timeBlock));
var timeBlockhour = $(timeBlock).attr("data-hour");

//When clicking directly on save button icon, user is calling on nested button class therefore I redefined timeblock to the next parent 
//when know user is clicking on unnested icon if button data hour attribute is undefined 


if (timeBlockhour === undefined){
    console.log("");
    timeBlock = timeBlock.parent();
    timeBlockhour = $(timeBlock).attr("data-hour");
};
console.log("I want to save" + timeBlockhour);
var textArea = $(timeBlock).find("textarea")
var textAreaValue = textArea.val();
console.log("I am saving txtarea value" + textAreaValue);
localStorage.setItem(timeBlockhour, JSON.stringify(textAreaValue) );
 //  console.log(JSON.stringify(event, null, 2))
};
$(".saveBtn").on("click", saveText)

window.onload = function(){
    $(".time-block").each(function(index,item){
        var textArea = $(item).find("textarea");
var timeBlockhour = parseInt($(item).attr("data-hour")); 
var valueToShow = localStorage.getItem(timeBlockhour) || "Nothing Scheduled."
textArea.val(valueToShow);
    });
}

//clear and reset
//$("#clearBtn").on("click", function(){
  //  $(".textarea").val("");
 //   localStorage.clear();
 // });

