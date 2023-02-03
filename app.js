// function hasEnoughMoneyToBuy(price, qty, balance) {
//   const subTotal = Math.round(price * qty * 100)/ 100;
//   console.log('subtotal:', subTotal);
//   console.log('balance:', balance);
//   if (subTotal <= balance) {
//     return 'You have enough money to buy!';
//   }
//   return 'Oops!, You don\'t have enough money to buy';
// }
// // NOT ENOUGH MONEY
// // hasEnoughMoneyToBuy(50.5, 10, 300)
// // hasEnoughMoneyToBuy(200.3, 3, 600.9)

// //ENOUGH MONEY
// // hasEnoughMoneyToBuy(10, 6, 80)
// // hasEnoughMoneyToBuy(30, 3, 100)
// // hasEnoughMoneyToBuy(200.5, 3, 600.9)

// let grades = [99, 98, 75, 54, 66, 90, 81];
// let sum = 0;
// for (let i = 0; i < grades.length; i++) {
//   sum += grades[i];
//   console.log('i', i);
//   console.log('grade', grades[i]);
//   console.log('sum', sum);
// }
// let avg = sum / grades.length;

// // TRY & CATCH
// try {
//   functionThatDoesNtoWork();
//   let msg = 'HELLOO!'
//   let msg = 'CHALO!'
// } catch (e) {
//   console.log('OH ON ERRORS!');
//   console.log(e);
// }

// console.log('DID WE MAKE IT!')

// function displayInitials(user) {
//   let firstNameLetter = user.firstName[0].toUpperCase();
//   let lastNameLetter = user.lastName[0].toUpperCase();
//   return `Hello ${firstNameLetter}.${lastNameLetter}`;
// }
// displayInitials({ firstName: 'Have', lastName: 'Samuel' });


function displayInitials(user) {
  let firstNameLetter;
  let lastNameLetter;
  try {
    firstNameLetter = user.firstName[0].toUpperCase();
    lastNameLetter = user.lastName[0].toUpperCase();
  } catch (e) {
    return 'Invalid input!';
  }
  return `Hello ${firstNameLetter}.${lastNameLetter}`;
}
displayInitials({ firstName: 'Have', lastName: 'Samuel' });

// try {
//   console.log('INSIDE TRY')
//   undefined.pop() //This is results in  an error
// } catch (e) {
// // BUT WE CATCH IT!
//   console.log('OH NO ERROR!')
//   console.log(e);
// } finally {
//   console.log('INSIDE FINALLY!');
// }
// console.log('Did we makke it!!')


try {
  console.log('INSIDE TRY');
  undefined.pop(); //This is results in  an error
// } catch (e) {
//   // BUT WE CATCH IT!
//   console.log('OH NO ERROR!');
//   console.log(e);
} finally {
  console.log('INSIDE FINALLY!');
}
console.log('Did we makke it!!');