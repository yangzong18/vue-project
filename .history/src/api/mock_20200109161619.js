import Mock from 'mockjs'
const data = []
const count = 100

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
export default [
  {
    url: '/api/list',
    type: 'get',
    response: config => {
      page: 1,
      limit: 20,
      tab: 'all',
      mdrender: true
      const { page = 1, limit = 20, tab= } = config.query

      let mockList = List.filter(item => {
        if (importance && item.importance !== +importance) return false
        if (type && item.type !== type) return false
        if (title && item.title.indexOf(title) < 0) return false
        return true
      })

      console.log(config.query)
      if (sort === '-id') {
        mockList = mockList.reverse()
      }

      const pageList = mockList.filter((item, index) => index < limit * page && index >= limit * (page - 1))
      return {
        code: 20000,
        data: {
          total: mockList.length,
          items: pageList
        }
      }
    }
  },

  {
    url: '/article/detail',
    type: 'get',
    response: config => {
      const { id } = config.query
      for (const article of List) {
        if (article.id === +id) {
          return {
            code: 20000,
            data: article
          }
        }
      }
    }
  },

  {
    url: '/article/pv',
    type: 'get',
    response: _ => {
      return {
        code: 20000,
        data: {
          pvData: [
            { key: 'PC', pv: 1024 },
            { key: 'mobile', pv: 1024 },
            { key: 'ios', pv: 1024 },
            { key: 'android', pv: 1024 }
          ]
        }
      }
    }
  },

  {
    url: '/article/create',
    type: 'post',
    response: _ => {
      return {
        code: 20000,
        data: 'success'
      }
    }
  },

  {
    url: '/article/update',
    type: 'post',
    response: _ => {
      return {
        code: 20000,
        data: 'success'
      }
    }
  }
]



