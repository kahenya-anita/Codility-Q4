// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');
// There are N Hospitals, numbered from 0 to N-1. You are given a schedule of work in each of the hospitals for the following M days. The schedule is provided in the form of a 2 dimensional array A Containing N rows, each row representing the schedule of one hospital, and M columns, each column representing one day. Integer A[K][L] (for K within the range [0..N-1] and L within the range [0..M-1] represents the ID of the doctor working at hospital K on Day L. Note that sometimes an individual doctor may work at more than one hospital even on the same day.

//     write a function to to find the number of doctors working at more than one hospital.

//     example :
//     0 1 2
//     0. 1 2 2
//     1 3 1 4

//     Given A[[1,2,2],[3,1,4]] , the function should return 1.
function solution(A) {
  let op = 0;
  const docToHosp = new Map();

  for (let i = 0; i < A.length; i++) {
    for (let j = 0; j < A[i].length; j++) {
      const key = A[i][j];
      let set = docToHosp.get(key);
      if (!set) {
        set = new Set();
      }
      set.add(i);
      docToHosp.set(key, set);
    }
  }

  for (const entry of docToHosp.entries()) {
    if (entry[1].size > 1) {
      op++;
    }
  }
  return op;
}
