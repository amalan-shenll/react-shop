import { observable, computed, action } from "mobx";

class ProductStore {
  @observable products = [];
  @action getProducts() {
    this.products.push({
      productName: "Samsung Mobile X",
      productPrice: 15000
    })
  }
}

export default ProductStore;