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
                        <li v-for="(product,key) in productList">
                            <div class="cart-tab-1">
                                <div class="cart-item-check">
                                    <a href="javascript:;" class="href">
                                        <i class="iconcircle iconfont"></i>
                                    </a>
                                </div>
                                <div class="cart-item-pic">
                                    <!--遍历，绑定src的值到获取到的json图片地址-->
                                    <img v-bind:alt="product.productName" v-bind:src="product.productImage">
                                </div>
                                <div class="cart-item-title">
                                    <!--遍历，绑定文本值到取到的json的产品名称-->
                                    <div class="item-name">{{</div>
                                </div>
                                <div class="item-include">
                                    <dl>
                                        <dt>赠送:</dt>
                                        <!-- v-for里面嵌套遍历，注意item-->
                                        <dd>打火机</dd>
                                    </dl>
                                </div>
                            </div>
                            <div class="cart-tab-2">
                                <!--遍历，绑定文本值到取到的json的产品价格，并用过滤去filters进行处理-->
                                <div class="item-price">¥ 19.00</div>
                            </div>
                            <div class="cart-tab-3">
                                <div class="item-quantity">
                                    <div class="select-self select-self-open">
                                    <div class="quantity">
                                        <a href="javascript:void 0" > - </a>
                                        <input type="text" value="1" disabled style="max-width: 66px">
                                        <a href="javascript:void 0"> + </a>
                                    </div>
                                    </div>
                                    <div class="item-stock">有货</div>
                                </div>
                            </div>
                            <div class="cart-tab-4">
                                <div class="item-price-total">¥ 19.00</div>
                            </div>
                            <div class="cart-tab-4">
                                <i class="iconfont iconshanchu"></i>
                            </div>
                        </li>
                        <li>
                            <div class="cart-tab-1">
                                <div class="cart-item-check">
                                    <a href="javascript:;" class="href">
                                        <i class="iconcircle iconfont"></i>
                                    </a>
                                </div>
                                <div class="cart-item-pic">
                                    <!--遍历，绑定src的值到获取到的json图片地址-->
                                    <img alt="烟" src="../../static/img/goods-1.jpg">
                                </div>
                                <div class="cart-item-title">
                                    <!--遍历，绑定文本值到取到的json的产品名称-->
                                    <div class="item-name">长城牌香烟</div>
                                </div>
                                <div class="item-include">
                                    <dl>
                                        <dt>赠送:</dt>
                                        <!-- v-for里面嵌套遍历，注意item-->
                                        <dd>打火机</dd>
                                    </dl>
                                </div>
                            </div>
                            <div class="cart-tab-2">
                                <!--遍历，绑定文本值到取到的json的产品价格，并用过滤去filters进行处理-->
                                <div class="item-price">¥ 19.00</div>
                            </div>
                            <div class="cart-tab-3">
                                <div class="item-quantity">
                                    <div class="select-self select-self-open">
                                    <div class="quantity">
                                        <a href="javascript:void 0" > - </a>
                                        <input type="text" value="1" disabled style="max-width: 66px">
                                        <a href="javascript:void 0"> + </a>
                                    </div>
                                    </div>
                                    <div class="item-stock">有货</div>
                                </div>
                            </div>
                            <div class="cart-tab-4">
                                <div class="item-price-total">¥ 19.00</div>
                            </div>
                            <div class="cart-tab-4">
                                <i class="iconfont iconshanchu"></i>
                            </div>
                        </li>
                        <li>
                            <div class="cart-tab-1">
                                <div class="cart-item-check">
                                    <a href="javascript:;" class="href">
                                        <i class="iconcircle iconfont"></i>
                                    </a>
                                </div>
                                <div class="cart-item-pic">
                                    <!--遍历，绑定src的值到获取到的json图片地址-->
                                    <img alt="烟" src="../../static/img/goods-1.jpg">
                                </div>
                                <div class="cart-item-title">
                                    <!--遍历，绑定文本值到取到的json的产品名称-->
                                    <div class="item-name">长城牌香烟</div>
                                </div>
                                <div class="item-include">
                                    <dl>
                                        <dt>赠送:</dt>
                                        <!-- v-for里面嵌套遍历，注意item-->
                                        <dd>打火机</dd>
                                    </dl>
                                </div>
                            </div>
                            <div class="cart-tab-2">
                                <!--遍历，绑定文本值到取到的json的产品价格，并用过滤去filters进行处理-->
                                <div class="item-price">¥ 19.00</div>
                            </div>
                            <div class="cart-tab-3">
                                <div class="item-quantity">
                                    <div class="select-self select-self-open">
                                    <div class="quantity">
                                        <a href="javascript:void 0" > - </a>
                                        <input type="text" value="1" disabled style="max-width: 66px">
                                        <a href="javascript:void 0"> + </a>
                                    </div>
                                    </div>
                                    <div class="item-stock">有货</div>
                                </div>
                            </div>
                            <div class="cart-tab-4">
                                <div class="item-price-total">¥ 19.00</div>
                            </div>
                            <div class="cart-tab-4">
                                <i class="iconfont iconshanchu"></i>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
             <!-- footer -->
            <div class="cart-foot-wrap">
              <div class="cart-foot-l">
                <div class="item-all-check">
                  <a href="javascript:void 0">
                    <span class="item-check-btn" >
                      <i class="iconfont iconcircle"></i>
                    </span>
                    <span>全选</span>
                  </a>
                </div>
              </div>
              <div class="cart-foot-r">
                <div class="item-total">
                  <!--全部商品合集金额-->
                                    合计金额: <span class="total-price">¥ 19.00</span>
                </div>
                <div class="next-btn-wrap">
                  <a href="javascrit:;" class="btn btn--red" style="width: 200px">结账</a>
                </div>
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
.quentity input {
            width: 40px;
            padding: 5px 10px;
            text-align: center;
        }
        .quantity a{
        	font-size: 26px;
        }
        [v-cloak] { 
        	display: none;
        }
</style>
<script>
export default {
    name:'Cart',
    data(){
      return {
          productList:[],		//把获取到的jason地址列表储存于此。	
          totalMoney:0,			
      }
    },
    mounted:function(){
      this.$nextTick(function(){
        this.cartView();
      })
    },
    methods:{
        cartView:function(){
            var _this = this;
            this.$http.get('/static/data/cart.json',{'id':123}).then(function(res){
                _this.productList = res.data.result.list;

            });
        }
    }
}
</script>