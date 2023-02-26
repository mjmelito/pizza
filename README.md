# Timber + Flame Woodfired Pizza

#### By Matthew Melito

#### A simple and easy to use order form for a pizza shop.

## Technologies Used

* HTML
* CSS
* JavaScript

## Description

This site allows users to select options for a pizza including style, size, and toppings. The resulting price based on the user choices is then displayed to the user along with a summary of their selections.

## Setup/Installation Requirements

* Clone this repository to your desktop.
* Navigate to the top level of the directory.
* Open index.html in your browser.

## Known Bugs

None

## License

*This project uses the following license: [MIT](https://opensource.org/licenses/MIT)*

Copyright (c) 2023
**_Matthew Melito_**


Describe: pizza()

  Test:"It should create a new pizza object with 3 properties: toppings, size, and style."
  Code:
  let pizza2 = new Pizza('mushroom', 'large', 'Chicago');
  pizza2;
  Expected Output: 
  Pizza {toppings: 'mushroom', size: 'large', styles: 'Chicago'}

Describe: Pizza.prototype.price()

  Test: "It should adjust the price based on the size of the pizza."
  Code:
  let pizza1 = new Pizza('mushroom', 'large', 'Chicago');
  pizza1.price();
  Expected Output: 20

  Test: "It should adjust the price based on the number of toppings and size of the pizza."
  Code:
  let pizza1 = new Pizza('mushroom', 'large', 'Chicago');
  pizza1.price();
  Expected Output: 21

  Test: "It should adjust the price based on the number of toppings pizza size, and pizza style."
  Code:
  let pizza1 = new Pizza('mushroom', 'large', 'Chicago');
  pizza1.price();
  Expected Output: 24