<template>
    <div class="section-3">
<!--        <img src="../../../assets/images/section3-img.png" alt="">-->
        <div class="container">
            <div class="section-3-text">
                <div>
                    <span>Do you need help with electrical maintenance?</span>
                    <span>Contact us – our technicians are ready to help you solve that issue.</span>
                </div>
                <button @click="contact_us">contact us</button>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "Main",
        methods:{
            contact_us(){
                this.$router.push('/contact_us')
            }
        }
    }
</script>

