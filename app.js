function hasEnoughMoneyToBuy(price, qty, balance) {
  const subTotal = Math.round(price * qty * 100)/ 100;
  console.log('subtotal:', subTotal);
  console.log('balance:', balance);
  if (subTotal <= balance) {
    return 'You have enough money to buy!';
  }
  return 'Oops!, You don\'t have enough money to buy';
}
// NOT ENOUGH MONEY
// hasEnoughMoneyToBuy(50.5, 10, 300)
// hasEnoughMoneyToBuy(200.3, 3, 600.9)

//ENOUGH MONEY
// hasEnoughMoneyToBuy(10, 6, 80)
// hasEnoughMoneyToBuy(30, 3, 100)
// hasEnoughMoneyToBuy(200.5, 3, 600.9)