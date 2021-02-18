class Product {
  constructor(id, ownerId, ownerPushToken, title, imageUrl, description, price) {
    this.id = id;
    this.ownerId = ownerId;
    this.pushToken = ownerPushToken;
    this.imageUrl = imageUrl;
    this.title = title;
    this.description = description;
    this.price = price;
  }
}

export default Product;
