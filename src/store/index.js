import ProductStore from './productStore';
import UserStore from './userStore';

export default {
  userStore: new UserStore(),
  productStore: new ProductStore()
}