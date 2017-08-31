<template>
  <div id="app">
      toast
  </div>
</template>

<script>
export default {
  name: 'app',
  mounted() { 
      this.$Toast(`数据出错, 请稍候重试`);
      setTimeout(() => {
        this.$Toast(`数据出错, 请稍候重试`);
      }, 2000);
      setTimeout(() => {
        this.$Toast(`数据出错, 请稍候重试`);
      }, 4000);
      // this.$Toast.success();
      // this.$Toast.loading();
      // this.$Toast.fail();
      this.$Toast.offline();
      setTimeout(() => {
        // this.$Toast.Dismiss();
      }, 4000);
  },
  data() {
    return {

    }
  },
  methods: {
  }
}
</script>

<style lang="scss">
.example {
  text-align: center;
  margin-bottom: 20px;
  button {
    border: 1px solid #ccc;
    height: 30px;
    background: #fff;
  }
}
</style>
