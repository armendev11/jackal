<template>
    <div class="background-form">
        <div class="form-content">
            <div class="form-content-inner">
                <h1>Reset your password</h1>
                <div class="form-content-inner-input">
                    <span>Enter your user account's verified email address and we will send you a access key.</span>
                    <input placeholder="*Email" type="email">
                    <input placeholder="*New Password" type="password">
                    <input placeholder="*Confirm Password" type="password">
                    <input placeholder="*Access Key" type="text">
                </div>
                <div class="checkbox">
                    <div class="boxes">
                        <input type="checkbox" id="box-1">
                        <label for="box-1">Save Password</label>
                    </div>
                </div>
                <div class="buttons">
                    <button class="buttons-btn">LogIn</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Forgot_Password.vue"
    }
</script>

<style lang="scss" scoped>
    @import url(https://fonts.googleapis.com/css?family=Open+Sans);

    .form-content-inner{
        .form-content-inner-input{
            span{
                max-width: 250px;
                width: 100%;
                text-align: center;
            }
        }
    }
</style>