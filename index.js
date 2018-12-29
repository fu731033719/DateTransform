function date(date) {
  if (typeof date !== "object") throw new TypeError("Tiny wants a Date object!");
  return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
};

let date_now = new Date();
let obj = {}
let result = date(obj);
console.log(result);