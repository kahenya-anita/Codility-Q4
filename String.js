//QN2
// There is a string S that consists only of non-zero digits (1-9). We can choose two adjacent digits in S and replace them with their sum, but only if the sum is not greatel
// than 9. For example, if S = "356",
// ", we can replace "35" with "8", achieving "86", but we
// cannot replace "56" with "11". The operation may be applied multiple times in order to produce a final answer.
// What is the lexicographically largest string we can obtain?
// A string made of digits is lexicographically larger than some other string if it has a larger digit at the first position on which they differ. For example, string "123" is lexicographically larger than "1134" as at the first position they differ, the first string h. digit "2" and the second string has digit "1".
// Write a function:
// function solution(S);
// that, given string S, returns the lexicographically largest string we can obtain from S.
// Examples:
// 1. Assuming S= "32581", it is optimal to replace "32" with "5" and "81" with "9". The function should return "559"
// •
// 2. Assuming S = "1119812",
// ", we can replace "11" with "2", obtaining "219812". Then we
// can replace "21" with "3" and "81" with "9". The function should return "3992".
// 3. Assuming S = "226228",
// ", we can replace "22" with "4" and "62" with "g",
// ", obtaining
// "4828". The function should return "4828"
// Write an efficient algorithm for the following assumptions:
// • the length of string S is within the range [1.200,000];
// • string S consists only of non-zero digits (1-9).

function solution(S) {
  let stack = [];

  for (let i = 0; i < S.length; i++) {
    // If the stack is not empty and the current element added to the top element of the stack is less than or equal to 9
    while (
      stack.length > 0 &&
      parseInt(S[i]) + parseInt(stack[stack.length - 1]) <= 9
    ) {
      let top = stack.pop(); // Pop the top element
      S[i] = (parseInt(S[i]) + parseInt(top)).toString(); // Replace current element with the sum
    }
    stack.push(S[i]); // Push the current element onto the stack
  }

  return stack.join(""); // Join the stack to get the final result
}
