<template>
    <div id="login-container">
        <div id="login-box">
            <div id="login-logo">
                <img src="../assets/img/logo.png" alt="" width="100%">
            </div>

            <el-form :rules="loginFormRules" ref="loginFormRef" :model="loginForm">
                <el-form-item prop="username">
                     <el-input v-model="loginForm.username">
                         <i slot="prefix" class="iconfont icon-user"></i>
                     </el-input>
                </el-form-item>
                 <el-form-item prop="password">
                     <el-input type='password' v-model="loginForm.password">
                         <i slot="prefix" class="iconfont icon-3702mima"></i>
                     </el-input>
                </el-form-item>

                <el-row>
                    <el-col :offset="15">
                        <el-button type="primary" @click="login">登录</el-button>
                        <el-button type="info" @click="resetForm">重置</el-button>
                    </el-col>
                </el-row>
            </el-form>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return{
           loginForm:{
                username:'',
                password:''
           },
            //给各个表单域定义规则
            loginFormRules:{
                username: [
                    //required  非空   message  错误提示      trigger 触发校验机制
                    { required: true, message: '请输入用户名称', trigger: 'blur' }
                ],
                password: [
                    { required: true, message: '请输入密码', trigger: 'blur' }
                ],
            }, 
        }
    },
    methods:{
        //设置登录跳转
        login(){
            this.$refs.loginFormRef.validate(valid=>{
                if(valid===true){
            //设置路由从定向  注意 this的指向问题 这里的this指向validate的回调函数,要想指向vUE,必须将回调函数改为箭头函数
                    this.$router.push('/home')
                 }
           })
       },
       //对表单数据重置功能
       resetForm(){
           this.$refs.loginFormRef.resetFields()
       }
  }
}
</script>

<style lang="less" scoped>
 #login-container{
     background-color: #2b4b6b;
     height: 100%;
     overflow: hidden;
     #login-box{
         width: 450px;
         height: 304px;
         background-color: #fff;
         border-radius: 10px;
         position: absolute;
         left: 50%;
         top: 50%;
         transform: translate(-50%,-50%);
         .el-form{
             width: 100%;
             padding: 20px;
             box-sizing: border-box;
             position: absolute;
             bottom: 0;
         }
         #login-logo{
            width: 130px;
            height: 130px;
            border:  1px solid #eee;
            border-radius: 50%;
            padding: 8px;
            box-shadow: 0  0  10px #eee;
            position: absolute;
            left: 50%;
            transform: translate(-50%,-50%);
            background-color: #fff;
            img{
                background-color: #eee;
                border-radius: 50%;
            }
         }
     }
 }
</style>
