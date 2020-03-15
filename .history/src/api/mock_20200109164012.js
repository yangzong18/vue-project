import Mock from 'mockjs' // 引入mockjs

import tableData from './list'

Mock.mock('/api/list', 'get', tableData)