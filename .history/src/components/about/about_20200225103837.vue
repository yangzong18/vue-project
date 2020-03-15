<template>
    <div class="about">
        this is about.vue
    </div>
</template>
<script>
	@import '~common/response.css'
export default {
    name :'about',
    data(){
        return 
    }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
	@import '~common/stylus/global.styl'
	@import '~common/stylus/style.styl'
		.about
			position:fixed
			top:0
			left:0
			bottom:0
			right:0
			border-radius:12px
			.about_bg
				position:absolute
				top:0
				left:0;
				bottom:0
				width:100%
				right:0
				z-index:-1
			.about-content
				display:flex
				flex-direction:row
				opacity:1
				div
					&.silde-top-enter-to,&.silde-top-leave-to
						transition: all 0.3s
					&.silde-top-enter,&.silde-top-leave-to
						opacity:0
						transform:translate3d(0,-80%,0)
					a
						color:$text_color
						text-decoration: none
						transition: all 0.3s
						li
							list-style:none	
							display:flex
							flex-direction:column
							text-align:center
							box-sizing:border-box
							margin:20px 0
							span
								display:block
								width:100%
								height:auto
								text-overflow:ellipsis
								overflow:hidden
								white-space:nowrap
								font-size:12px
							i
								font-size:24px
								
							&:active
								color:$text_color_active
						@media screen and (max-width: 768px)
							li
								width:100%
								display:block
								span
									font-size:16px
									display:inline-block
									width:auto
									vertical-align:middle
								i
									font-size:16px
									vertical-align:middle
						&:hover{
							color:$text_color_opacity
						}
				.li_about
					position:fixed
					top:0
					bottom:0
					left:0
					right:0
					width:100%
					height:100%
					&.silde-top-enter-to,&.silde-top-leave-to
						transition: all 0.5s
					&.silde-top-enter,&.silde-top-leave-to
						opacity:0
						transform: translate3d(0, 50%, 0)
</style>