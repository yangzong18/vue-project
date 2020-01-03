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
                                    <a href="javascript:;" class="item-check-btn" :class="{'check':product.ischecked}" @click="selectedItem(product)">
                                        <i class="iconfont" :class="product.ischecked ? 'iconcircle-chose-yellow':'iconcircle'"></i>
                                    </a>
                                </div>
                                <div class="cart-item-pic">
                                    <!--遍历，绑定src的值到获取到的json图片地址-->
                                    <img v-bind:alt="product.productName" v-bind:src="product.productImage">
                                </div>
                                <div class="cart-item-title">
                                    <!--遍历，绑定文本值到取到的json的产品名称-->
                                    <div class="item-name">{{ product.productName }}</div>
                                </div>
                                <div class="item-include">
                                    <dl>
                                        <dt>赠送:</dt>
                                        <!-- v-for里面嵌套遍历，注意item-->
                                        <dd v-for="(part,index) in product.parts">{{part.partsName}}</dd>
                                    </dl>
                                </div>
                            </div>
                            <div class="cart-tab-2">
                                <!--遍历，绑定文本值到取到的json的产品价格，并用过滤去filters进行处理-->
                                <div class="item-price">{{product.productPrice | chineseYuan}}</div>
                            </div>
                            <div class="cart-tab-3">
                                <div class="item-quantity">
                                    <div class="select-self select-self-open">
                                    <div class="quantity">
                                        <a href="javascript:void 0" @click="changeQuantity(product,-1)"> - </a>
                                        <input type="text" v-bind:value="product.productQuantity" disabled style="max-width: 66px">
                                        <a href="javascript:void 0" @click="changeQuantity(product,1)"> + </a>
                                    </div>
                                    </div>
                                    <div class="item-stock">有货</div>
                                </div>
                            </div>
                            <div class="cart-tab-4">
                                <div class="item-price-total">{{product.productPrice*product.productQuantity|chineseYuan}}</div>
                            </div>
                            <div class="cart-tab-4">
                                <a href="jacascript:;" class="href" @click="removeItem(product)">
                                    <i class="iconfont iconshanchu"></i>
                                </a>
                                
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
                    <span class="item-check-btn" @click="checkAll()">
                      <i class="iconfont " :class="selectedAll ? 'iconcircle-chose-yellow':'iconcircle'"></i>
                    </span>
                    <span>全选</span>
                  </a>
                </div>
              </div>
              <div class="cart-foot-r">
                <div class="item-total">
                  <!--全部商品合集金额-->
                                    合计金额: <span class="total-price">{{totalMoney|chineseYuan}}</span>
                </div>
                <div class="next-btn-wrap">
                  <a href="javascrit:;" class="btn btn--red" style="width: 200px">结账</a>
                </div>
              </div>
            </div>
            <div class="md-modal modal-msg md-modal-transition" :class="{ 'md-show':deleteClass }" id="showModal">
          <div class="md-modal-inner">
            <div class="md-top">
              <button class="md-close" @click="deleteClass=false">关闭</button>
            </div>
            <div class="md-content">
              <div class="confirm-tips">
                <p id="cusLanInfo">你确认删除此商品吗?</p>
              </div>
              <div class="btn-wrap col-2">
                <button class="btn btn--m" id="btnModalConfirm" @click="removeClass">Yes</button>
                <button class="btn btn--m btn--red" id="btnModalCancel" @click="deleteClass=false">No</button>
              </div>
            </div>
          </div>
        </div>
        <div class="md-overlay" v-if="deleteClass"></div>
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
</style>
<script>
export default {
    name:'Cart',
    data(){
      return {
          productList:[],		//把获取到的jason地址列表储存于此。	
          totalMoney:0,	
          deleteClass:false,
          currentClass:'',
          selectedAll:false,

      }
    },
    filters:{
      //Vue 2.0瘦身了很多自带filter,能用原生写的全部清理掉
      chineseYuan:function(val){
        if(!val) return '0';
        return '¥ ' + val.toFixed(2);//真正项目中需要后代反馈金额，JS会导致金额误差
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
        },
        changeQuantity:function(product,type){
            if(type > 0){
                product.productQuantity++;
            }else{
                if(product.productQuantity < 2){
                    product.productQuantity = 1;
                }else{
                    product.productQuantity--;
                }
            }
        },
        removeItem:function(product){
          this.deleteClass = true;
			    this.currentClass = product;
        },
        removeClass:function(){
            //indexOf方法接受一个值，在数组中进行检索这个值是否存在，这个值可以使字符串、数字、和对象
          var index = this.productList.indexOf(this.currentClass);
          this.productList.splice(index,1);
          this.deleteClass = false;
          this.calcTotalmoney();//删除商品后重新计算总金额
        },
        calcTotalmoney:function(){
            var _this = this;
            this.totalMoney = 0;
            this.productList.forEach(function(val,key){
                if(val.isChecked){
                    _this.totalMoney += val.productPrice*val.productQuantity
                }
            })
        },
        selectedItem:function(product){
            if(typeof product.ischecked === 'undefined'){
              //局部$set方法，在item里注册ischecked属性，赋值为true
              this.$set(product,'ischecked',true);
            }else {
              //点击反转属性值
              product.ischecked = !product.ischecked;
            }

            var _this = this;
            this.productList.forEach(function(val,index){
              console.log(_this)
              if(typeof val.ischecked === 'undefined'){
                _this.selectedAll = false;
              }else{
                _this.selectedAll = true;
              }
            });
            this.calcTotalmoney();
        },
        checkAll:function(){
            //根据传参决定是全选还是取消全选
            this.selectedAll = !this.selectedAll;
            var _this = this;//用ES5方法解决this指向问题
            //forEach()，val为数据的每一项，index为每一项的索引
            this.productList.forEach(function(val,index){
              //同样的，因为json内没有确定是否选择的属性，我们需要自己创建一个表示每一项商品是否被选择的属性，
              //通过局部注册来注册data里的每一项商品的ischecked属性。
              if(typeof val.ischecked === 'undefined'){
                _this.$set(val,'ischecked',_this.selectedAll);
              }else {
                val.ischecked = _this.selectedAll;
              }
            });
            console.log(this.selectedAll)
			this.calcTotalmoney();// 全选/非全选 商品重新计算总金额
		},

    }
}
</script>