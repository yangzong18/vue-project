import Ax from '@/service/axios.js';
import qs from 'qs';

export default {

  login(params){
    return Ax.post(`/accesstoken`,qs.stringify(params))
  },
  getList(params){
    return Ax.get(`/topics?`+params)
  },
  getUserInfo(params){
    return Ax.get(`/user/`+params)
  },
  getTopic(topicId){
    return Ax.get(`/topic/`+topicId)
  },
  getReply(params){ 
    return Ax.post(`/reply/`+params.id+`/ups`)
  },
  replyTo (reqData) {
    return Ax.post('/topic/${this.topicId}/replies',qs.stringify(params));
  },
  
  fetchBlog (reqData) {
    return Ax.get('/krryblog/blog/getBlog', {params: reqData});
  },
  addBlog (reqData) {
    return Ax.post('/krryblog/blog/addBlog', qs.stringify(reqData));
  },
  updateBlog (reqData) {
    return Ax.post('/krryblog/blog/updateBlog', qs.stringify(reqData));
  },
  deleteBlogCover (id, reqData) {
    return Ax.post(`/krryblog/blog/deleteBlogCover/${id}`, qs.stringify(reqData));
  },
};