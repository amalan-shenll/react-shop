import { observable, computed, action } from "mobx";

class UserStore {
  @observable username = 'testusername';
  @action setUserEmail(email) {
    this.username = email;
  }
}

export default UserStore;