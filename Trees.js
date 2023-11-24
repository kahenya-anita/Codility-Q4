// There are N trees (numbered from 0 to N-1) in a forest. The K-th tree is located at coordinates X|K|, Y|K|).
// We want to build the widest possible vertical path, such that there is no tree on it. The path must be built somewhere between a leftmost and a rightmost tree, which means that the width of the path cannot be infinite.
// What is the width of the widest possible path that can be built?
// Write a function:
// function solution(X, Y);
// that, given two arrays X and Y consisting of N integers each, denoting the positions of trees, returns the width of the widest possible path that can be built.
// Examples:
// 3.
// 1. Given X=[1, 8, 7, 3, 4, 1, 8], Y=[6, 4, 1, 8, 5, 1, 71, the function should return 3


function widestPath(x, y) {
    let difference = 0;
    const sortedX = [...x].sort((a, b) => a - b);

    for (let i = 0; i < sortedX.length - 1; i++) {
        const diff = sortedX[i + 1] - sortedX[i];
        if (diff > difference) {
            difference = diff;
        }
    }

    return difference;
}

// Example usage:
const X = [1, 8, 7, 3, 4, 1, 8];
const Y = [6, 4, 1, 8, 5, 1, 7];
console.log(widestPath(X, Y));  // Output: 3
