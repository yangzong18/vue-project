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
        
    </div>
    
  </div>
</template>
<script>
export default {
    name:'Address',
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