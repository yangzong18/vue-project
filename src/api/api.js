import axios from 'axios';

export const Login = params => { return axios.post(`/login`, params) };
export const getList = params => { return axios.get(`/list`, params ) }
export const getUserList = params => { return axios.get(`/user/list`, { params: params }); }