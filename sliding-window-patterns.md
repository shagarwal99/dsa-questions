### Common Sliding Window Templates

## Template 1: Fixed-size sliding window (length = `k`)

```js
function solveFixedWindow(nums, k) {
  let windowSum = 0;

  for (let i = 0; i < k; i++) {
    windowSum += nums[i];
  }

  let answer = windowSum; 

  // slide the window
  for (let i = k; i < nums.length; i++) {
    windowSum += nums[i] - nums[i - k]; 

    answer = Math.max(answer, windowSum);
  }

  return answer;
}
```
- [Maximum Average Subarray I](/sliding-window/maximum-average-subarray-I.js)
- [Number of Subarrays of Size K and Average ≥ Threshold](/sliding-window/number-of-subarrays-of-size-k-and-average-greater-than-or-equal-to-k.js)
- [Maximum Number of Vowels in a Substring of Given Length](/sliding-window/maximum-number-of-vowels-in-a-substring-of-given-length.js)
- [Permutation in String (fixed length window + frequency count)](/sliding-window/permutation-in-string.js)


## Template 2: Variable-size window with condition

```js
// Generic pattern:
// expand right pointer, maintain window state,
// shrink from left while condition is violated,
// update answer on each step.
function solveVariableWindow(arr, constraint) {
  let left = 0;
  let answer = 0;

  // maps / counters to track window state
  const freq = new Map(); // or new Set(), or count variables, etc.

  for (let right = 0; right < arr.length; right++) {
    // 1. expand window: include arr[right]
    const ch = arr[right];
    freq.set(ch, (freq.get(ch) || 0) + 1);

    // 2. while window is invalid, shrink from the left
    while (/* window violates constraint */) {
      const leftChar = arr[left];
      freq.set(leftChar, freq.get(leftChar) - 1);
      left++;
    }

    // 3. window is valid here; update answer
    answer = Math.max(answer, right - left + 1);
    // or some other function of the current window
  }

  return answer;
}
```

- [Max Consecutive Ones III](/sliding-window/max-consecutive-ones-III.js)
- [Longest Repeating Character Replacement](/sliding-window/longest-repeating-character-replacement.js)
- [Longest Substring Without Repeating Characters](/sliding-window/longest-substring-without-repeating-characters.js)
- [Maximum Erasure Value (maximum sum of unique subarray)](/sliding-window/maximum-erasure-value.js)
- [Minimum Window Substring](/sliding-window/minimum-window-substring.js)
- [Number of substring containing all 3 characters](/sliding-window/number-of-substring-containing-all-three-characters.js)
- [Permutation in string](/sliding-window/permutation-in-string.js)


**Note** : The problem Maximum Erasure is a good example where the classic approach to shift the window won't work. This problem forces a loop to shrink the window to the minimum possible valid window when at index i it becomes invalid.

## Template 3 : Count with exact match
The idea is to calculate the number of subarrays with at most k elements that satisfy the condition, and thensubtract the number of subarrays with at most k−1 elements to find the exact number of subarrays with exactly k elements that satisfy the condition.

```js
  function getCountWithAtMostK(nums,k){
    return count
  }

  function solve(nums,k){
    return getCountWithAtMostK(nums,k) - getCountWithAtMostK(nums,k-1)
  }
```

- [Binary Subarrays with sum](/sliding-window/binary-subarrays-with-sum.js)
- [Count Number of nice subarrays](/sliding-window/count-number-of-nice-subarrays.js)
- [Subarrays with k different integers](/sliding-window/subarrays-with-k-different-integers.js)