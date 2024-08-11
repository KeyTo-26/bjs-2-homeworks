'use strict'
function solveEquation(a, b, c) {
  let arr = [];
  let d = b**2 - 4 * a * c;

  if (d < 0) {
    arr = [];
  } else if (d === 0) {
    arr = [-b / (2 * a)];
  } else if (d > 0) {
    arr = [(-b + Math.sqrt(d)) / (2 * a), (-b - Math.sqrt(d)) / (2 * a)];
}

  return arr;
}

function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let totalAmount;
  let P = +percent/100/12;
  let S = +amount - +contribution;
  let n = countMonths;
  let monthlyPayment;
  
  monthlyPayment = S * (P + (P / (((1 + P)**n) - 1)));

  totalAmount = monthlyPayment * countMonths;

  return Math.round(+totalAmount * 100)/100;
}



  