import axios from 'axios';

let base = '';

export const getList = params => { return axios.get(`${base}/api/list`, params).then(res => res.data); };