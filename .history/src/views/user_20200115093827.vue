<template>
    <div>
        用户信息
    </div>
</template>
<script>
export default {
    name:'User',
    beforeRouteLeave(to, from, next) {
		$(window).off('scroll');
		next();
    },
	beforeRouteEnter(to, from, next) {
		next();
	},
}
</script>
