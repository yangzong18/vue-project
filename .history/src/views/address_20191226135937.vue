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
              <li v-for="{'check':index == currentIndex}">
                <dl>
                  <dt>Walker Yang</dt>
                  <dd class="address">北京市朝阳区长桥胡同</dd>
                  <dd class="tel">15228876961</dd>
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
                  <a href="javascript:;" class="addr-set-default-btn" style="display:none"><i>设为默认</i></a>
                </div>
                <div class="addr-opration addr-default">默认地址</div>
              </li>
              <li>
                <dl>
                  <dt>Walker Yang</dt>
                  <dd class="address">北京市朝阳区长桥胡同</dd>
                  <dd class="tel">15228876961</dd>
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
                  <a href="javascript:;" class="addr-set-default-btn"><i>设为默认</i></a>
                </div>
              </li>
              <li>
                <dl>
                  <dt>Walker Yang</dt>
                  <dd class="address">北京市朝阳区长桥胡同</dd>
                  <dd class="tel">15228876961</dd>
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
                  <a href="javascript:;" class="addr-set-default-btn" style="display:none"><i>设为默认</i></a>
                </div>
                <div class="addr-opration addr-default">默认地址</div>
              </li>
              <li>
                <dl>
                  <dt>Walker Yang</dt>
                  <dd class="address">北京市朝阳区长桥胡同</dd>
                  <dd class="tel">15228876961</dd>
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
                  <a href="javascript:;" class="addr-set-default-btn" style="display:none"><i>设为默认</i></a>
                </div>
                <div class="addr-opration addr-default">默认地址</div>
              </li>
              <li>
                <dl>
                  <dt>Walker Yang</dt>
                  <dd class="address">北京市朝阳区长桥胡同</dd>
                  <dd class="tel">15228876961</dd>
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
                  <a href="javascript:;" class="addr-set-default-btn" style="display:none"><i>设为默认</i></a>
                </div>
                <div class="addr-opration addr-default">默认地址</div>
              </li>
              <li>
                <dl>
                  <dt>Walker Yang</dt>
                  <dd class="address">北京市朝阳区长桥胡同</dd>
                  <dd class="tel">15228876961</dd>
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
                  <a href="javascript:;" class="addr-set-default-btn" style="display:none"><i>设为默认</i></a>
                </div>
                <div class="addr-opration addr-default">默认地址</div>
              </li>
              <li>
                <dl>
                  <dt>Walker Yang</dt>
                  <dd class="address">北京市朝阳区长桥胡同</dd>
                  <dd class="tel">15228876961</dd>
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
                  <a href="javascript:;" class="addr-set-default-btn" style="display:none"><i>设为默认</i></a>
                </div>
                <div class="addr-opration addr-default">默认地址</div>
              </li>
              <li>
                <dl>
                  <dt>Walker Yang</dt>
                  <dd class="address">北京市朝阳区长桥胡同</dd>
                  <dd class="tel">15228876961</dd>
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
                  <a href="javascript:;" class="addr-set-default-btn" style="display:none"><i>设为默认</i></a>
                </div>
                <div class="addr-opration addr-default">默认地址</div>
              </li>
              <li class="addr-new">
                <div class="add-new-inner">
                  <i class="iconjiahao iconfont">

                  </i>
                  <p >添加新地址</p>
                </div>
              </li>
            </ul>
            <div class="shipping-addr-more">
            <a class="addr-more-btn up-down-btn" href="javascript:">
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
              <li>
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
    data:{
      addressList:[],		//把获取到的jason地址列表储存于此。				
      moreAddressNumber:3,		//默认显示3个设置地址。
      currentIndex:0,		//把第一个地址的样式设为默认地址样式。
      shipmessage:1,
      deleteClass:false,
      addressClass:false,
      address:[]
    },
    methods:{
      getAddressList:function(){
        var _this = this;
        this.$http.get('../data/address.json',{'id':123}).then(function(res){
          _this.addressList = res.data.result;
        });
      },
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