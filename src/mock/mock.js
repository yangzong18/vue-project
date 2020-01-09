import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { LoginUsers, Users } from './data/user'
import { Lists } from './data/list'
let _Users = Users,
_Lists = Lists;
export default {
    start() { //初始化函数
        let mock = new MockAdapter(axios); // 创建 MockAdapter 实例
        //登录
        mock.onPost('/login').reply(config => {
            let {username, password} = JSON.parse(config.data);
            return new Promise((resolve, reject) => {
                let user = null;
                setTimeout(() => {
                    let hasUser = LoginUsers.some(u => {
                        if(u.username === username && u.password === password) {
                            user= JSON.parse(JSON.stringify(u));
                            user.password = undefined;
                            return true;
                        }
                    });
                    console.log(hasUser)
                    if(hasUser) {
                        resolve([200, { code:200, msg: '登录成功', user }]);
                    } else {
                        resolve([200, { code: 500, msg: '账号或者密码错误' }]);
                    }
                },1000);
            });
        });
    
        // 获取用户列表
        mock.onGet('/user/list').reply(confige => {
            let {name} = confige.params;
            let mockUsers = _Users.filter(user => {
                if(name && user.name.indexOf(name) == -1) return false;
                return true;
            });
            return new Promise((resolve, reject) => {
                setTimeout(()=> {
                    resolve([200, {
                        users: mockUsers
                    }])
                }, 1000);
            });
        });
        // 获取用户列表
        mock.onGet('/list').reply(confige => {
            let {page,limit,tab,mdrender} = JSON.parse(confige.params);
            console.log(limit)
            let mockUsers = _Users.filter(user => {
                if(name && user.name.indexOf(name) == -1) return false;
                return true;
            });
            return new Promise((resolve, reject) => {
                setTimeout(()=> {
                    resolve([200, {
                        _Lists
                    }])
                }, 1000);
            });
        });
    }
}
