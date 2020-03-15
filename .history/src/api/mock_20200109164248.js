import Mock from 'mockjs' // 引入mockjs

import list from './list'

//获取用户列表
Mock.mock('/user/list').reply(config => {
    let {name} = config.params;
    let mockUsers = _Users.filter(user => {
      if (name && user.name.indexOf(name) == -1) return false;
      return true;
    });
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([200, {
          users: mockUsers
        }]);
      }, 1000);
    });
  });