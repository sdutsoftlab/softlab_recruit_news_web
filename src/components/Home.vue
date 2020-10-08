<template>
  <div class="customers container">
    <div>
      <!-- Main component for a primary marketing message or call to action -->
      <div class="jumbotron">
        <h1>软件孵化实验室报名系统</h1>
        <br />
        <p>或许你曾经痴迷于算法，是ACM集训队的一员，常常为看到“accept”而兴奋的手足舞蹈；或许你熟悉网络抓包，写个小爬虫比上手王者荣耀还简单。
          有可能你对前端、后端开发有一定基础，对大数据，人工智能比较感兴趣，有着一定的项目开发经验。有可能你擅长其他编程语言，能上手一些简单的小项目。
        </p>
        <p>即使你还不了解其他一些语言、技术，其实也无妨</p>
        <p>只要你热忠于新技术，学习能力强，对新事物保有好奇心，并能快速适应新环境。对所在领域有热情，相信方法总比困难多，善于独立思考并反思总结。还在犹豫什么？我们期待着你的加入！</p>
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
          <p>性格开朗，善于交流。可承受一定压力，积极主动，自学较强。有一定技术基础优先，参与过acm集训优先。</p>
        </div>
        <div class="col-md-4">
          <h2>要求三</h2>
          <p>对技术有一定热情。有责任心和团队合作精神优先。竞赛获奖，实际项目是加分项。</p>
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
