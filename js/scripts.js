/* Business Logic*/

function Pizza(toppings, size, style) {
  this.toppings = toppings;
  this.size = size;
  this.style = style;
}

Pizza.prototype.price = function() {
  let sizePrice
  if (this.size === 'small') {
    sizePrice = 16;    
  } else if (this.size === 'medium') {
    sizePrice = 18;
  } else if (this.size === 'large') {
    sizePrice = 20;
  }

  let toppingsPrice;
  if (Array.isArray(this.toppings)) {
    toppingsPrice = this.toppings.length;
  } else {
    toppingsPrice = 1;
  }

  let stylePrice
  if (this.style === 'Chicago') {
    stylePrice = 3;
  } else if (this.style === 'New York') {
    stylePrice = 2;
  } else if (this.style === "Neapolitan") {
    stylePrice = 0;
  }
  
  let finalPrice = sizePrice + toppingsPrice + stylePrice;
  return finalPrice;
}


/*UI Logic*/

const form = document.querySelector('form');
const pizzaDisplay = document.querySelector('#pizza-display');
const selectionsDisplay = document.querySelector('#selections-display');

form.addEventListener('submit', function(event) {
  event.preventDefault();
  document.getElementById("hidden").removeAttribute("Id");

  
  // Get the selected toppings
  const toppings = Array.from(form.querySelectorAll('input[name="toppings"]:checked')).map(input => input.value);
  
  // Get the selected size and style
  const size = form.elements['size'].value;
  const style = form.elements['style'].value;
  
  // Create the Pizza object
  const pizza = new Pizza(toppings, size, style);
  
  // Display the Pizza object and selections on the page
  pizzaDisplay.textContent = `Your pizza costs $${pizza.price()}.`;
  const selectionsText = `You selected a ${size} ${style} pizza with the following toppings: ${toppings.join(', ')}.`;
  selectionsDisplay.textContent = selectionsText;
});




