// variables  
var saveBtn = document.querySelector('.saveBtn');
var eventName = document.getElementsByClassName('row')//class row 
var eventNine = document.getElementById ('hourNine')
var eventTen = document.getElementById ('hourTen')
var eventEleven = document.getElementById ('hourEleven')
var eventTwelve = document.getElementById ('hourTwelve')
var eventOne = document.getElementById ('hourOne')
var eventTwo = document.getElementById ('hourTwo')
var eventThree = document.getElementById ('hourThree')
var eventFour = document.getElementById ('hourFour')
var eventFive = document.getElementById ('hourFive')
var displayDay = document.getElementById('currentDay')

//sets current time for hour slots
var currentTime = moment().format('H')
var displayColor = $(".row")

// displays current date in the header.
var currentDay = moment().format("MMM Do, YYYY");
$('#currentDay').text(currentDay)



var readData = JSON.parse(localStorage.getItem('eventSaved')) // rename var
var savedData = {}

if (readData !== null) {
    savedData = readData
} 

var arr = [{hour: 9, value: 'meeting'}, {hour: 10, value: 'coffee'}] // reference

// if statements corresponding to present now or future 
displayColor.each(function(i){
        // if moment == past classList.add('past')
        if (currentTime > i+9) {$(this).addClass('past')}
        // if moment == current classList.add('current')
        if (currentTime == i+9) {$(this).addClass('present')}
        // if moment == future classList.add('future')
        if (currentTime < i+9) {$(this).addClass('future')}
})

//setting event to local storage
function saveEvent (event) { 
        console.log(event.target)
        console.log($(event.target).siblings('input'))
        console.log($(event.target).siblings('input').val())
        var userEvent = $(event.target).siblings('input').val()
        savedData[event.target.id] = userEvent

        localStorage.setItem('eventSaved', JSON.stringify(savedData));
}

// get the event to display in the corresponding row/hour after page is refreshed
function displayEvent(event) {
    eventNine.value = event.nineAm
    eventTen.value = event.tenAm
    eventEleven.value = event.elevenAm 
    eventTwelve.value = event.twelvePm
    eventOne.value = event.onePm
    eventTwo.value = event.twoPm
    eventThree.value = event.threePm
    eventFour.value = event.fourPm
    eventFive.value = event.fivePm
}

$('.saveBtn').click(saveEvent)

 // When the init function is executed, the code inside showEvent function will also execute
function init() {
 displayEvent(savedData);
  }
  init();

