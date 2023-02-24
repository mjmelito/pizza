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
    stylePrice = 1;
  }
  
  let finalPrice = sizePrice + toppingsPrice + stylePrice;
  return finalPrice;
}







/*UI Logic*/