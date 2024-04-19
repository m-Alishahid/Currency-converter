#! /usr/bin/env node
import inquirer from "inquirer";
const currency = {
    USD: 1,
    EUR: 0.91,
    GBP: 0.76,
    INR: 74.57,
    PKR: 280
};
let userQuestion = await inquirer.prompt([
    {
        name: "from",
        message: "Enter From Currency",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"]
    },
    {
        name: "to",
        message: "Enter To Currency",
        type: "list",
        choices: ["USD", "EUR", "GBP", "INR", "PKR"]
    },
    {
        name: "amount",
        message: "Enter Your Amount",
        type: "number",
    }
]);
let fromAmount = currency[userQuestion.from]; //exchange rate
let toAmount = currency[userQuestion.to]; //exchange rate
let amount = userQuestion.amount;
let baseAmount = amount / fromAmount; //USD base currency
let convertAmount = baseAmount * toAmount;
console.log("Your converted amount:");
console.log(convertAmount);
// console.log(fromAmount);
// console.log(toAmount);
// console.log(amount);
