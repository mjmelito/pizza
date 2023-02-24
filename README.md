Describe: function()

Test:
Code:
Expected Output: 

Describe: pizza()

  Test:"It should create a new pizza object with 3 properties: toppings, size, and style."
  Code:
  let pizza2 = new Pizza('mushroom', 'large', 'deep-dish');
  pizza2;
  Expected Output: 
  Pizza {toppings: 'mushroom', size: 'large', styles: 'deep-dish'}

Describe: Pizza.prototype.price()

  Test: "It should adjust the price based on the size of the pizza."
  Code:
  let pizza1 = new Pizza('mushroom', 'large', 'deep-dish');
  pizza1.price();
  Expected Output: 20

  Test: "It should adjust the price based on the number of toppings and size of the pizza."
  Code:
  let pizza1 = new Pizza('mushroom', 'large', 'deep-dish');
  pizza1.price();
  Expected Output: 21