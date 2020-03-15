import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { List } from './data/list';
let _List = List;

export default {
  /**
   * mock bootstrap
   */
  bootstrap() {
    let mock = new MockAdapter(axios);
    //获取用户列表
    mock.onGet('/api/list').reply(config => {
        console.log(1111)
      let {name} = config.params;
      let mockLists = _List.filter(customer => {
        if (name && customer.name.indexOf(name) == -1) return false;
        return true;
      });
      return new Promise((resolve, reject) => {
        setTimeout(() => {
          resolve([200, {
            List: mockLists
          }]);
        }, 1000);
      });
    })

  }
};