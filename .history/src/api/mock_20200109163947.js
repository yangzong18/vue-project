import Mock from 'mockjs' // 引入mockjs

import tableData from './list'

Mock.mock('/list/tableData', 'get', tableData)