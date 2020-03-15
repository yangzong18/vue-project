<template>
  <div id="app">
    <search v-show="!blurBgShow" @searchshow="rankshow=false" @searchhide="rankshow=true"></search>
    
  </div>
</template>