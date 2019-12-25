
const STORAGE_KEY = 'studentName-vuejs'
const STORAGE_KEY = 'student-name-vuejs'

export default {
    getList:function(){
        return JSON.pa
    }
}
export default {
	fetch: function() {
		return JSON.parse(window.sessionStorage.getItem(STORAGE_KEY)
		 || '[]')
	},
	save:function(items) {
		window.sessionStorage.setItem(STORAGE_KEY, JSON.stringify(items))
	}
}
