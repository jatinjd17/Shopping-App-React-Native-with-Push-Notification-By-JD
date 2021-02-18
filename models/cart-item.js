class CartItem {
  constructor(quantity, productPrice, productTitle, pushToken, sum) {
    this.quantity = quantity;
    this.productPrice = productPrice;
    this.productTitle = productTitle;
    this.pushToken = pushToken;
    this.sum = sum;
  }
}

export default CartItem;
