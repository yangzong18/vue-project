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
        </div>
        <!-- address list -->
        <div class="checkout-title">
          <span>配送地址</span>
        </div>
        <div class="addr-list-wrap">
          <div class="addr-list">
            <ul>
              <li>
                <dl>
                  <dt>Walker Yang</dt>
                  <dd class="address">北京市朝阳区长桥胡同</dd>
                  <dd class="tel">15228876961</dd>
                </dl>
                <div class="addr-opration addr-edit">
                  <a href="javascript:;" class="addr-edit-btn">
                    <i class="iconfont iconcheck-circle"></i>
                  </a>
                </div>
                <div class="addr-opration addr-del">
                  <a href="javascript:;" class="addr-del-btn">
                    <svg class="icon icon-del"><use xlink:href="#icon-del"></use></svg>
                  </a>
                </div>
                <div class="addr-opration addr-set-default">
                  <a href="javascript:;" class="addr-set-default-btn"><i>设为默认</i></a>
                </div>
                <div class="addr-opration addr-default">默认地址</div>
              </li>
            </ul>
          </div>
        </div>  
    </div>
  </div>
</template>
<script>
export default {
    name:'Address',
}
</script>
<style scoped>
@import '../../static/css/address.css';
</style>