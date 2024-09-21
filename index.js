// 2620. Counter
// Given an integer n, return a counter function. This counter function initially returns n and then returns 1 more than the previous value every subsequent time it is called (n, n + 1, n + 2, etc).

// Solution:
const createCounter = function (n) {
  return function counter() {
    return n++;
  };
};

// ---------------------------------------------------------------------------------------------------
// 2621. Sleep
// Given a positive integer millis, write an asynchronous function that sleeps for millis milliseconds. It can resolve any value. It should return a promise that resolves after 100ms.

// Solution:
const sleep = async function sleep(millis) {
  await new Promise((resolve) => setTimeout(resolve, millis));
};

// ---------------------------------------------------------------------------------------------------
// 2619. Array Prototype Last
// Write code that enhances all arrays such that you can call the array.last() method on any array and it will return the last element. If there are no elements in the array, it should return -1.
// The Array.prototype.last() method is designed to return the last element of an array, or -1 if the array is empty. This can be useful in scenarios where you want to quickly access the last element of an array without having to write additional code to handle empty arrays.

// Solution:
Array.prototype.last = function () {
  return this.length > 0 ? this[this.length - 1] : -1;
};
