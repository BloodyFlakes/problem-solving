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
<<<<<<< HEAD
// 1. Two Sum
const twoSum = function (nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return null;
};

// ---------------------------------------------------------------------------------------------------
// 9. Palindrome Number
const isPalindrome = function (x) {
  const reversedNumber = parseInt(x.toString().split('').reverse().join(''));
  return reversedNumber === x;
};

// ---------------------------------------------------------------------------------------------------
// 13. Roman to Integer
const romanToInt = function (s) {
  let answer = 0;
  const roman = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  for (let i = 0; i < s.length - 1; i++) {
    if (roman[s[i]] < roman[s[i + 1]]) {
      answer -= roman[s[i]];
    } else {
      answer += roman[s[i]];
    }
  }
  return answer + roman[s[s.length - 1]];
};

// ---------------------------------------------------------------------------------------------------
// 7. Reverse Integer
const reverse = function (x) {
  const sign = Math.sign(x);

  const newNum = parseInt(Math.abs(x).toString().split('').reverse().join(''));
  if (newNum > Math.pow(2, 31) - 1 || newNum < -Math.pow(2, 31)) {
    return 0;
  } else {
    return newNum * sign;
  }
};

// ---------------------------------------------------------------------------------------------------
// 3110. Score of a String
const scoreOfString = function (s) {
  let score = 0;
  for (let i = 0; i < s.length - 1; i++) {
    score += Math.abs(s.charCodeAt(i) - s.charCodeAt(i + 1));
  }
  return score;
};

// ---------------------------------------------------------------------------------------------------
// 20. Valid Parentheses
const isValid = function (s) {
  const stack = [];
  const mapping = {
    ')': '(',
    '}': '{',
    ']': '[',
  };

  for (const c of s) {
    if (Object.values(mapping).includes(c)) {
      stack.push(c);
    } else if (mapping.hasOwnProperty(c)) {
      if (!stack.length || mapping[c] !== stack.pop()) {
        return false;
      }
    }
  }
  return stack.length === 0;
};

// ---------------------------------------------------------------------------------------------------
// 14. Longest Common Prefix
const longestCommonPrefix = function (strs) {
  let pref = strs[0];
  let prefLen = pref.length;

  for (let i = 1; i < strs.length; i++) {
    let s = strs[i];
    while (pref !== s.substring(0, prefLen)) {
      prefLen--;
      if (prefLen === 0) {
        return '';
      }
      pref = pref.substring(0, prefLen);
    }
  }
  return pref;
};

// ---------------------------------------------------------------------------------------------------
// 58. Length of Last Word
const lengthOfLastWord = function (s) {
  const str = s.trim().split(' ');
  return str[str.length - 1].length;
};
=======
// 2726. Calculator with Method Chaining
>>>>>>> c285335080e067d8a62278c0c178c2135e2ff9b8
