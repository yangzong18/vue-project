const isNullOrEmpty = function(val) {
    if (val == null || val == "" || typeof(val) == undefined) {
        return true;
    } else {
        return false;
    }
}
 
const timeFormat = (value, format) => {