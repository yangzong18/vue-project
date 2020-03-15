import axios from 'axios';

let base = '';

export const getList = params => { return axios.get(`${base}/api/list`, params).then(res => res.data); };

export const requestRegister = params => { return axios.post(`${base}/register`, params).then(res => res.data); };

export const getUserList = params => { return axios.get(`${base}/user/list`, { params: params }); };

export const getCustomerList = params => { return axios.get(`${base}/customer/list`, { params: params }); };

export const getCustomerListPage = params => { return axios.get(`${base}/customer/listpage`, { params: params }); };

export const batchRemoveCustomer = params => { return axios.get(`${base}/customer/batchremove`, { params: params }); };

export const editCustomer = params => { return axios.get(`${base}/customer/edit`, { params: params }); };

export const addCustomer = params => { return axios.get(`${base}/customer/add`, { params: params }); };

export const getUserListPage = params => { return axios.get(`${base}/user/listpage`, { params: params }); };

export const removeUser = params => { return axios.get(`${base}/user/remove`, { params: params }); };

export const batchRemoveUser = params => { return axios.get(`${base}/user/batchremove`, { params: params }); };

export const editUser = params => { return axios.get(`${base}/user/edit`, { params: params }); };

export const addUser = params => { return axios.get(`${base}/user/add`, { params: params }); };