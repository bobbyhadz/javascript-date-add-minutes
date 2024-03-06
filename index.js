// EXAMPLE 1 - Add Minutes to a Date in JavaScript

function addMinutes(date, minutes) {
  date.setMinutes(date.getMinutes() + minutes);

  return date;
}

// ✅ Add 10 minutes to the current date
const result1 = addMinutes(new Date(), 10);
console.log(result1); // 👉️ 2023-07-27T17:24:52.897Z

// -----------------------------------------------

// ✅ Add 20 minutes to a different date
const date = new Date('2024-03-14T09:32:03.000Z');
const result2 = addMinutes(date, 20);
console.log(result2); // 👉️ 2024-03-14T09:52:03.000Z

// ------------------------------------------------------------------

// // EXAMPLE 2 - Add minutes to Date without mutation

// function addMinutes(date, minutes) {
//   const dateCopy = new Date(date.getTime());

//   dateCopy.setMinutes(dateCopy.getMinutes() + minutes);

//   return dateCopy;
// }

// const date = new Date('2024-03-14T09:32:03.000Z');

// const result = addMinutes(date, 20);
// console.log(result); // 👉️ 2024-03-14T09:52:03.000Z

// console.log(date); // 👉️ 2024-03-14T09:32:03.000Z

// ------------------------------------------------------------------

// // EXAMPLE 3 - Add Minutes to a Date using date-fns

// import {addMinutes} from 'date-fns';

// const date = new Date('2024-03-14T09:32:03.000Z');

// const result1 = addMinutes(date, 20);
// console.log(result1); // 👉️ 2024-03-14T09:52:03.000Z

// const result2 = addMinutes(date, 32);
// console.log(result2); // 👉️ 2024-03-14T10:04:03.000Z

// console.log(date); // 👉️ 2024-03-14T09:32:03.000Z

// ------------------------------------------------------------------

// // EXAMPLE 4 - Add Minutes to a Date using moment.js

// import moment from 'moment';

// const date = new Date('2024-03-14T09:32:03.000Z');

// const result1 = moment(date).add(20, 'minutes');
// console.log(result1); // 👉️ 2024-03-14T09:52:03.000Z

// const result2 = moment(date).add(31, 'minutes');
// console.log(result2); // 👉️ 2024-03-14T10:04:03.000Z

// console.log(date); // 👉️ 2024-03-14T09:32:03.000Z
