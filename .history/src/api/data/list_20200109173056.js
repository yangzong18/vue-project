import Mock from 'mockjs'
const List = []
const count = 100

const baseContent = '<div class=\"markdown-text\"><p>请问：mongodb数据库，进行数据操作完毕后，需要手动断开与数据库的连接吗，还是连接池自动判断呢</p>\n</div>'
const image_uri = 'https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3'
for (let i = 0; i < count; i++) {
  List.push(Mock.mock({
    id: Mock.Random.id(),
    author_id: Mock.Random.id(),
    'tab|1':['share','good','all','ask','job'],
    content: '@paragraph(20)',
    title: '@ctitle(5, 10)',
    last_reply_at: '@datetime',
    good: '@boolean',
    top:'@boolean',
    importance: '@integer(1, 3)',
    'reply_count|1-100':1,
    'visit_count|40-200':1,
    create_at: '@datetime',
    author: {
      'loginname':'@last',
      'avatar_url':"@image('120x120','','#FFF','@last')",
    }
  }))
}
//根据数据模板生成模拟数据
Mock.mock('/api/getprodlist', 'get', (req, res) => {
  return {
    status: 0,
    data: dataList,
    message: '成功'
  }
})



