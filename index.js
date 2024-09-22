// 2620. Counter
const createCounter = function (n) {
  return function counter() {
    return n++;
  };
};

// ---------------------------------------------------------------------------------------------------
// 2621. Sleep
const sleep = async function sleep(millis) {
  await new Promise((resolve) => setTimeout(resolve, millis));
};

// ---------------------------------------------------------------------------------------------------
// 2619. Array Prototype Last

// Solution:
Array.prototype.last = function () {
  return this.length > 0 ? this[this.length - 1] : -1;
};

// ---------------------------------------------------------------------------------------------------
// 2665. Counter II
// const createCounter = function (init) {
//   let p = init;
//   return {
//     increment: () => ++p,
//     decrement: () => --p,
//     reset: () => (p = init),
//   };
// };

// ---------------------------------------------------------------------------------------------------
// 2626. Array Reduce Transformation
const reduce = function (nums, fn, init) {
  let x = init;
  for (let i = 0; i < nums.length; i++) {
    x = fn(x, nums[i]);
  }
  return x;
};

// ---------------------------------------------------------------------------------------------------
// 2634. Filter Elements from Array
const filter = function (arr, fn) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (fn(arr[i], i)) {
      newArr.push(arr[i]);
    }
  }
  return newArr;
};

// ---------------------------------------------------------------------------------------------------
// 2629. Function Composition
const compose = function (functions) {
  if (functions.length === 0) {
    return function (x) {
      return x;
    };
  }

  return functions.reduceRight(function (prevFn, nextFn) {
    return function (x) {
      return nextFn(prevFn(x));
    };
  });
};

// ---------------------------------------------------------------------------------------------------
// 2634. Filter Elements from Array
