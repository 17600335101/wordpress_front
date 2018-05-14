<template>
  <div class="login">
    <el-form>
      <el-form-item label="用户名">
        <el-input type="text" v-model="formLabelAlign.name" placeholder="请输入姓名"></el-input>
      </el-form-item>
      <el-form-item label="密码">
        <el-input type="password" v-model="formLabelAlign.pwd" placeholder="密码"></el-input>
      </el-form-item>
      <el-form-item>
        <el-checkbox v-model="formLabelAlign.dl">记住我的登陆信息</el-checkbox>
        <el-button @click='Dclick'>登陆</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>
<script>
  import axios from 'axios'
  import { toQstring } from '../../assets/until';
  export default {
    data() {
      return {
        formLabelAlign: {
          name: '',
          pwd: '',
          dl: '',
          switch: false
        }
      }
    },
    methods: {
         open() {
        this.$message('您还未注册信息，请注册信息');
      },
      open2() {
        this.$message({
          message: '登陆成功',
          type: 'success'
        });
      },

      open3() {
        this.$message({
          message: '用户或密码不能为空',
          type: 'warning'
        });
      },
      open4() {
        this.$message.error('用户名或密码格式不正确,请重新输入');
      },
      Dclick() {
        let set = toQstring({
          user_name: this.formLabelAlign.name,
          user_password: this.formLabelAlign.pwd
        })
        axios.post(host + '/users/login', set).then((response) => {
          if (this.formLabelAlign.name === '' || this.formLabelAlign.pwd === '') {
            this.open3()
          } else if (response.data.status === 'err') {
            this.open4()
          } else if(response.data.status === 'ok') {
            this.open2()
            this.$router.push('/home')
          }else{
            this.open(1)
          }
        })
      }
    }
  }

</script>

<style scoped>
  .login {
    padding: 18vh 0;
    width: 400px;
    margin: auto;
  }

  .login form {
    background: #dec;
    ;
  }
</style>