<template>
    <div class="setting">
        <div class="setting-warpper g-content">
  		<h3 class="title">设置</h3>
  		<div class="set_list border-1px">
  			<span class="name">背景图片</span>
			<div class="switch_bg switch-right">
  				<div class="title">{{getImageInfoTitle}}</div>
				<v-switch :options="options" @selectBgType="selectBgType"></v-switch>
			</div>
  		</div>
  		<div class="set_list border-1px">
  			<span class="name">背景色</span>
			<div class="switch_bg switch-right">
  				<!-- <div class="colorArea" :style="{backgroundColor:getGlobalInfo.contentInfo.bgcolor}" @click="setBgColorPicker"></div> -->
				<el-color-picker v-model="colorBg" @change="changeBg"></el-color-picker>
			</div>
  		</div>
  		<div class="set_list border-1px">
  			<span class="name">透明度</span>
			<div class="switch_bg switch-right">
  				<div class="title" v-show="!showOpacityInput" @click="showInputOpacity">{{getGlobalInfo.contentInfo.opacity}}</div>
  				<input class="inputText" ref="inputBgOpacity" type="text" v-show="showOpacityInput" @keyup.enter="onEnter($event)" placeholder="0-1,回车确认" :value="getGlobalInfo.contentInfo.opacity" @blur="closeInputOpacity">
			</div>
  		</div>
  		<div class="set_list border-1px" @click="showMaskType">
  			<span class="name cursor">遮罩类型</span>
			<div class="switch_bg switch-right">
  				<div class="title">{{getMaskTypeText}}</div>
			</div>
  		</div>
  		<div class="set_list">
  			<span class="name center"><span @click="clearSettingInfo">重置所有设置</span></span>
  		</div>
  	</div>
  	<!-- 遮罩层颜色设置 -->
  	<transition name="fade">
  		<div class="selectBg" v-show="showSetBgColorPicker">
			<el-color-picker v-model="colorBg" @change="changeBg"></el-color-picker>
		</div>
  	</transition>
	<!-- 遮罩层类型设置 -->
	<selectmask :isshow="maskIsShow" :maskdata="maskData" :maskimage="getFixedImage.url" :maskglobainfo="getGlobalInfo" @setmasktype="setmasktypeByCom"></selectmask>
	<span class="version" v-if="version">版本号: v{{version}}</span>
  </div>
</template>
<script>
export default {
    methods:{
        getImageInfoTitle(){
            
        }
    }
}
</script>
<style lang="stylus" rel="stylesheet/stylus">
@import '~common/stylus/global.styl'
@import '~common/stylus/style.styl'
@import '~common/stylus/border-1px/index.styl'
	.setting
		position:fixed
		top:0
		left:0
		bottom:0
		width:100%
		right:0
		border-radius:12px
		.set_bg
			position:absolute
			top:0
			left:0;
			bottom:0
			width:100%
			right:0
			z-index:-1
		.setting-warpper
			// position:fixed
			// top:100px
			// bottom:50px
			left:50%
			max-width:1240px
			width:100%
			transform:translate(-50%,0)
			margin:0 auto
			overflow-y: auto
			box-sizing:border-box
			-webkit-overflow-scrolling: touch
			padding:15px;
			// background:red
			.title
				color:$text_color
				margin:0
			.set_list
				padding:10px 0
				color:$text_color
				font-size:0
				&.border-1px
					border-1px($border_bottom_color_deep, bottom)
				.name
					display:inline-block
					font-size:14px
					vertical-align:middle
					width: calc(100% - 150px)
					&.center
						font-size:14px
						text-align:center
						width:100%
						display:block
					&.cursor
						cursor:pointer
					span
						cursor:pointer
						&:hover
							text-decoration:underline
				.switch-right
					display:inline-block
					vertical-align:middle
					font-size:0
					float: right
					.title
						display:inline-block
						vertical-align:middle
						font-size:14px
						margin-right: 10px
						color:$text_color_active
						min-width:50px
						text-align:center
					.switch
						display:inline-block
						vertical-align:middle
					.colorArea
						display:inline-block
						vertical-align:middle
						font-size:14px
						margin-right: 10px
						width:50px
						height:30px
						cursor:pointer
					.inputText
						display: inline-block;
						vertical-align: middle;
						font-size: 14px
						margin-right: 10px
						color: #666
						min-width: 50px
						text-align: center
						outline:none
						width:120px
						height:32px
						margin:0
						border: none
						box-sizing:border-box
		.selectBg
			position:fixed
			width:100%
			height:100%
			top:0
			left:0
			border-radius: 8px
			z-index:1
			background:rgba(0,0,0,0.3)
			display:flex
			align-items:center
			&.fade-enter-to,&.fade-leave-to
				transition:all 0.5s
			&.fade-enter,&.fade-leave-to
				opacity:0
		.version
			position:absolute
			bottom:0
			right:30px
			height:40px
			line-height:40px
			color: $text_color
			font-size: 12px
			
</style>