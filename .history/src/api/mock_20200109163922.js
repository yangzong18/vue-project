import Mock from 'mockjs' // 引入mockjs

import tableData from './mockData/tableData'

Mock.mock('/data/tableData', 'get', tableData) // tableData
————————————————
版权声明：本文为CSDN博主「Web Boy」的原创文章，遵循 CC 4.0 BY-SA 版权协议，转载请附上原文出处链接及本声明。
原文链接：https://blog.csdn.net/qq_35658349/article/details/97814371