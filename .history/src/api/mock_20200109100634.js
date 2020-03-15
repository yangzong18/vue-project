import Mock from 'mockjs'

const data = []

Mock.mock('/api/list','get',(params)=>{
  console.log(params)
  return data;
})

