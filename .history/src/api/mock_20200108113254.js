import Mock from 'mockjs'
const data = []
const count = 20

for (let i = 0; i < count; i++) {
  data.push(Mock.mock({
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
Mock.mock('/api/list', 'get', (req, res) => {
  return {
    success: true,
    data:data,
    message: '成功'
  }
})