// // 1.Given an array of order objects, return total revenue from completed orders and the name of the user who spent the most.
// const orders = [
//     { id: 1, user: "Aman", amount: 500, status: "completed" },
//     { id: 2, user: "Riya", amount: 300, status: "pending" },
//     { id: 3, user: "Aman", amount: 700, status: "completed" },
//     { id: 4, user: "Karan", amount: 200, status: "completed" }
// ];

// totalRev = 0;
// userSpendings = {};

// for (let i = 0; i < orders.length; i++) {
//     if (orders[i].status == "completed") {
//         totalRev += orders[i].amount
//         if (!userSpendings[orders[i].user]) {
//             userSpendings[orders[i].user] = 0;
//         }

//         userSpendings[orders[i].user] += orders[i].amount;

//     }
// }

// resultContainer = {};
// resultContainer["TotalRev"] = totalRev;
// // MODERN JS
// resultContainer["userMostSpend"] = Object.keys(userSpendings).reduce((a, b) =>
//     userSpendings[a] > userSpendings[b] ? a : b
// );

// console.log(resultContainer);

// // OPTIMIZED CODE BY AI

// let totalRev = 0;
// let userSpendings = {};
// let maxUser = null;
// let maxAmount = -1;

// for (const order of orders) {
//     if (order.status === "completed") {
//         totalRev += order.amount;

//         // Update user spending
//         userSpendings[order.user] = (userSpendings[order.user] || 0) + order.amount;

//         // Track max while accumulating
//         const currentTotal = userSpendings[order.user];
//         if (currentTotal > maxAmount) {
//             maxAmount = currentTotal;
//             maxUser = order.user;
//         }
//     }
// }

// const result = {
//     TotalRev: totalRev,
//     userMostSpend: maxUser
// };


// 2. Write a function that takes a sentence and returns an object containing the frequency of each word(case insensitive, ignore extra spaces).

// let sentence = "js is good and js is powerful";

// function wordFrequency(sentence) {
//     wordTrackingCount = {}
//     for (let word of sentence.split(" ")) {
//         if (!wordTrackingCount[word]) {
//             wordTrackingCount[word] = 1;
//         } else {
//             wordTrackingCount[word] += 1;
//         }
//     }
//     return wordTrackingCount;
// }

// let res = wordFrequency(sentence);
// console.log(res);

// 3. Write a function that takes an array and returns a new array containing only the duplicate values without repeating duplicates in the result.

// let arrContainer = [1, 2, 3, 4, 2, 5, 6, 3]
// function findDuplicates(arr) {
//     const seen = new Set();
//     const duplicates = new Set();

//     for (const item of arr) {
//         if (seen.has(item)) {
//             duplicates.add(item);  // Set ensures no repeats
//         } else {
//             seen.add(item);
//         }
//     }

//     return [...duplicates];  // Convert back to array
// }
// let res = findDuplicates(arrContainer);
// console.log(res);

