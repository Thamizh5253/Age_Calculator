function getYear() {
  // Get the date value from the input
  const selectedDate = document.getElementById("datepicker").value;

  // Parse the date to a JavaScript Date object
  const dateObject = new Date(selectedDate);

  const uyear = dateObject.getFullYear();
  const uday = dateObject.getDate();
  const umonth = dateObject.getMonth() + 1;

  const currentDate = new Date();

  // Extract day, month, and year from the current date
  const day = currentDate.getDate();
  const month = currentDate.getMonth() + 1;
  const year = currentDate.getFullYear();
  if (year == uyear) {
    var y = 0;
  } else {
    var y = year - uyear - 1;
  }
  var leapy = uyear - (uyear % 4);
  co = 0;
  for (let i = leapy; i < year; i += 4) {
    co++;
  }
  co--;
if (y === 0) {
    var mon = month - Math.abs(umonth);
    console.log(umonth);
  } else {
    var mon = y * 12 + month + Math.abs(umonth - 12);
  }
  // var mon = y * 12 + month + Math.abs(umonth - 12);
  // const dob = new Date(dobInput);

  // Calculate the difference in milliseconds
  const timeDifference = currentDate - dateObject;

  // Convert the difference to days
  const d = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  const h = Math.floor(timeDifference / (1000 * 60 * 60));
  const m = Math.floor(timeDifference / (1000 * 60));
  const sec = Math.floor(timeDifference / 1000);
  document.getElementById("year").innerText = `Total Year: ${y}`;
  document.getElementById("month").innerText = `Total Month: ${mon}`;
  document.getElementById("day").innerText = `Total Day: ${d}`;
  document.getElementById("hour").innerText = `Total Hour: ${h}`;
  document.getElementById("min").innerText = `Total Minute: ${m}`;
  document.getElementById("sec").innerText = `Total Second: ${sec}`;
}
