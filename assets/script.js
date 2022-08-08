// variables  
var saveBtn = document.querySelector('.saveBtn');
var eventName = document.getElementsByClassName('row') 
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



var readData = JSON.parse(localStorage.getItem('eventSaved')) 
var savedData = {}

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
    // some console log to make sure its logging accurately
        console.log(event.target)
        console.log($(event.target).siblings('input'))
        console.log($(event.target).siblings('input').val())
        var userEvent = $(event.target).siblings('input').val()
        savedData[event.target.id] = userEvent

        localStorage.setItem('eventSaved', JSON.stringify(savedData));
}


// get the event to display in the corresponding row/hour after page is refreshed
function displayEvent(event) {
// when pulling from empty object, display event or if it the corresponding hour is empty, display 'Event'
    eventNine.value = event.nineAm || 'Event'
    eventTen.value = event.tenAm || 'Event'
    eventEleven.value = event.elevenAm || 'Event'
    eventTwelve.value = event.twelvePm || 'Event'
    eventOne.value = event.onePm || 'Event'
    eventTwo.value = event.twoPm || 'Event'
    eventThree.value = event.threePm || 'Event'
    eventFour.value = event.fourPm || 'Event'
    eventFive.value = event.fivePm || 'Event'
}

$('.saveBtn').click(saveEvent)

 // When the init function is executed, the code inside showEvent function will also execute
function init() {
    if (readData !== null) {
        savedData = readData
        displayEvent(savedData);
    } 
}
  
 init();

