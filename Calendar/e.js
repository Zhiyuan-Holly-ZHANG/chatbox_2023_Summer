// Get the calendar div element
var calendar = document.getElementById("calendar");

// Create an array to hold the events
var events = [];

// Function to add events to the calendar
function addEvent() {
  // Get the date and event inputs
  var dateInput = document.getElementById("date");
  var eventInput = document.getElementById("event");

  // Create a new event object
  var event = {
    date: dateInput.value,
    event: eventInput.value
  };

  // Add the event to the events array
  events.push(event);

  // Clear the date and event inputs
  dateInput.value = "";
  eventInput.value = "";

  // Update the calendar with the new event
  updateCalendar();
}

// Function to update the calendar with the events
function updateCalendar() {
  // Clear the calendar
  calendar.innerHTML = "";

  // Get the current date
  var today = new Date();

  // Get the number of days in the current month
  var daysInMonth = new Date(today.getFullYear(), today.getMonth()+1, 0).getDate();

  // Get the first day of the current month
  var firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1).getDay();

  // Loop through each day of the month and create a calendar day element
  for (var i = 1; i <= daysInMonth; i++) {
    // Create a day element
    var day = document.createElement("div");
    day.classList.add("day");

    // Create a date element
    var date = document.createElement("div");
    date.classList.add("date");
    date.innerText = i;
    day.appendChild(date);

    // Create an events element
    var eventsList = document.createElement("ul");
    eventsList.classList.add("events");

    // Loop through the events for this date and add them to the events element
    for (var j = 0; j < events.length; j++) {
      if (events[j].date === formatDate(new Date(today.getFullYear(), today.getMonth(), i))) {
        var eventItem = document.createElement("li");
        eventItem.classList.add("event");
        eventItem.innerText = events[j].event;
        eventsList.appendChild(eventItem);
      }
    }

    day.appendChild(eventsList);

    // Add the day element to the calendar
    calendar.appendChild(day);
  }
}

// Function to format a date as "YYYY-MM-DD"
function formatDate(date) {
  var year = date.getFullYear();
  var month = ("0" + (date.getMonth() + 1)).slice(-2);
  var day = ("0" + date.getDate()).slice(-2);
  return year + "-" + month + "-" + day;
}

// Update the calendar when the page loads
updateCalendar();