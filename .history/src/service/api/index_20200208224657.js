import Ax from '@/service/axios';
import qs from 'qs';

export default {
export const Login = params => { return axios.post(`${base}/accesstoken`,params).then(res => res.data) };
export const getList = params => { return axios.get(`${base}/topics?`+params).then(res => res.data); }
export const getUserList = params => { return axios.get(`${base}/user/list`, { params: params }); }
export const getUserInfo = loginname =>{ return axios.get(`${base}/user/`+loginname).then(res => res.data);}
export const getTopic = topicId => { return axios.get(`${base}/topic/`+topicId).then(res => res.data);}
export const getReply = params => { return axios.post(`${base}/reply/`+params.id+`/ups`,{accessToken:params.accessToken}).then(res => res.data).catch(error);}

Login
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