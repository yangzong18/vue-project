const STORAGE_KEY = 'studentName-vuejs'

export default {
    getList:function(){
        return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY)
		 || '[]')
    },
    add:function(items){
        window.sessionStorage.setItem(STORAGE_KEY,JSON.stringify(items))
    }
}
