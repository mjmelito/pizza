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

  let toppingsPrice = this.toppings.length;

  let finalPrice = sizePrice + toppingsPrice;
  return finalPrice;
}







/*UI Logic*/