import axios from '@/service/axios';
import qs from 'qs';
let base = process.env.BASE_API;
export default {
  
export const Login = params => { return axios.post(`${base}/accesstoken`,params).then(res => res.data) };
export const getList = params => { return axios.get(`${base}/topics?`+params).then(res => res.data); }
export const getUserList = params => { return axios.get(`${base}/user/list`, { params: params }); }
export const getUserInfo = loginname =>{ return axios.get(`${base}/user/`+loginname).then(res => res.data);}
export const getTopic = topicId => { return axios.get(`${base}/topic/`+topicId).then(res => res.data);}
export const getReply = params => { return axios.post(`${base}/reply/`+params.id+`/ups`,{accessToken:params.accessToken}).then(res => res.data).catch(error);}
  Login (params) {
    return Ax.post(`${base}/accesstoken`, {params: params});
  },
  getList (params) {
    return Ax.get('/krryblog/blog/addBlog', qs.stringify(reqData));
  },
  updateBlog (reqData) {
    return Ax.post('/krryblog/blog/updateBlog', qs.stringify(reqData));
  },
  deleteBlogCover (id, reqData) {
    return Ax.post(`/krryblog/blog/deleteBlogCover/${id}`, qs.stringify(reqData));
  },
};