<template>
<section class="reply">
    <textarea name="" id="content" rows="8" class="text" 
    :class="{'err':hasErr}" 
    v-model="content"
    placeholder='回复支持Markdown语法,请注意标记代码'
    >

    </textarea>
    <a class="button">确定</a>
</section>
</template>
<script>
export default {
    name:'Reply',
    
}
</script>