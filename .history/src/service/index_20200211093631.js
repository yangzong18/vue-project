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
export async function updateBlog (reqData) {
  let res = await Api.updateBlog(reqData);
  return res;
}
export async function deleteBlogCover (id, reqData) {
  let res = await Api.deleteBlogCover(id, reqData);
  return res;
}