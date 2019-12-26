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
                  <a href="javascript:;" class="addr-edit-btn" @click="editAddress(item)">
                    <i class="iconfont iconbianji"></i>
                  </a>
                </div>
                <div class="addr-opration addr-del">
                  <a href="javascript:;" class="addr-del-btn" @click="removeAddress(item)">
                    <i class="iconfont iconshanchu"></i>
                  </a>
                </div>
                <div class="addr-opration addr-set-default">
                  <a href="javascript:;" class="addr-set-default-btn" v-show="!item.isDefault" @click="setDefault(item.addressId)"><i>设为默认</i></a>
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
              <li :class="{'check':shipmessage == 1}" @click="shipmessage = 1">
                <div class="name">标准配送</div>
                <div class="price">Free</div>
              </li>
              <li :class="{'check':shipmessage == 2}" @click="shipmessage = 2">
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
    <div class="md-modal modal-msg md-modal-transition" :class="{ 'md-show':deleteClass }" id="showModal">
      <div class="md-modal-inner">
        <div class="md-top">
          <button class="md-close" @click="deleteClass=false">关闭</button>
        </div>
        <div class="md-content">
          <div class="confirm-tips">
            <p id="cusLanInfo">你确认删除此配送地址信息吗?</p>
          </div>
          <div class="btn-wrap col-2">
            <button class="btn btn--m" @click="removeClass">Yes</button>
            <button class="btn btn--m btn--red" @click="deleteClass=false">No</button>
          </div>
        </div>
      </div>
    </div>
    <div class="md-modal modal-msg md-modal-transition" :class="{ 'md-show':addressClass }" id="showModaladd">
      <div class="md-modal-inner">
        <div class="md-top">
          <button class="md-close" @click="addressClass=false">关闭</button>
        </div>
        <div class="md-form-item">
          <label class="md-form-item__label" style="width: 80px;">
            姓名
          </label>
          <div class="md-form-item__content" style="margin-left: 80px;">
            <div  class="el-input">
              <input type="text" name="userName" v-model="address.userName" autocomplete="off" class="md-input__inner">
            </div>
          </div>
        </div>
        <div class="md-form-item">
          <label class="md-form-item__label" style="width: 80px;">
            地址
          </label>
          <div class="md-form-item__content" style="margin-left: 80px;">
            <div  class="el-input">
              <input type="text" name="streetName" v-model="address.streetName" autocomplete="off" class="md-input__inner">
            </div>
          </div>
        </div>
        <div class="md-form-item">
          <label class="md-form-item__label" style="width: 80px;">
            手机号
          </label>
          <div class="md-form-item__content" style="margin-left: 80px;">
            <div  class="el-input">
              <input type="text" name="tel" v-model="address.tel" autocomplete="off" class="md-input__inner">
            </div>
          </div>
        </div>
        <div class="md-content">
          <div class="btn-wrap col-2">
            <button class="btn btn--m" @click="addAddressPost">保存</button>
            <button class="btn btn--m btn--red" @click="addressClass=false">取消</button>
          </div>
        </div>
      </div>
    </div>
    <div class="md-modal modal-msg md-modal-transition" :class="{ 'md-show':editClass }" id="showModaledit">
      <div class="md-modal-inner">
        <div class="md-top">
          <button class="md-close" @click="editClass=false">关闭</button>
        </div>
        <div class="md-form-item">
          <label class="md-form-item__label" style="width: 80px;">
            姓名
          </label>
          <div class="md-form-item__content" style="margin-left: 80px;">
            <div  class="el-input">
              <input type="text" name="userName" v-model="editItem.userName" autocomplete="off" class="md-input__inner">
            </div>
          </div>
        </div>
        <div class="md-form-item">
          <label class="md-form-item__label" style="width: 80px;">
            地址
          </label>
          <div class="md-form-item__content" style="margin-left: 80px;">
            <div  class="el-input">
              <input type="text" name="streetName" v-model="editItem.streetName" autocomplete="off" class="md-input__inner">
            </div>
          </div>
        </div>
        <div class="md-form-item">
          <label class="md-form-item__label" style="width: 80px;">
            手机号
          </label>
          <div class="md-form-item__content" style="margin-left: 80px;">
            <div  class="el-input">
              <input type="text" name="tel" v-model="editItem.tel" autocomplete="off" class="md-input__inner">
            </div>
          </div>
        </div>
        <div class="md-content">
          <div class="btn-wrap col-2">
            <button class="btn btn--m" @click="editAddressPost">保存</button>
            <button class="btn btn--m btn--red"  @click="editClass=false">取消</button>
          </div>
        </div>
      </div>
    </div>
    <div class="md-overlay" v-if="deleteClass"></div>
    <div class="md-overlay" v-if="addressClass"></div>
    <div class="md-overlay" v-if="editClass"></div>
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
          editClass:false,
          address:[],
          editItem:[],
          editId:0,
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
      },
      setDefault:function(addressId){
        //形参addressId实际上等于参数item.addressId，相当于把出发点击事件的地址的ID传入进来。
        //遍历整个地址数组的每一项，把每一项元素的addressId与触发点击事件的addressId进行对比，
        //一致的元素就是我们点击的那个元素。
        this.addressList.forEach(function(address,key){
          if (addressId == address.addressId){
            address.isDefault = true;
          } else {
            address.isDefault = false;
          }
        })
      },
      removeAddress:function(item){
        this.deleteClass = true;
        this.currentClass = item;
      },
      removeClass:function(){
        //indexOf方法接受一个值，在数组中进行检索这个值是否存在，这个值可以使字符串、数字、和对象
        var index = this.addressList.indexOf(this.currentClass);
        this.addressList.splice(index,1)
        this.deleteClass = false;
      },
      addAddress:function(){
        this.addressClass = true;
      },
      addAddressPost:function(){
        this.addressList.push(this.address)
        this.addressLimitBy.push(this.address)
        this.address = [];
        this.addressClass = false;
      },
      editAddress:function(item){
        console.log(item)
        this.editClass = true;
        this.editItem = item;
        this.editItem['']
      },
      editAddressPost:function(){
        this.editItem = [];
        this.addressList.push(this.address)
        this.addressLimitBy.push(this.address)
        this.address = [];
        this.addressClass = false;
      },
    }

}
</script>
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