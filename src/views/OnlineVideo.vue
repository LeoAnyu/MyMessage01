<template>
  <div>
    <el-form :rules="OnlineVideorules" ref="OnlineVideo" :model="OnlineVideo" class="OnlineVideoContainer">
      <br />
      <el-form-item>
        <h1 class="loginTitle1">VIP视频免费看</h1>
      </el-form-item>
      <el-form-item prop="wbst">
        <el-input type="text" auto-complete="false" v-model="OnlineVideo.wbst" placeholder="请输入需要解析的视频网址"></el-input>
      </el-form-item>
      <el-form-item>
        <div align="center">
          <el-button type="primary" style="width: 100px" @click="openOnlineVideo">跳转</el-button>
          <el-button type="primary" style="width: 100px" @click="openChat">聊天</el-button>
          <el-button type="primary" style="width: 100px" @click="backLogin1">返回</el-button>
        </div>
      </el-form-item>
      <el-form-item class="labelDesigner">
        <a href="https://github.com/LeoAnyu/MyMessage01">设计人：李云熠 (LeoAnyu)</a>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import GLOBAL1 from '@/api/global_variable'

export default {
  name: "Register",
  data() {
    return {
      captchaUrl: '',
      OnlineVideo: {
        wbst: ''
      },
      OnlineVideorules: {
        wbst: [
          {required: true, message: '请输入需要解析的视频网址', trigger: 'blur'}
        ]
      }
    }
  },
  methods: {
    backLogin1() {
      this.$router.push('/');
    },
    openOnlineVideo() {
      let reFactoryOwn = GLOBAL1.ovURL;
      this.$refs.OnlineVideo.validate((valid) => {
        if (valid) {
          let videoUrl = reFactoryOwn + this.OnlineVideo.wbst.toString();
          this.$message({
            message: '视频解析成功，网页正在跳转！',
            type: 'success'
          });
          window.location.href = videoUrl;
        } else {
          this.$message.error('视频解析失败，请重新检查！');
          return false;
        }
      });
    },
    openChat() {
      let openChatUrl = GLOBAL1.chatURL;
      this.$message({
        message: '正在打开聊天窗口！',
        type: 'success'
      });
      window.location.href = openChatUrl;
    }
  }
}
</script>

<style>
.OnlineVideoContainer {
  border-radius: 15px;
  background-clip: padding-box;
  margin: 180px auto;
  width: 500px;
  padding: 15px 35px 15px 35px;
  background: #fff;
  border: 1px solid #eaeaea;
  box-shadow: 0 0 25px #cac6c6;
}
.loginTitle1 {
  text-align: center;
}
.labelDesigner {
  text-align: right;
}
</style>