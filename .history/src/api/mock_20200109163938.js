import Mock from 'mockjs' // 引入mockjs

import tableData from './tableData'

Mock.mock('/data/tableData', 'get', tableData)