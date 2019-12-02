<template>
    <div class="background-form">
        <div class="form-content">
            <div class="form-content-inner">
                <h1>Contact Us</h1>
                <div class="form-content-inner-input">
                    <input placeholder="*User Name" type="text">
                    <input placeholder="*Email" type="email">
                    <input placeholder="*Phone" type="text">
                    <textarea placeholder="*Message" name="" id="" cols="30" rows="10"></textarea>
                </div>
                <div class="buttons">
                    <button class="buttons-btn">Sent</button>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Contact_Us"
    }
</script>

<style lang="scss" scoped>

    .form-content-inner{
        h1{
            width: 70%;
        }
        .form-content-inner-input{
            textarea{
                background-color: rgba(255,255,255,0.4);
                border: none;
                outline: none;
                border-radius: 5px;
                max-height: 150px;
                height: 100%;
                overflow-y: auto;
                padding: 15px;
                margin-top: 20px;
            }
        }
    }
</style>