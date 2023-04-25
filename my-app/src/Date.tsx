import React from 'react';
import { format } from 'date-fns-tz';

function MyComponent() {
  const date = new Date();
  const timeZone = 'Asia/Kolkata';
  const formattedDate = format(date ,'dd/MM/yyyy hh:mm:ss a zzz', { timeZone });
  const formattedDate1 = format(date,  '  dd MMM yyyy hh:mm:ss a zzz', { timeZone });
  const formattedDate2 = format(date,  '  dd MMMM yyyy hh:mm:ss a zzz', { timeZone });
  const formattedDate3 = format(date,  '  dd MMMM yyyy hh:mm:ss a zzz', { timeZone });
  const formattedDate4 = format(date,  '   hh:mm:ss a zzz', { timeZone });

  return (
    <div>
      <p>Formatted date: {formattedDate}</p>
      <p>Formate2: {formattedDate1}</p>
      <p>Formate2: {formattedDate2}</p>
      <p>Formate2: {formattedDate3}</p>
      <p>Formate2: {formattedDate4}</p>
    </div>
  );
}

export default MyComponent;



