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
// 2635. Apply Transform Over Each Element in Array (First solved problem without any help and from the first time )
const map = function (arr, fn) {
  let newArr = [];
  for (let i = 0; i < arr.length; i++) {
    const val = fn(arr[i], i);
    newArr.push(val);
  }
  return newArr;
};

// ---------------------------------------------------------------------------------------------------
// 2667. Create Hello World Function
const createHelloWorld = function () {
  return function (...args) {
    return 'Hello World';
  };
};

// ---------------------------------------------------------------------------------------------------
// 2677. Chunk Array
const chunk = function (arr, size) {
  let newArr = [];
  for (let i = 0; i < arr.length; i += size) {
    newArr.push(arr.slice(i, i + size));
  }

  return newArr;
};

// ---------------------------------------------------------------------------------------------------
// 2703. Return Length of Arguments Passed
const argumentsLength = function (...args) {
  return args.length;
};

// ---------------------------------------------------------------------------------------------------
// 2723. Add Two Promises
const addTwoPromises = async function (promise1, promise2) {
  const [v1, v2] = await Promise.all([promise1, promise2]);

  return v1 + v2;
};

// ---------------------------------------------------------------------------------------------------
// 2704. To Be Or Not To Be
const expect = function (val) {
  return {
    toBe: (params) => {
      if (val !== params) throw new Error('Not Equal');
      else return true;
    },
    notToBe: (params) => {
      if (val === params) throw new Error('Equal');
      else return true;
    },
  };
};

// ---------------------------------------------------------------------------------------------------
// 2666. Allow One Function Call
const once = function (fn) {
  let hasBeenCalled = false;
  let result;
  return function (...args) {
    if (!hasBeenCalled) {
      result = fn(...args);
      hasBeenCalled = true;
      return result;
    } else {
      return undefined;
    }
  };
};

// ---------------------------------------------------------------------------------------------------
// 2695. Array Wrapper
const ArrayWrapper = function (nums) {
  this.array = nums;
};

ArrayWrapper.prototype.valueOf = function () {
  return this.array.reduce((acc, cur) => acc + cur, 0);
};

ArrayWrapper.prototype.toString = function () {
  return JSON.stringify(this.array);
};

// ---------------------------------------------------------------------------------------------------
// 2724. Sort By
const sortBy = function (arr, fn) {
  return arr.sort((a, b) => fn(a) - fn(b));
};

// ---------------------------------------------------------------------------------------------------
// 2648. Generate Fibonacci Sequence
const fibGenerator = function* () {
  let first = 0;
  let second = 1;

  while (true) {
    yield first;
    let value = first + second;
    first = second;
    second = value;
  }
};

// ---------------------------------------------------------------------------------------------------
// 2726. Calculator with Method Chaining
class Calculator {
  constructor(value) {
    this.result = value;
  }
  add(value) {
    this.result += value;
    return this;
  }
  subtract(value) {
    this.result -= value;
    return this;
  }
  multiply(value) {
    this.result *= value;
    return this;
  }
  divide(value) {
    if (value === 0) {
      throw new Error('Division by zero is not allowed');
    } else {
      this.result /= value;
      return this;
    }
  }
  power(value) {
    this.result = Math.pow(this.result, value);
    return this;
  }
  getResult() {
    return this.result;
  }
}

// ---------------------------------------------------------------------------------------------------
// 2726. Calculator with Method Chaining
