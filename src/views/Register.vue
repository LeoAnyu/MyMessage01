<template>
  <div>
    <el-form :rules="rules" ref="loginForm" :model="loginForm" class="loginContainer">
      <el-form-item>
        <h1 class="loginTitle">欢迎注册</h1>
      </el-form-item>
      <el-form-item prop="username">
        <el-input type="text" auto-complete="false" v-model="loginForm.username" placeholder="请输入注册用户名"></el-input>
      </el-form-item>
      <el-form-item prop="password1">
        <el-input type="password" auto-complete="false" v-model="loginForm.password1" placeholder="请输入注册密码"></el-input>
      </el-form-item>
      <el-form-item prop="password2">
        <el-input type="password" auto-complete="false" v-model="loginForm.password2" placeholder="请确认注册密码"></el-input>
      </el-form-item>
      <el-form-item prop="code">
        <el-input class="loginPictureInput" type="text" auto-complete="false" v-model="loginForm.code" placeholder="点击图片更换验证码"></el-input>
        <img :src="captchaUrl">
      </el-form-item>
      <el-form-item>
        <el-checkbox v-model="checked" class="loginRemember">记住我</el-checkbox>
        <el-row :gutter="160">
          <el-col :span="6" :offset="2"><div class="grid-content bg-purple">
            <el-button type="primary" style="width: 100px" @click="submitRegister">注册</el-button>
          </div></el-col>
          <el-col :span="6"><div class="grid-content bg-purple">
            <el-button type="primary" style="width: 100px" @click="backLogin">返回</el-button>
          </div></el-col>
        </el-row>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "Register",
  data() {
    return {
      captchaUrl: '',
      loginForm: {
        username: '',
        password1: '',
        password2: '',
        code: ''
      },
      checked: false,
      rules: {
        username: [
          {required: true, message: '请输入注册用户名', trigger: 'blur'},
          {min: 3, max: 5, message: '长度在3到5个字符', trigger: 'blur'}
        ],
        password1: [
          {required: true, message: '请输入注册密码', trigger: 'blur'}
        ],
        password2: [
          {required: true, message: '请确认注册密码', trigger: 'blur'},
          {  }
        ],
        code: [
          {required: true, message: '请输入验证码', trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    backLogin() {
      this.$router.push('/');
    },
    submitRegister() {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
          this.$message({
            message: '注册成功，请登录您的账号！',
            type: 'success'
          });
          this.$router.replace('/');
        } else {
          this.$message.error('注册失败，输入内容有误，请重新检查输入项！');
          console.log('登录失败，输入内容有误。');
          return false;
        }
      });
    },
  }
}
</script>

<style>
  .loginContainer {
    border-radius: 15px;
    background-clip: padding-box;
    margin: 180px auto;
    width: 350px;
    padding: 15px 35px 15px 35px;
    background: #fff;
    border: 1px solid #eaeaea;
    box-shadow: 0 0 25px #cac6c6;
  }
  .loginTitle {
    text-align: center;
  }
  .loginPictureInput {
    width: 250px;
    margin-right: 5px
  }
  .loginRemember {
    text-align: left;
    margin: 0px 0px 15px 0px;
  }
  .labelDesigner {
    text-align: right;
  }
</style>