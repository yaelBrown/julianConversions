const sampleDate = "2019-12-23";
const sampleDateLY = "1976-11-06";
const sampleJulian = 19323;

const leapYears = [1972,1976,1980,1984,1988,1992,1996,2000,2004,2008,2012,2016,2020]
const startDays = [1,32,60,91,121,152,182,213,244,274,305,335];

// console.log("This is start days length " + startDays.length);

const dateToJulian = (d) => {
  // Split parameter passed in and turn into an array
  temp = d.split('-');

  // Store values from date as strings in variables
  const y = temp[0];
  const m = temp[1];
  const day = temp[2] - 1;

  // Check if leap year
  let isLeapYear;

  leapYears.map( e => {
    if (parseInt(y) == e) {
      isLeapYear = true;
    }
  });

  (!isLeapYear) ? isLeapYear = false : "";

  // Add a day
  if (m >= 2 && isLeapYear) {
    day++;
  }

  // figure out day of year
  let dayOfYear = 0;
  dayOfYear = startDays[m - 1] + parseInt(day);

  console.log(dayOfYear);

  // Format number of days if smaller than 100 (and 10)
  let cc = "";

  if (dayOfYear < 100 && dayOfYear > 10) {
    console.log("this is running but shits not working")
    cc = "0" + dayOfYear;
  }

  if (dayOfYear < 10) {
    console.log("this other fsadfhits not working")
    cc = "00" + dayOfYear;
  }

   if (dayOfYear >= 100) {
    console.log("this is running but shits not working")
    cc = dayOfYear;
  }

  dayOfYear = cc;

  console.log("cc is = " + cc)
  console.log(cc)

  // Construct output
  let out;

  console.log("y is equal to " + y);

  out = y.slice(2,4);
  out += dayOfYear

  return out;
}



// console.log(dateToJulian(sampleDate));





var date = dateToJulian(sampleDate);
console.log("This is the julian date: " + date);



// var month_day =  date.substring(2,6);
// console.log("This is month_day: " + month_day); // string output

// switch(month_day) {
//   case when(parseInt(month_day) < startDays[1]):
//     console.log(startDays[1]);
//     break;
//   default:
//     console.log("No julian.");
// }




// function julianToDate(julian){
var date = dateToJulian(sampleDate);
var month_day = date.substring(2,6); //string out
var day = parseInt(month_day);


// console.log("This right here " + date);
console.log("This is: " + month_day);

if(day < startDays[1]){
  console.log("January " + day);
}else if(day < startDays[2]){
  console.log("February " + (day - startDays[1] + 1));
}else if(day < startDays[3]){
  console.log("March " + (day - startDays[2] + 1));
}else if(day < startDays[4]){
  console.log("April " + (day - startDays[3] + 1));
}else if(day < startDays[5]){
  console.log("May " + (day - startDays[4] + 1));
}else if(day < startDays[6]){
  console.log("June " + (day - startDays[5] + 1));
}else if(day < startDays[7]){
  console.log("July " + (day - startDays[6] + 1));
}else if(day < startDays[8]){
  console.log("August " + (day - startDays[7] + 1));
}else if(day < startDays[9]){
  console.log("September " + (day - startDays[8] + 1));
}else if(day < startDays[10]){
  console.log("October " + (day - startDays[9] + 1));
}else if(day < startDays[11]){
  console.log("November " + (day - startDays[10] + 1));
}else if(day < startDays[12]){
  console.log("December " + (day - startDays[11] + 1));
}else{
  console.log("bummer");
}
// }


// console.log(parseInt(month_day));

// switch(month_day) {
//     case when (month_day < 32):
//         console.log("This works!");
// }


//     case "Feb":
//         out += "February " + day + ", " + year;
//         return out;
//     case "Mar":
//         out += "March " + day + ", " + year;
//         return out;
//     case "Apr":
//         out += "April " + day + ", " + year;
//         return out;
//     case "May":
//         out += "May " + day + ", " + year;
//         return out;
//     case "Jun":
//         out += "June " + day + ", " + year;
//         return out;
//     case "Jul":
//         out += "July " + day + ", " + year;
//         return out;
//     case "Aug":
//         out += "August " + day + ", " + year;
//         return out;
//     case "Sep":
//         out += "September " + day + ", " + year;
//         return out;
//     case "Oct":
//         out += "October " + day + ", " + year;
//         return out;
//     case "Nov":
//         out += "November " + day + ", " + year;
//         return out;
//     case "Dec":
//         out += "December " + day + ", " + year;
//         return out;
//         }






// function julianToDate(julian) {

// var date = julianIntToDate(julian).toString();
// var day = date.substring(8,10);
// var month = date.substring(4,7);
// var year = date.substring(11,15);
// var out = "";





// switch(month) {
//     case "Jan":
//         out += "January " + day + ", " + year;
//         return out;
//     case "Feb":
//         out += "February " + day + ", " + year;
//         return out;
//     case "Mar":
//         out += "March " + day + ", " + year;
//         return out;
//     case "Apr":
//         out += "April " + day + ", " + year;
//         return out;
//     case "May":
//         out += "May " + day + ", " + year;
//         return out;
//     case "Jun":
//         out += "June " + day + ", " + year;
//         return out;
//     case "Jul":
//         out += "July " + day + ", " + year;
//         return out;
//     case "Aug":
//         out += "August " + day + ", " + year;
//         return out;
//     case "Sep":
//         out += "September " + day + ", " + year;
//         return out;
//     case "Oct":
//         out += "October " + day + ", " + year;
//         return out;
//     case "Nov":
//         out += "November " + day + ", " + year;
//         return out;
//     case "Dec":
//         out += "December " + day + ", " + year;
//         return out;
//         }
// }
