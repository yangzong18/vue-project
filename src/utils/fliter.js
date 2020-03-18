const formatDate = function (time) { // 将评价的时间戳转换成 年月日，时分
    let date = new Date(time); // 先把时间戳转换成date格式
    return turn(date, 'yyyy-MM-dd hh:mm');
}

function turn(date, fmt) {
    if (/(y+)/.test(fmt)) {
        fmt = fmt.replace(RegExp.$1, (date.getFullYear() + '').substr(4 - RegExp.$1.length));
    }
    let o = {
        'M+': date.getMonth() + 1,
        'd+': date.getDate(),
        'h+': date.getHours(),
        'm+': date.getMinutes(),
        's+': date.getSeconds()
    };

    for (let k in o) {
        if (new RegExp(`(${k})`).test(fmt)) {
            let str = o[k] + '';
            fmt = fmt.replace(RegExp.$1, (RegExp.$1.length === 1) ? str : padLeftZero(str));
        }
    }
    return fmt;
};
/**
 *
 * @param {*} str 代表传入的参数
 * 比如说传入了 是单位数 9 ，那么就返回 009，传入的参数 9 长度是1，然后从第一位开始截取，那就是返回 09
 *
 * 比如说传入的是 12 的之类的双位数，那么就返回 0012， 参数长度是2，从第二位开始截取，那么就是 返回 12
 */
function padLeftZero(str) {
    return ('00' + str).substr(str.length);
}

export default {
    formatDate
}