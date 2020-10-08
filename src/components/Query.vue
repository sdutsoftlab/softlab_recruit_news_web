<template>
  <div class="add container">
    <h1 class="page-header">查询结果</h1>
    <form v-on:submit="query">
      <div class="well">
        <div class="form-group">
          <label>学号</label>
          <input type="text" class="form-control" v-model="username" placeholder="学号（必填）" />
        </div>

        <button type="submit" class="btn btn-primary">提交查询</button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: "query",
  data() {
    return {
      username: ""
    };
  },
  methods: {
    query(e) {
      if (this.username != null) {
        this.$axios
          .get("user/query?uid=" + this.username)
          .then(resp => {
            alert(resp.data.message);
          })
          .catch(error => {
            alert("查询无此人");
          });
      } else {
        alert("请填写完整的数据");
      }

      e.preventDefault(); // 去掉表单默认提交行为
    }
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.add {
  margin-top: 70px;
}
</style>
