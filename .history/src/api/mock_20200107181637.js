import Mock from 'mockjs'
const List = []
const count = 100

const baseContent = '<p>I am testing data, I am testing data.</p><p><img src="https://wpimg.wallstcn.com/4c69009c-0fd4-4153-b112-6cb53d1cf943"></p>'
const image_uri = 'https://wpimg.wallstcn.com/e4558086-631c-425c-9430-56ffb46e70b3'

for (let i = 0; i < count; i++) {
  List.push(Mock.mock({
    id: '@increment',
    timestamp: +Mock.Random.date('T'),
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
console.log(List)
Mock.mock('/list', /get/i, {
  // /post|get/i 匹配post和get模式 也可以用'post'或'get'
  // 属性 list 的值是一个数组，其中含有 1 到 10 个元素
  'data|20': [{
    // 属性 id 是一个自增数，起始值为 1，每次增 1
    'id|+1': 1,
    // 随机数字1-100
    'number|1-100': 100,
    // 返回city数组，每次里面有三个
    'city|3': {
      '310000': '上海市',
      '320000': '江苏省',
      '330000': '浙江省',
      '340000': '安徽省'
    }
  }]
})