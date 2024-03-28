/*

The code below will craete and set date and assign it to the cookie

step 1: create Date
var newDate = new Date();

Step 2:
newDate.setTime(newDate.getTime() + 100000);

Step 3:
document.cookie = "custom2=value; expires="+ newDate.toUTCString()+";"

Step 4:
custom2=value; expires=Thu, 28 Mar 2024 02:43:09 GMT;

*/
