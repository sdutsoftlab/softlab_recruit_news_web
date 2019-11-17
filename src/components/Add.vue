<template>
  <div class="add container">
    <h1 class="page-header">填写报名信息</h1>
    <form v-on:submit="addCustomer">
      <div class="well">
        <div class="form-group">
          <label>学号</label>
          <input type="text" class="form-control" v-model="customer.username" placeholder="学号（必填）" />
        </div>
        <div class="form-group">
          <label>姓名</label>
          <input type="text" class="form-control" v-model="customer.name" placeholder="姓名（必填）" />
        </div>
        <div class="form-group">
          <label>性别</label>
          <select class="form-control" v-model="customer.gender">
            <option></option>
            <option>男</option>
            <option>女</option>
          </select>
        </div>
        <div class="form-group">
          <label>手机号</label>
          <input type="tel" class="form-control" v-model="customer.phoneNum" placeholder="手机号（必填）" />
        </div>
        <div class="form-group">
          <label>邮箱</label>
          <input type="email" class="form-control" v-model="customer.email" placeholder="邮箱" />
        </div>
        <div class="form-group">
          <label>个人简历(简述个人技术栈、目标方向、项目经历等。竞赛获奖是加分项)</label>
          <textarea class="form-control" rows="10" v-model="customer.profile"></textarea>
        </div>
        <button type="submit" class="btn btn-primary">提交信息</button>
      </div>
    </form>
  </div>
</template>

<script>
import qs from "qs";
export default {
  name: "add",
  data() {
    return {
      customer: {}
    };
  },
  methods: {
    addCustomer(e) {
      if (
        this.customer.username != null &&
        this.customer.name != null &&
        this.customer.phoneNum != null
      ) {
        let newCustomer = {
          username: this.customer.username,
          name: this.customer.name,
          gender: this.customer.gender,
          phoneNum: this.customer.phoneNum,
          email: this.customer.email,
          profile: this.customer.profile
        };

        alert("报名未开放");
        // this.$axios
        //   .post("/addCustomer", newCustomer)
        //   .then(resp => {
        //     alert(resp.data.message + " 请加qq群：8888298");
        //     this.$router.push("/");
        //   })
        //   .catch(error => {
        //     alert("报名失败");
        //   });
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
