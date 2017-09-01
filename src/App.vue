<template>
  <div id="app">
      <button @click="toast">toast</button>
      <pre class="code">
          this.$Toast(`数据出错, 请稍候重试`);
      </pre>
      <button @click="success">success</button>
      <pre class="code">
  this.$Toast.offline('this is success message');
      </pre>
      <button @click="loading">loading</button>
      <pre class="code">
  this.$Toast.offline('this is loading message');
      </pre>
      <button @click="fail">fail</button>
      <pre class="code">
  this.$Toast.offline('this is fail message');
      </pre>
      <button @click="offline">offline</button>
      <pre class="code">
  this.$Toast.loading('this is offline message');
      </pre>
  </div>
</template>

<script>
export default {
  name: 'app',
  mounted() { 
      // this.$Toast(`数据出错, 请稍候重试`);
      // setTimeout(() => {
      //   this.$Toast(`数据出错, 请稍候重试`);
      // }, 2000);
      // setTimeout(() => {
      //   this.$Toast(`数据出错, 请稍候重试`);
      // }, 4000);
      // // this.$Toast.success();
      // // this.$Toast.loading();
      // // this.$Toast.fail();
      // this.$Toast.offline();
      // setTimeout(() => {
      //   // this.$Toast.Dismiss();
      // }, 4000);
  },
  data() {
    return {

    }
  },
  methods: {
    toast() {
      this.$Toast(`数据出错, 请稍后重试`);
    },
    success() {
      this.$Toast.success('this is success message');
    },
    fail() {
      this.$Toast.fail('this is fail message');
    },
    offline() {
      this.$Toast.offline('this is offline message');
    },
    loading() {
      this.$Toast.loading('this is loading message');
    }
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
