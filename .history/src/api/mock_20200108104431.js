import Mock from 'mockjs'
const data = []
const count = 20

const baseContent = '<div class=\"markdown-text\"><p>请问：mongodb数据库，进行数据操作完毕后，需要手动断开与数据库的连接吗，还是连接池自动判断呢</p>\n</div>'
const image_uri = 'https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3'

for (let i = 0; i < count; i++) {
  data.push(Mock.mock({
    id: Mock.Random.id(),
    author_id: Mock.Random.id(),
    tab:'@word(3)',
    content: '@paragraph(20)',
    title: '@ctitle(5, 10)',
    last_reply_at: Mock.mock('@date("yyyy yy y MM M dd d")'),
    forecast: '@float(0, 100, 2, 2)',
    importance: '@integer(1, 3)',
    'type|1': ['CN', 'US', 'JP', 'EU'],
    'status|1': ['published', 'draft', 'deleted'],
    display_time: '@datetime',
    comment_disabled: true,
    pageviews: '@integer(300, 5000)',
    image_uri,
    platforms: ['a-platform'],
    img:Mock.Random.image('200x100','', '#FFF','@first'),
  }))
}
Mock.mock('/list', /get/i,data)