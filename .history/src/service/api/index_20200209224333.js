import Ax from ‘/service/axios';
import qs from 'qs';

export default {

  login(params){
    return Ax.post(`${base}/accesstoken`,params)
  },
  getList(params){
    return Ax.get(`${base}/topics?`+params)
  },
  // getList(params){
  //   return axios.get(`${base}/topics`, {params: reqData})
  // },
  getUserInfo(params){
    Ax.get(`${base}/user/`+params)
  },
  getTopic(topicId){
    Ax.get(`${base}/topic/`+topicId)
  },
  getReply(params){ 
    return Ax.post(`${base}/reply/`+params.id+`/ups`)
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