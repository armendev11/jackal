<template>
    <div class="background-form">
        <div class="form-content">
            <div class="form-content-inner">
                <h1>Welcome, Please Sign In</h1>
                <div class="form-content-inner-input">
                    <input placeholder="*Email" type="email">
                    <input placeholder="*Password" type="password">
                </div>
                <div class="checkbox">
                    <div class="boxes">
                        <input type="checkbox" id="box-1">
                        <label for="box-1">Save Password</label>
                    </div>
                </div>
                <div class="buttons">
                    <button class="buttons-btn" @click="login">LogIn</button>
                    <span class="fg-password" @click="forgot_password"><a href="javascript:void (0)">Forgot Password ?</a></span>
                </div>
            </div>
            <div class="text-bottom">
                <span>Don’t have an account?</span>
                <span @click="sign_up"><a href="javascript:void (0)">Sign Up</a></span>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Login.vue",
        methods:{
            sign_up(){
                this.$router.push('/sign_up')
            },
            forgot_password(){
              this.$router.push('/forgot_password')
            },
            login(){
                this.$router.push('/links')
            }
        }
    }
</script>

<style lang="scss" scoped>
    @import url(https://fonts.googleapis.com/css?family=Open+Sans);

   .form-content-inner{
       h1{
           width: 70%;
       }
   }

</style>