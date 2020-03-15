import axios from 'axios';
let base = process.env.BASE_API;
export const Login = params => { return axios.post(`${base}/accesstoken`,params).then(res => res.data) };
export const getList = params => { return axios.get(`${base}/topics?`+params).then(res => res.data); }
export const getUserList = params => { return axios.get(`${base}/user/list`, { params: params }); }
export const getUserInfo = loginname =>{ return axios.get(`${base}/user/`+loginname).then(res => res.data);}
export const getTopic = topicId => { return axios.get(`${base}/topic/`+topicId).then(res => res.data);}
export const getTopic = params => { return axios.post(`${base}/reply/`+params.id+`/ups`,{acc}).then(res => res.data);}