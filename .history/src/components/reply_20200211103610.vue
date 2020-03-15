<template>
<section class="reply">
    <textarea name="" id="content" rows="8" class="text" :class="{'err':hasError}">

    </textarea>
    <a class="button">确定</a>
</section>
</template>
<script>
export default {
    name:'Reply',
    
}
</script>