//setting planner date to current 
var todayDisplay = moment().format("dddd, MMMM Do YYYY");
$("#currentDay").text(todayDisplay);


//now change color of rows based on the hours past present and future
function changeColor() {
    $(".timeValue").each(function(index,item){
//setting hour to current 
var currentHour = moment().format("HH");
console.log(currentHour);
var currentInt = parseInt(currentHour);
var timeBlock = parseInt($(item).attr("data-hour"));
//if the current hour is less than the value of the timeblock, it will grey out
//if the current hour is more than the value of the timeblock, it will blue out
//if the current hour is equal to the value of the timeblock, it will yellow out
if (currentInt < timeBlock){
    $(item).addClass("future");
}
else if (currentInt > timeBlock){
    $(item).addClass("past");
}
else {
    $(item).addClass("present");
    }
})};

changeColor();

//retain text information in timeblock by saving to local storage
//window.localStorage.setItem("textArea", JSON.stringify(userName) );