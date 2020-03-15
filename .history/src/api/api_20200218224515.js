import axios from 'axios';

let base = '';

export const requestLogin = params => { return axios.post(`${base}/login`, params).then(res => res.data); };

export const requestRegister = params => { return axios.post(`${base}/register`, params).then(res => res.data); };

export const getUserList = params => { return axios.get(`${base}/user/list`, { params: params }); };

export const getCustomerList = params => { return axios.get(`${base}/customer/list`, { params: params }); };