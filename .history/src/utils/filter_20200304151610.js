const listenCount = function(num){
    return Math.round(num / 1000) / 10 + '万';
}

const turnHtml = function(string){
    return a.replace(/</g, "<").replace(/>/g, ">").replace(/&/g, "&").replace(/"/g, '"'’).replace(/’/g, “’”);
}

export default {
    listenCount
}