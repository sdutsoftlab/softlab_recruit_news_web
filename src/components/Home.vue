<template>
  <div class="customers container">
    <div>
      <!-- Main component for a primary marketing message or call to action -->
      <div class="jumbotron">
        <h1>软件孵化实验室报名系统</h1>
        <br />
        <p>或许你曾经痴迷于算法，在ACM集训队叱咤纷纭。或许对你来说写个小爬虫比上手王者荣耀还简单。或许你对大数据人工智能非常感兴趣。或许你对前端开发非常擅长, 能分分钟写个界面.</p>
        <p>或许你擅长使用Linux，能写出部分脚本。或许你对Java后端开发以及部分框架有着深入的理解。</p>
        <p>那么来加入我们吧，我们一起加油，一起搞项目。</p>
        
        <br>
          <router-link class="btn btn-lg btn-primary" to="/about">
          了解实验室 »</router-link>
        </p>
      </div>
    </div>
    <div id="req" class="other">
      <!-- Example row of columns -->
      <div class="row">
        <div class="col-md-4">
          <h2>要求一</h2>
          <p>面向全校的大一、大二的学生进行纳新。计算机学院学生优先考虑。其他学院有基础者优先。</p>
        </div>
        <div class="col-md-4">
          <h2>要求二</h2>
          <p>性格开朗，善于交流。可承受一定压力，积极主动。有一定技术基础优先，参与过acm集训优先。</p>
        </div>
        <div class="col-md-4">
          <h2>要求三</h2>
          <p>对技术有一定热情，三分钟热度误入。有责任心和团队合作精神优先。竞赛获奖是加分项。</p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "customers",
  components: {
  },
  data() {
    return {
      alertMsg: "",
      customers: []
    };
  },
  methods: {
  
  },
  created() {
  },
  updated() {
    // this.fetchCustomers();
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.customers {
  margin-top: 100px;
}
th,
td {
  text-align: center;
  vertical-align: middle !important;
}
.other {
  margin-top: 70px;
}
.jumbotron p {
    font-size: 17px;
}
</style>
