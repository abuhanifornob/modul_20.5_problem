// Simple Interest
// This method is an easy one. It is calculated by multiplying the principal, rate of interest and the time period.

// The formula for Simple Interest (SI) is “principal x rate of interest x time period divided by 100” or (P x Rx T/100).

// Where,

// P= Principal amount; R = Rate of interest per annum; T= No. of periods (in years)

function simpleInterest(principalAmount, interestPerAnnum, periods) {
    let interstAmount = ((principalAmount * interestPerAnnum * periods) / 100);
    let totalAmount = principalAmount + interstAmount;
    return { interstAmount, totalAmount };
}
let amount = 100000;
let interest = 8;
let year = 5;

let funRetrunValue = simpleInterest(amount, interest, year);
const interstAmount = funRetrunValue.interstAmount;
const totalAmount = funRetrunValue.totalAmount;
console.log(`Toal Inter is :${interstAmount} \nTotal Amount With Interst: ${totalAmount}`);