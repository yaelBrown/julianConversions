// 19323 = November 19, 2019
const sampleDate = "2019-01-01";
const sampleDateLY = "1976-11-06";
const sampleJulian = 19323;

const leapYears = [1972,1976,1980,1984,1988,1992,1996,2000,2004,2008,2012,2016,2020]
const startDays = [1,32,60,91,121,152,182,213,244,274,305,335];

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

