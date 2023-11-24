// There are N players (numbered from 0 to N-1) participating in a tournament. The K-th pla skill level is skills [K]. No two players have the same skill level.
// The tournament is played in rounds for as long as there are at least two players remainin single round of the tournament consists of one or more matches. In a match, two player: compete against each other. The loser is eliminated and the winner advances to the next round. In the first round player 0 faces player 1, player 2 faces player 3, etc. In the second round the winner of the match between player 0 and player 1 faces the winner of the mat between player 2 and player 3, etc. The player with the higher skill level wins the match.
// For example, for skills = [4, 2, 7, 3, 1, 8, 6, 5], the tournament is as follows (numbers in c
// are skill levels):
// final
// round 3:
// (8)
// round 2:
// 6
// round 1: (4)
// 3
// (3
// 8
// 6 5
// player: 0
// 1
// 2
// 3
// 4
// 5
// 7
// For each player, find the last round in the tournament in which they participate.
// Write a function:
// function solution(skills);
// that, given an array skills of N integers, returns an array results of N integers, where results[K] denotes the number of the last round in which the K-th player participates.
// Examples:
// 1. Given skills = 14, 2, 7, 3, 1, 8, 6, 5], the function should return [2, 1, 3, 1, 1, 3, 2, 1], as
// described above.
// 2. Given skills = [4, 2, 1, 3], the function should return [2, 1, 1, 2].
// 3. Given skills = [3, 4, 2, 1], the function should return [1, 2, 2, 11.
// Write an efficient algorithm for the following assumptions:
// • Nis an integer power of 2 within the range [2.262,144];

function solution(skills) {
    // Implement your solution here
    // Create a list of players with the skills, each palyer is an object
    // will have rounds until no player is left
    // keep track of rounds
    // return an array that represent the round number of eah player
    const participants = skills.map((skill, index) => ({ skill, index}))
    const resu = Array(skills.length)
    while(participants.length> 1){
        const nextSync = [];
        for(let i = 0; i < participants.length; i += 2){
            const partcipantOne = participants[i];
            const partcipantTwo = participants[i + 1];
            if (partcipantOne.skill > partcipantTwo.skill) {
                nextSync.push(partcipantOne);
                resu[partcipantTwo.index] = resu[partcipantOne.index] = Math.max(resu
                    [partcipantOne.index] || 0, resu[partcipantTwo.index] || 0) + 1;
            } else {
                nextSync.push(partcipantTwo);
                resu[partcipantOne.index] = resu[partcipantTwo.index] = Math.max(resu
                [partcipantOne.index] || 0, resu[partcipantTwo.index] || 0) + 1;
            }
        }
        participants.length = 0;
        participants.push(...nextSync);
    }
    return resu;
}