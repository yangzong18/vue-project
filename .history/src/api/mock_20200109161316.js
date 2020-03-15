import Mock from 'mockjs'

let data = []
let paramsObj = JSON.parse(params.body)
let count = paramsObj.limit;
const List = []
const count = 100

const baseContent = '<p>I am testing data, I am testing data.</p><p><img src="https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943"></p>'
const image_uri = 'https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3'

for (let i = 0; i < count; i++) {
  List.push(Mock.mock({
    id: '@increment',
    timestamp: +Mock.Random.date('T'),
    name: Mock.Random.cname(),
    addr: Mock.mock('@county(true)'),
    'age|18-60': 1,
    birth: Mock.Random.date(),
    sex: Mock.Random.integer(0, 1),
    author: '@first',
    reviewer: '@first',
    title: '@title(5, 10)',
    content_short: 'mock data',
    content: baseContent,
    forecast: '@float(0, 100, 2, 2)',
    importance: '@integer(1, 3)',
    'type|1': ['CN', 'US', 'JP', 'EU'],
    'status|1': ['published', 'draft', 'deleted'],
    display_time: '@datetime',
    comment_disabled: true,
    pageviews: '@integer(300, 5000)',
    image_uri,
    platforms: ['a-platform']
  }))
}

const baseContent = '<div class=\"markdown-text\"><p>请问：mongodb数据库，进行数据操作完毕后，需要手动断开与数据库的连接吗，还是连接池自动判断呢</p>\n</div>'
const image_uri = 'https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3'

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

Mock.mock('/api/list','get',(params)=>{

  console.log(params)
  let data = []
  let paramsObj = JSON.parse(params.body)
  let count = paramsObj.limit;
  
  return data;
})

