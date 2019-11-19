function dateToJulianNumber(d) {
  // convert a Gregorian Date to a Julian number. 
  //    S.Boisseau / BubblingApp.com / 2014
  var x = Math.floor((14 - d.getMonth())/12);
  var y = d.getFullYear() + 4800 - x;
  var z = d.getMonth() - 3 + 12 * x;

  var n = d.getDate() + Math.floor(((153 * z) + 2)/5) + (365 * y) + Math.floor(y/4) + Math.floor(y/400) - Math.floor(y/100) - 32045;

  return n;
}   

// assert September 30 2014 -> 2456931
console.log(dateToJulianNumber(new Date(2014,9,30)).toString());
// console.log(new Date(2019,11,18)); 




function toDate(d) {
  var date 

  return (x + "," + y + "," + 30); 
}



// switch(month) {
//     case "Jan":
//         out += "January " + day + ", " + year;
//         return out;
//         break; 
//     case "Feb": 
//         out += "February " + day + ", " + year;
//         return out;
//         break; 
//     case "Mar": 
//         out += "March " + day + ", " + year;
//         return out;
//         break; 
//     case "Apr":
//         out += "April " + day + ", " + year;
//         return out;
//         break; 
//     case "May":
//         out += "May " + day + ", " + year;
//         return out;
//         break; 
//     case "Jun":
//         out += "June " + day + ", " + year;
//         return out;
//         break; 
//     case "Jul":
//         out += "July " + day + ", " + year;
//         return out;
//         break; 
//     case "Aug":
//         out += "August " + day + ", " + year;
//         return out;
//         break;  
//     case "Sep":
//         out += "September " + day + ", " + year;
//         return out;
//         break; 
//     case "Oct":
//         out += "October " + day + ", " + year;
//         return out;
//         break; 
//     case "Nov":
//         out += "November " + day + ", " + year;
//         return out;
//         break; 
//     case "Dec":
//         out += "December " + day + ", " + year;
//         return out;
//         break; 
//         } 


// console.log(date(2014));




function julianIntToDate(n) {
  // convert a Julian number to a Gregorian Date.
  //    S.Boisseau / BubblingApp.com / 2014
  var a = n + 32044;
  var b = Math.floor(((4*a) + 3)/146097);
  var c = a - Math.floor((146097*b)/4);
  var d = Math.floor(((4*c) + 3)/1461);
  var e = c - Math.floor((1461 * d)/4);
  var f = Math.floor(((5*e) + 2)/153);

  var D = e + 1 - Math.floor(((153*f) + 2)/5);
  var M = f + 3 - 12 - Math.round(f/10);
  var Y = (100*b) + d - 4800 + Math.floor(f/10);

  return new Date(Y,M,D);
}

// assert 2456931 -> September 30 2014
// console.log(julianIntToDate(2456931).toString());


// --------------------------------------- //

var json_date; /// take in jSON date properties

// var julian = 2456931; 
// var date = julianIntToDate(julian).toString();

// console.log(date); 



function julianToDate(julian) {

var date = julianIntToDate(julian).toString();
var day = date.substring(8,10);
var month = date.substring(4,7);
var year = date.substring(11,15);
var out = "";

switch(month) {
  case "Jan":
      out += "January " + day + ", " + year;
      return out;
      break; 
  case "Feb": 
      out += "February " + day + ", " + year;
      return out;
      break; 
  case "Mar": 
      out += "March " + day + ", " + year;
      return out;
      break; 
  case "Apr":
      out += "April " + day + ", " + year;
      return out;
      break; 
  case "May":
      out += "May " + day + ", " + year;
      return out;
      break; 
  case "Jun":
      out += "June " + day + ", " + year;
      return out;
      break; 
  case "Jul":
      out += "July " + day + ", " + year;
      return out;
      break; 
  case "Aug":
      out += "August " + day + ", " + year;
      return out;
      break;  
  case "Sep":
      out += "September " + day + ", " + year;
      return out;
      break; 
  case "Oct":
      out += "October " + day + ", " + year;
      return out;
      break; 
  case "Nov":
      out += "November " + day + ", " + year;
      return out;
      break; 
  case "Dec":
      out += "December " + day + ", " + year;
      return out;
      break; 
      } 
}

console.log(julianToDate(2456931));


