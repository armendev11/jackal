<template>
    <div class="background-form">
        <div class="form-content">
            <div class="form-content-inner ">
                <h1>Registration</h1>
                <div class="form-content-inner-input">
                    <input type="text" placeholder="*name">
                    <input type="text" placeholder="*Surname">
                    <input type="text" placeholder="*phone">
                    <input placeholder="*Email" type="email">
                    <input placeholder="*Password" type="password">
                    <input placeholder="*Confirm Password" type="password">
                </div>
                <div class="buttons">
                    <button class="buttons-btn">Sign Up</button>
                </div>

                <div class="text-bottom">
                    <span>Thank you for Registration</span>
                </div>
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: "Registration.vue"
    }
</script>
