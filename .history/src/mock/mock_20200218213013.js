import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import { LoginUsers, Users } from './data/user';
import { Lists } from './data/list';
import { Info } from "./data/person";
let _Users = Users,
_Lists = Lists,
_info = Info;
export default {
    start() { //初始化函数
        let mock = new MockAdapter(axios); // 创建 MockAdapter 实例
        //登录
        mock.onPost('/login').reply(config => {
            let {username, password} = JSON.parse(config.data);
            console.log(username,password,LoginUsers)
            return new Promise((resolve, reject) => {
                let user = null;
                setTimeout(() => {
                    let hasUser = LoginUsers.some(u => {
                        if(u. === account && u.password === password) {
                            user= JSON.parse(JSON.stringify(u));
                            return true;
                        }
                    });
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
        mock.onGet('/api/list').reply(confige => {

            let {page,limit,tab,mdrender} = confige;

            let mockLists = _Lists.filter(list => {
                switch(tab){
                    case 'all':
                        return true;
                    default:
                        if (tab && list.tab.indexOf(tab) == -1) return false;
                        return true;
                }
            });
            let total = mockLists.length;
            mockLists = mockLists.filter((u, index) => index < limit * page && index >= limit * (page - 1));
            return new Promise((resolve, reject) => {
                setTimeout(()=> {
                    resolve([200,{ code: 200, msg: '请求成功', list:mockLists,total:total}]);
                }, 1000);
            }).catch(err=>{
                console.log(err)
            });
        });

         // 获取用户列表
         mock.onGet('/api/person').reply(confige => {
            let {loginname} = confige;
            console.log(loginname)
            return new Promise((resolve, reject) => {
                setTimeout(()=> {
                    resolve([200,{ code: 200, msg: '请求成功', info:_info}]);
                }, 1000);
            }).catch(err=>{
                console.log(err)
            });
        });
    }
}
