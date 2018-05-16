



function date() {
  // grab current time and date
   var now = new Date();
   // grab hours
   var hours = now.getHours();
  // convert from military to standard hour format
   if (hours > 12) {hours = hours - 12;
   }
// grab minutes
   var minutes = now.getMinutes();
   if (minutes < 10) {minutes = "0" + minutes}
   // grab seconds
   var seconds = now.getSeconds();
   if (seconds <10) {seconds = "0" + seconds}
// list out the time for clock
   var time = hours + ":" + minutes + ":" + seconds;

  // grab h2 for clock
  var clock = document.getElementById("clock")
  clock.innerHTML = time;
   // clock("time").textContent;
// run function every second to refresh data
setTimeout(function() {
  date();
}, 1000)
}

   setTimeout(function() {
     date();
   }, 1000)
