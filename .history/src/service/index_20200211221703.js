import Api from './api';
export async function Login(reqData) {
  let res = await Api.login(reqData);
  return res;
}
export async function getList(reqData) {
  let res = await Api.getList(reqData);
  return res;
}
export async function getUserInfo(reqData) {
  let res = await Api.getUserInfo(reqData);
  return res;
}
export async function getTopic (reqData) {
  let res = await Api.getTopic(reqData);
  return res;
}
export async function getReply (reqData) {
  let res = await Api.getReply(reqData);
  return res;
}
export async function replyTo (id, reqData) {
  let res = await Api.replyTo(id, reqData);
  return res;
}

export async function  addTopic(params) {
  let res = await Api.addTopic(params);
  return res;
}

export async function getMsg(params) {
  
}