// In this method, you earn interest on the principal, and you earn interest on the interest also. Many banks offer compound interest on fixed deposits, but you should ensure that you get a good interest rate.

// For example, if a bank offers 8% p.a. for a 5-year deposit where the interest is compounded annually. So, if you invest Rs.10,000, we can calculate the interest as given below:

// Year 1
// First, we use the simple interest method for the first year.

// 10,000x8x1/100 = Rs.800

// So the interest earned for the first year is Rs.800.

// This amount is added back to the principal. So the principal for the second year becomes Rs.10,800.


// Year 2
// Now, in the second year you will earn 8% on Rs.10,800.

// 10,800x8x1/100 = Rs.864

// You earn Rs.864 interest. This is again added back to the principal. So now your deposit has Rs.11,644.

// Like this, we can calculate the compound interest for the next three years. But some banks compound interest monthly, quarterly and half-yearly. So, instead of calculating it like this, we can use a simple formula which multiplies the principal amount with the interest rate raised to the number of periods in years.

// Compound Interest (CI) = P {(1 + i/100)n – 1}

// Where, P = Principal amount; n = number of years; i = rate of interest per period

// Therefore, in the example above, you earn

// CI= 10,000 {(1+8/100)5 – 1} = Rs 4,693

// Total amount = Rs 14,693


function compoundInterst(principalAmount, interestPerPeriod, numberOfYear) {
    let interstAmount = principalAmount * (((1 + (interestPerPeriod / 100)) * numberOfYear) - 1);
    let totalAmount = principalAmount + interstAmount;
    return { interstAmount, totalAmount };
}
let principalAmount = 10000;
let interest = 8;
let year = 5;
const bankRetrunAmount = compoundInterst(principalAmount, interest, year);
console.log(`Interest Amount is: ${bankRetrunAmount.interstAmount} \nToal Amount is: ${bankRetrunAmount.totalAmount}`)