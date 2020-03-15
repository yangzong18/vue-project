import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { List } from './data/list';
console.log(List)
let _List = List;

export default {
  /**
   * mock bootstrap
   */
  bootstrap() {
    let mock = new MockAdapter(axios);
    //获取用户列表
    mock.onGet('/api/list').reply(config => {
      return List
    })

  }
};