<template>
  <div class="add container">
    <h1 class="page-header">填写报名信息</h1>
    <form v-on:submit="addCustomer">
      <div class="well">
        <div class="form-group">
          <label>学号</label>
          <input
            type="text"
            class="form-control"
            v-model="customer.uid"
            placeholder="学号（必填）"
          />
        </div>
        <div class="form-group">
          <label>姓名</label>
          <input
            type="text"
            class="form-control"
            v-model="customer.name"
            placeholder="姓名（必填）"
          />
        </div>
        <div class="form-group">
          <label>班级</label>
          <input
            type="text"
            class="form-control"
            v-model="customer.class"
            placeholder="班级（必填）"
          />
        </div>
        <div class="form-group">
          <label>性别</label>
          <select class="form-control" v-model="customer.gender">
            <option>男</option>
            <option>女</option>
          </select>
        </div>
        <div class="form-group">
          <label>QQ号</label>
          <input
            type="tel"
            class="form-control"
            v-model="customer.qNum"
            placeholder="QQ号（必填）"
          />
        </div>
        <div class="form-group">
          <label
            >个人简历(简述个人技术栈、目标方向、项目经历等或其他体现自学能力的内容。有博客者可以贴出地址。竞赛获奖是加分项。)</label
          >
          <textarea
            class="form-control"
            rows="10"
            v-model="customer.profile"
            placeholder="请各位同学一定要认真填写，顺便填写一周内来实验室的时间。"
          ></textarea>
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
      customer: {},
    };
  },
  methods: {
    addCustomer(e) {
      if (
        this.customer.uid != null &&
        this.customer.name != null &&
        this.customer.gender != null &&
        this.customer.qNum != null &&
        this.customer.class != null
      ) {
        let newCustomer = {
          uid: this.customer.uid,
          name: this.customer.name,
          gender: this.customer.gender,
          qq: this.customer.qNum,
          className: this.customer.class,
          profile: this.customer.profile,
        };
        this.$axios
          .post("user/post", newCustomer)
          .then((resp) => {
            alert(resp.data.message);
          })
          .catch((error) => {
            alert("报名失败, 网络错误");
          });
      } else {
        alert("请填写完整的数据");
      }
      e.preventDefault(); // 去掉表单默认提交行为
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.add {
  margin-top: 70px;
}
</style>
