<template>
    <div class="checkout">
        <div class="container">
            <div class="checkout-title">
              <span>购物车</span>
            </div>
            <div class="item-list-wrap">
                <div class="cart-item">
                    <div class="cart-item-head">
                        <ul>
                            <li>商品信息</li>
                            <li>商品单价</li>
                            <li>商品数量</li>
                            <li>总金额</li>
                            <li>编辑</li>
                        </ul>
                    </div>
                    <ul class="cart-item-list">
                        <li>
                            <div class="cart-tab-1">
                                <div class="cart-item-check">
                                    <a href="javascript:;" class="href">
                                        <i class="iconcircle iconfont"></i>
                                    </a>
                                </div>
                                <div class="cart-item-pic">
                                    <!--遍历，绑定src的值到获取到的json图片地址-->
                                    <img alt="烟" v-bind:src="item.productImage">
                      </div>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    </div>
</template>
<style>
@import '../../static/css/address.css';
@import '../../static/css/modal.css';
.address dl {
  text-align: left;
}
.add-new-inner i {
  font-size: 50px;
}
</style>