import React from 'react'
import { startOfDay, endOfDay } from 'date-fns';
function StartEndTime() {
    // Get the starting and ending time for today
const today = new Date();
const start = startOfDay(today); // starting time for today
const end = endOfDay(today); // ending time for today

console.log(start); // Output: Mon Apr 25 2023 00:00:00 GMT-0400 (Eastern Daylight Time)
console.log(end);
  return (
    <>
   
    </>
  )
}

export default StartEndTime
