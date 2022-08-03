// variables 
var saveBtn = document.getElementById('saveBtn');
var eventName1 = document.getElementById('eventName1')
var displayDay = document.getElementById('currentDay')

var currentDay = moment("2021-06-15").format("MMM Do, YYYY");
$('#cuurentDay').text(currentDay)



// if statements corresponding to present now or future 
    // if moment == past classList.add('past')
    // else if moment == current classList.add('current')
    // else if moment == future classList.add('future')
    // add current time to the rows and set on disaply none




//set and get local storage
function saveEvent () {
        var eventSaved = eventName1.value  
        localStorage.setItem('eventSaved', JSON.stringify(eventSaved));
}

function showEvent () {
    var lastEvent = JSON.parse(localStorage.getItem('eventSaved'))
    if (lastEvent !== null) {
        document.getElementById('eventName1').textContent = lastEvent.event
    } else {
        return;
    }
}

// event listener to set local storage
saveBtn.addEventListener('click', function(event) {
    console.log('test')
    event.preventDefault();
    saveEvent();
    showEvent();
});


function init() {
 // When the init function is executed, the code inside showEvent function will also execute
  showEvent();
  }
  init();