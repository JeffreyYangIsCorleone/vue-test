<template>
  <div class="second">
    <p class="dd">Second Page!</p>
    <button id="jj">点击</button>

  </div>
</template>
<script>
// import $ from 'jquery'

export default {
  mounted() {
    $("#jj").click(function() {
      alert("111");
    });
  },
  methods: {}
};
</script>
<style lang="scss" scoped>
.second{
  background-color: red;
  .dd{
      
  }
}
</style>

