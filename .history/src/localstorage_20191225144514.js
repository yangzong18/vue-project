const STORAGE_KEY = 'student-name-vuejs'

export default {
    getList:function(){
        return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY)) 
    },
    add:function(){
        window.sessionStorage.setItem(STORAGE_KEY,JSON.stringify(items))
    }
}
