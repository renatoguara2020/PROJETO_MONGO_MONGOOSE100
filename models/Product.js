const conn = require('../database/conn')

class Product {
  constructor(name, price, description, imageUrl) {
    this.name = name
    this.price = price
    this.description = description
    this.imageUrl = imageUrl
  }

  save() {
    const product = conn.db().collection('products').insertOne({
      name: this.name,
      price: this.price,
      description: this.description,
      imageUrl: this.imageUrl
    })

    return product
  }

  static  getProducts(){

    const products = conn.db().collection('products').find().toArray();

    return products;


  }
  static async getProductById(id) {
    const product = await conn
      .db()
      .collection('products')
      .findOne({ _id: ObjectId(id) })

    return product
  }
}

module.exports = Product;
