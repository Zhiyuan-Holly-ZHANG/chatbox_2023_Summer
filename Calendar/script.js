// Get the current date
var today = new Date();

// Get the number of days in the current month
var daysInMonth = new Date(today.getFullYear(), today.getMonth()+1, 0).getDate();

// Get the first day of the current month
var firstDayOfMonth = new Date(today.getFullYear(), today.getMonth(), 1).getDay();

// Get the calendar div element
var calendar = document.getElementById("calendar");

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
  var events = document.createElement("div");
  events.classList.add("events");
  day.appendChild(events);

  // Add the day element to the calendar
  calendar.appendChild(day);
}

// Add some sample events
var event1 = document.createElement("div");
event1.classList.add("event");
event1.innerText = "Meeting with John";
calendar.children[firstDayOfMonth + 6].getElementsByClassName("events")[0].appendChild(event1);

var event2 = document.createElement("div");
event2.classList.add("event");
event2.innerText = "Lunch with Sarah";
calendar.children[firstDayOfMonth + 13].getElementsByClassName("events")[0].appendChild(event2);

var event3 = document.createElement("div");
event3.classList.add("event");
event3.innerText = "Movie night";
calendar.children[firstDayOfMonth + 20].getElementsByClassName("events")[0].appendChild(event3);