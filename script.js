function calculateTime() {
  let hours1 = parseInt(document.getElementById("hours1").value) || 0;
  let minutes1 = parseInt(document.getElementById("minutes1").value) || 0;
  let seconds1 = parseInt(document.getElementById("seconds1").value) || 0;

  let hours2 = parseInt(document.getElementById("hours2").value) || 0;
  let minutes2 = parseInt(document.getElementById("minutes2").value) || 0;
  let seconds2 = parseInt(document.getElementById("seconds2").value) || 0;

  let operation = document.getElementById("operation").value;

  let totalSeconds1 = hours1 * 3600 + minutes1 * 60 + seconds1;
  let totalSeconds2 = hours2 * 3600 + minutes2 * 60 + seconds2;

  let resultSeconds;
  if (operation === "add") {
      resultSeconds = totalSeconds1 + totalSeconds2;
  } else {
      resultSeconds = totalSeconds1 - totalSeconds2;
  }

  let resultHours = Math.floor(resultSeconds / 3600);
  resultSeconds %= 3600;
  let resultMinutes = Math.floor(resultSeconds / 60);
  resultSeconds %= 60;

  document.getElementById("result").innerText = `${resultHours} hr, ${resultMinutes} min, ${resultSeconds} sec`;
}

function calculateDate() {
  let startDate = new Date(document.getElementById("start-date").value);
  let operation = document.getElementById("date-operation").value;
  let addDays = parseInt(document.getElementById("add-days").value) || 0;
  let addHours = parseInt(document.getElementById("add-hours").value) || 0;
  let addMinutes = parseInt(document.getElementById("add-minutes").value) || 0;

  let totalSeconds = (addDays * 24 + addHours) * 3600 + addMinutes * 60;

  if (operation === "subtract") {
      totalSeconds = -totalSeconds;
  }

  let resultDate = new Date(startDate.getTime() + totalSeconds * 1000);

  let formattedDate = formatDate(resultDate);

  document.getElementById("date-result").innerText = `${formattedDate}`;
}

function formatDate(date) {
  if (isNaN(date)) {
    return "Invalid date";
  }
  let year = date.getFullYear();
  let monthNames = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];
  let month = monthNames[date.getMonth()];
  let day = String(date.getDate()).padStart(2, '0');
  let hours = String(date.getHours()).padStart(2, '0');
  let minutes = String(date.getMinutes()).padStart(2, '0');

  return `${day} ${month} ${year} at ${hours}:${minutes}`;
}