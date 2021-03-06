//setting planner date to current 
var todayDisplay = moment().format("dddd, MMMM Do YYYY");
$("#currentDay").text(todayDisplay)

//setting hour to current 
var currentHour = moment().format('HH');
console.log(currentHour);

//now change color based on the hours past present and future
changeColor();
//if the current hour is less than the value of the timeblock, it will grey out
//if the current hour is more than the value of the timeblock, it will blue out
//if the current hour is equal to the value of the timeblock, it will yellow out
if (currentHour < timeBlock){
$()
}
if (currentHour > timeBlock ){

}
if (currentHour === timeBlock){

}


