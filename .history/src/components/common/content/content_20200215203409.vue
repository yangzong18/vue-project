<template>
  <section class="div_content">
    <ul class="ul-header border-1px">
      <!-- pc 页面菜单 --->
      <div class="left-menu">
        <router-link to="/home" class="logo"></router-link>

        this is left menu.

      </div>
    </ul>
  </section>
</template>
<script>
import store from '@/store';
import Api from '@/config/api';
import '@/common/stylus/border-1px/index.styl'
import '@/common/stylus/global.styl'
export default {
  data(){
    return {
      showLeftMenu:false,
    }
  }
}
</script>
<style lang="stylus">
  .div_content
    position:fixed
    top:0
    left:0
    right:0
    height:40px
    line-height:40px
    .ul-header
      position:fixed
      top:0
      left:0
      right:0
      height:40px
      line-height:40px
      z-index:111
      margin:0
      font-size:0
      padding:0 20px
      .left-menu
        a
          list-style:none
          display:inline-block
          font-size:14px
          padding:0 14px
          margin:0
          color:$text_color
          cursor:pointer
          font-family:"Segoe UI",Segoe,Tahoma,Arial,Verdana,sans-serif
          text-decoration:none
          &.router-link-active
            li
              color:$text_color_active
              border-bottom:1px solid $border_color
          &.logo
            padding-left:0
          img
            width:36px
            vertical-align:middle
            border: none
      .right-menu
        position:absolute
        right:10px
        height:40px
        top:0
        font-size:0
        .listmenu
          display:inline-block
          font-size: 14px
          margin:0 8px
          height:100%
          vertical-align: middle
          color:$text_color
          vertical-align:top
          cursor:pointer
          position:relative
          font-weight: 200
          &.router-link-active
            color:$text_color_active
            border-bottom:1px solid $border_color
        a
          list-style:none
          display:inline-block
          font-size:14px
          margin:0 8px
          color:$text_color
          cursor:pointer
          font-family:"Segoe UI",Segoe,Tahoma,Arial,Verdana,sans-serif
          text-decoration:none
          &.router-link-active
            li
              color:$text_color_active
              border-bottom:1px solid $border_color
          li
            // border-bottom:none
            display:flex
            height:40px
            align-items:center
            i
              font-size:18px
              vertical-align: middle
      .fixed-menu
        position:absolute
        left:0
        top:0
        width:50px
        height:40px
        line-height:40px
        text-align:center
        i
          display: inline-block
          font-size: 20px
          vertical-align: middle
          color:$text_color
        &.active
          i
            color:$text_color_active
      .fixed-fade-menu
        position:fixed
        top: 0
        left: 0
        bottom: 0
        right: 0
        background: rgba(0,0,0,0.86)
        &.ios
          -webkit-backdrop-filter: blur(10px)
          background:rgba(0,0,0,0.5)
        &.fade-enter-to,&.fade-leave-to
          transition: all 0.5s
        &.fade-enter,&.fade-leave-to
          opacity:0
        // .fixed-list
        //   position:fixed
        //   top: 0
        //   left: 0
        //   bottom: 0
        //   width:280px
        //   height:100%
        //   background:red
        //   z-index:101
        //   transform:translate3d(0,0,0)
        //   &.slide-left-enter-to,&.slide-left-leave-to
        //     transition: all 0.8s
        //   &.slide-left-enter,&.slide-left-leave-to
        //     transform:translate3d(0,-280px,0)
        .fixed-menu-content
          width:100%
          height:100%
          padding:10px
          box-sizing:border-box
          font-size:14px
          display:flex
          flex-direction:column
          justify-content: center
          a 
            text-decoration:none
            li
              color:#fff
              width:100%
              height:40px
              line-height:40px
              text-align:center
            &.router-link-active
              li
                color:$border_color
                // border-bottom:1px solid $border_color
    .li_list
      transform:translate3d(0,0,0)
      &.fade-enter-to,&.fade-leave-to
        transition: all 0.8s
      &.fade-enter,&.fade-leave-to
        opacity:0
        transform:translate3d(0,50px,0)
  .icon-reward
    &:before
      color: $active_color
</style>