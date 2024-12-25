/*
Time Conversion
Se recibe un String con una hora en particular en formato AM/PM
devolver un String con esa misma hora convertida a 24hs, 
teniendo en cuenta que 12 AM son 00 en el formato de 24 hs.
*/

function convertTo24HourFormat(time) {
  let [hour, timeSign] = time.split(" ");
  let [hours, minutes] = hour.split(":").map(Number);
  if (timeSign === "AM" && hours == 12) {
    hours = 0;
  } else if (timeSign == "PM" && hours !== 12) {
    hours = (Number(hours) + 12).toString();
  }
  const formattedMinutes = minutes.toString().padStart(2, "0");
  return [hours, formattedMinutes].join(":");
}

console.log(convertTo24HourFormat("07:05 PM")); // "19:05"
console.log(convertTo24HourFormat("12:00 AM")); // "00:00"
console.log(convertTo24HourFormat("12:00 PM")); // "12:00"
console.log(convertTo24HourFormat("01:15 AM")); // "01:15"
