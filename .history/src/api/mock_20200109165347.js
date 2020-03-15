import Mock from 'mockjs' // 引入mockjs

import list from './list'

Mock.mock('/api/list', 'get', list)
