const listenCount = function(num){
    return Math.round(num / 1000) / 10 + '万';
}

const turnHtml = function(html){
    return html
      .replace(html ? /&(?!#?\w+;)/g : /&/g, '&amp;')
      .replace(/&lt;/g, "<")
      .replace(/&gt;/g, ">")
      .replace(/&quot;/g, "\"")
      .replace(/&#39;/g, "\'")
      .replace(/&#91;/g, "[")
      .replace(/&#93;/g, "]")
      .replace(/&#47;/g, "、");
}

const singer => {
    if (typeof val === 'string') {
      return val
    } else if (val instanceof Array) {
      let singer = ''
      val.forEach(item => {
        singer = singer + item.name + ' '
      })
      return singer
    }
  }

export default {
    listenCount,
    turnHtml
}