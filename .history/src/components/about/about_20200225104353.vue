<template>
    <div class="about">
        <div class="about-content g-content">
            <transition name="silde-top">
                <div class="dw-boot-container">
                    <router-link tag="a" to="/about/news">
		        	<li class="dw-boot-col-lg-3 dw-boot-col-md-4 dw-boot-col-sm-6">
		        		<i class="icon-edit-paper"></i>
		        		<span>新闻头条</span>
		        	</li>
		        </router-link>
                <router-link tag="a" to="/about/news">
		        	<li class="dw-boot-col-lg-3 dw-boot-col-md-4 dw-boot-col-sm-6">
		        		<i class="icon-edit-paper"></i>
		        		<span>每日一笑</span>
		        	</li>
		        </router-link>
                <router-link tag="a" to="/about/news">
		        	<li class="dw-boot-col-lg-3 dw-boot-col-md-4 dw-boot-col-sm-6">
		        		<i class="icon-edit-paper"></i>
		        		<span>资源搜索</span>
		        	</li>
		        </router-link>
                <router-link tag="a" to="/about/news">
		        	<li class="dw-boot-col-lg-3 dw-boot-col-md-4 dw-boot-col-sm-6">
		        		<i class="icon-edit-paper"></i>
		        		<span>个人标签</span>
		        	</li>
		        </router-link>
                <router-link tag="a" to="/about/news">
		        	<li class="dw-boot-col-lg-3 dw-boot-col-md-4 dw-boot-col-sm-6">
		        		<i class="icon-edit-paper"></i>
		        		<span>作品信息</span>
		        	</li>
		        </router-link>
                <router-link tag="a" to="/about/news">
		        	<li class="dw-boot-col-lg-3 dw-boot-col-md-4 dw-boot-col-sm-6">
		        		<i class="icon-edit-paper"></i>
		        		<span>意见建议</span>
		        	</li>
		        </router-link>
                <router-link tag="a" to="/about/news">
		        	<li class="dw-boot-col-lg-3 dw-boot-col-md-4 dw-boot-col-sm-6">
		        		<i class="icon-edit-paper"></i>
		        		<span>联系作者</span>
		        	</li>
		        </router-link>
                <router-link tag="a" to="/about/news">
		        	<li class="dw-boot-col-lg-3 dw-boot-col-md-4 dw-boot-col-sm-6">
		        		<i class="icon-edit-paper"></i>
		        		<span>版本记录</span>
		        	</li>
		        </router-link>
                <router-link tag="a" to="/about/news">
		        	<li class="dw-boot-col-lg-3 dw-boot-col-md-4 dw-boot-col-sm-6">
		        		<i class="icon-edit-paper"></i>
		        		<span>友情链接</span>
		        	</li>
		        </router-link>
                </div>
            </transition>
        </div>
    </div>
</template>
<script>
import '@/common/response.css'
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