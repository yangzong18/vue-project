import Mock from 'mockjs'

const baseContent = '<div class=\"markdown-text\"><p>请问：mongodb数据库，进行数据操作完毕后，需要手动断开与数据库的连接吗，还是连接池自动判断呢</p>\n</div>'
const image_uri = 'https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3'

Mock.mock('/api/list','get',(params)=>{

  console.log(params)
  let data = []
  let paramsObj = JSON.parse(params.body)
  let count = paramsObj.limit;
  
  return data;
})

