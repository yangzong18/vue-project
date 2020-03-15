const isNullOrEmpty = function(val) {
    if (val == null || val == "" || typeof(val) == undefined) {
        return true;
    } else {
        return false;
    }
}
listenCount: num => Math.round(num / 1000) / 10 + '万'


const listenCount = function