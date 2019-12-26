<template>
    <div class="address">
    <div class="container">
        <div class="checkout-addr">
            <!-- process step -->
            <div class="check-step">
            <ul>
                <li class="cur">地址确认</li>
                <li>查看订单</li>
                <li>支付</li>
                <li>订单确认</li>
            </ul>
            </div>
            <!-- address list -->
        <div class="checkout-title">
          <span>配送地址</span>
        </div>
        <div class="addr-list-wrap">
          <div class="addr-list">
            <ul>
              <li v-for="(item,index) in addressLimitBy" :class="{'check':index == currentIndex}" @click="getIndex(index)">
                <dl>
                  <dt>{{item.userName}}</dt>
                  <dd class="address">{{item.streetName}}</dd>
                  <dd class="tel">{{item.tel}}</dd>
                </dl>
                <div class="addr-opration addr-edit">
                  <a href="javascript:;" class="addr-edit-btn">
                    <i class="iconfont iconbianji"></i>
                  </a>
                </div>
                <div class="addr-opration addr-del">
                  <a href="javascript:;" class="addr-del-btn">
                    <i class="iconfont iconshanchu"></i>
                  </a>
                </div>
                <div class="addr-opration addr-set-default">
                  <a href="javascript:;" class="addr-set-default-btn" v-show="!item.isDefault"><i>设为默认</i></a>
                </div>
                <div class="addr-opration addr-default" v-show="item.isDefault">默认地址</div>
              </li>
              <li class="addr-new" @click="addAddress">
                <div class="add-new-inner">
                  <i class="iconjiahao iconfont">

                  </i>
                  <p >添加新地址</p>
                </div>
              </li>
            </ul>
            <div class="shipping-addr-more">
              <a class="addr-more-btn up-down-btn" href="javascript:" @click="loadMoreAddress">
                more
                <i class="i-up-down">
                  <i class="i-up-down-l"></i>
                  <i class="i-up-down-r"></i>
                </i>
              </a>
            </div>
          </div>
        </div>  
        <!-- shipping method-->
        <div class="checkout-title">
          <span>配送方式</span>
        </div>
        <div class="shipping-method-wrap">
          <div class="shipping-method">
            <ul>
              <li :class="{'check':shipmessage}">
                <div class="name">标准配送</div>
                <div class="price">Free</div>
              </li>
              <li>
                <div class="name">高级配送</div>
                <div class="price">180</div>
              </li>
            </ul>
          </div>
        </div>
        <div class="next-btn-wrap">
          <a href="javascript:;" class="btn btn--red">下一步</a>
        </div>
        </div>
        
    </div>
    
  </div>
</template>
<script>
export default {
    name:'Address',
    data(){
      return {
          addressList:[],		//把获取到的jason地址列表储存于此。				
          moreAddressNumber:3,		//默认显示3个设置地址。
          currentIndex:0,		//把第一个地址的样式设为默认地址样式。
          shipmessage:1,
          deleteClass:false,
          addressClass:false,
          address:[]
      }
    },
    mounted:function(){
      this.$nextTick(function(){
        this.getAddressList();
      })
    },
    computed:{
      //修饰addressList数组，只显示前三项并返回
      addressLimitBy:function(){
        return this.addressList.slice(0,this.moreAddressNumber);
      }
    },
    methods:{
      getAddressList:function(){
        var _this = this;
        this.$http.get('/static/data/address.json',{'id':123}).then(function(res){
          _this.addressList = res.data.result;
        });
      },
      getIndex:function(index){
          //将触发点击事件的元素索引传入函数，把触发点击事件的<li>赋予选中样式。
			  this.currentIndex = index;
      },

      addAddress:function() {
        
      },
      loadMoreAddress:function(){
        console.log(this.moreAddressNumber)
        if(this.moreAddressNumber === 3){
          this.moreAddressNumber = this.addressList.length;
        }else {
          this.moreAddressNumber = 3;
        }
      }
    }

}
</script>
<style>
@import '../../static/css/address.css';
.address dl {
  text-align: left;
}
.add-new-inner i {
  font-size: 50px;
}
</style>