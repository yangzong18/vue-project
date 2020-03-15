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
  replyTo (topicId,params) {
    return Ax.post('/topic/'+topicId+'/replies',qs.stringify(params));
  },
  
  addTopic (data) {
    return Ax.post('topics', qs.stringify(data));
  }
};