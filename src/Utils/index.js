/**
 * This function calculates the total price of a new order
 *
 * @param {Array} products cartProduct: array of objects
 * @returns {number} total price
 */

export const totalPrice = (products) => {
  let sum = 0;
  products.forEach((product) => (sum += product.price));

  const totalRoundUp = Math.floor(sum * 100) / 100;

  return totalRoundUp;
};

//this function shows the current date on the card of my orders
export const currentDate = () => {
  const date = new Date().toLocaleDateString();
  return date;
};
