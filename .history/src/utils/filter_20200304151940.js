const listenCount = function(num){
    return Math.round(num / 1000) / 10 + '万';
}

const turnHtml = function(html){
    return html
      .replace(html ? /&(?!#?\w+;)/g : /&/g, '&amp;')
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&quot;/g, "\"")
      .replace(/&#39;/g, "\'");
}

export default {
    listenCount,
    turnHtml
}