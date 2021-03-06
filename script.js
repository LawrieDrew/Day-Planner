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
var timeBlock = parseInt($(item).data(index));
//if the current hour is less than the value of the timeblock, it will yellow out
//if the current hour is more than the value of the timeblock, it will blue out
//if the current hour is equal to the value of the timeblock, it will grey out
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

//recheck for changing time to adjust color of timeblock accordingly 
var timeCheck = window.setInterval(function(){
    changeColor();
        }, 1000);

//make save buttons...save!
$(".saveBtn").on("click", saveText)

//retain text information in timeblock by saving to local storage

function saveText(){
    var id = $(text).parent().prev().data(id)
    var text = $("#" + id).val();
    localStorage.setItem("textArea", JSON.stringify(text) );
};

//clear and reset
$("#clearBtn").on("click", function(){
    $(".textarea").val("");
    localStorage.clear();
  });

