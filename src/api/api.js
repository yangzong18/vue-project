import axios from 'axios';
let base = '';
if(process.env.NODE_ENV === 'production'){
    let base = process.env.BASE_API;
}
export const Login = params => { return axios.post(`${base}/login`, params) };
export const getList = params => { return axios.get(`${base}/api/list`,params) }
export const getUserList = params => { return axios.get(`${base}/user/list`, { params: params }); }
export const getPersonCenter = params =>{ return axios.get(`${base}/api/person`, params)}