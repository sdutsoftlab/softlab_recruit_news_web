<template>
  <!-- Fixed navbar -->
  <nav class="navbar navbar-default navbar-fixed-top">
    <div class="container">
      <div class="navbar-header">
        <button
          type="button"
          class="navbar-toggle collapsed"
          data-toggle="collapse"
          data-target="#navbar"
          aria-expanded="false"
          aria-controls="navbar"
        >
          <span class="sr-only">Toggle navigation</span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
          <span class="icon-bar"></span>
        </button>
        <router-link to="/" class="navbar-brand">实验室报名系统</router-link>
      </div>
      <div id="navbar" class="navbar-collapse collapse">
        <ul class="nav navbar-nav">
          <li>
            <router-link to="/">首页</router-link>
          </li>
          <li>
            <router-link to="/about">关于我们</router-link>
          </li>
          <li>
            <router-link to="/contact">联系我们</router-link>
          </li>
          <li>
            <router-link to="/new">立即报名</router-link>
          </li>
        </ul>
        <ul class="nav navbar-nav navbar-right">
          <li>
            <router-link to="/query">查询结果</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script>
export default {
  name: "Nav",
  data() {
    return {};
  },
  methods: {}
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>