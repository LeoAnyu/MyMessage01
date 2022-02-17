<template>
  <div>
    <el-form :rules="rules" ref="loginForm" :model="loginForm" class="loginContainer">
      <el-form-item>
        <h1 class="loginTitle">MyMessage</h1>
      </el-form-item>
      <el-form-item prop="username">
        <el-input type="text" auto-complete="false" v-model="loginForm.username" placeholder="请输入用户名"></el-input>
      </el-form-item>
      <el-form-item prop="password">
        <el-input type="password" auto-complete="false" v-model="loginForm.password" placeholder="请输入密码"></el-input>
      </el-form-item>
      <el-form-item prop="code">
        <el-input class="loginPictureInput" type="text" auto-complete="false" v-model="loginForm.code" placeholder="点击图片更换验证码"></el-input>
        <img :src="captchaUrl">
      </el-form-item>

      <el-form-item>
        <el-checkbox v-model="checked" class="loginRemember">记住我</el-checkbox>
        <div align="center">
          <el-button type="primary" style="width: 85px" @click="submitLogin">登录</el-button>
          <el-button type="primary" style="width: 85px" @click="openRegister">注册</el-button>
          <el-button type="primary" style="width: 100px" @click="openOnlineVideo">视频解析</el-button>
        </div>
      </el-form-item>
      <el-form-item class="labelDesigner">
        <label-wrap>设计人：李云熠</label-wrap>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: "Login",
  data() {
    return {
      captchaUrl:'',
      loginForm:{
        username:'',
        password:'',
        code:''
      },
      checked: false,
      rules: {
        username: [
          { required: true, message:'请输入用户名', trigger:'blur' },
          { min: 3, max: 5, message: '长度在3到5个字符', trigger: 'blur' }
        ],
        password: [
          { required: true, message:'请输入密码', trigger:'blur' }
        ],
        code: [
          { required: true, message:'请输入验证码', trigger:'blur' }
        ]
      }
    }
  },
  methods: {
    submitLogin() {
      this.$refs.loginForm.validate((valid) => {
        if (valid) {
            this.$message({
              message: '登陆成功，欢迎进入 MyMessage ！',
              type: 'success'
            });
            this.$router.replace('/UserHome');
        } else {
          this.$message.error('登录失败，输入内容有误，请重新检查输入项！');
          console.log('登录失败，输入内容有误。');
          return false;
        }
      });
    },
    openRegister() {
      this.$router.push('/Register');
    },
    openOnlineVideo() {
      this.$router.push('/OnlineVideo');
    }
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