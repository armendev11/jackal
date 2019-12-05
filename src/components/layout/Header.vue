<template>
    <header>
        <div class="header ">
            <div class="container">
                <div class="header-container-top">
                    <img class="header-logo" src="../../assets/images/logo.png">
                    <div class="header-background-top-content">
                        <div class="header-background-top-content-inner">
                            <div class="header-location">
                                <div class="header-location-icon">
                                    <img class="header-icon" src="@/assets/icons/location.svg">
                                </div>
                                <div class="header-location-text">
                                    <span>Newyork, USA</span>
                                    <span>Flat 201, Reynolds Neck Str</span>
                                </div>
                            </div>
                            <div class="header-message">
                                <div class="header-message-icon">
                                    <img class="header-icon" src="@/assets/icons/mail.svg">
                                </div>
                                <div class="header-location-text1">
                                    <span>Mail Us On</span>
                                    <span>support@jackal.com</span>
                                </div>
                            </div>
                        </div>
                        <button class="appointment">Appointment</button>
                    </div>
                </div>
                <div class="header-container-bottom">
                        <b-navbar toggleable="md"  variant="info">
                            <b-navbar-toggle target="nav-collapse"><span class="navbar-toggler-icon"><img src="../../assets/icons/menu-button-of-three-horizontal-lines.svg" alt=""></span></b-navbar-toggle>
                            <b-collapse id="nav-collapse" class="header-container-bottom-inner" is-nav>
                                <b-navbar-nav class="header-container-bottom-inner-ul">
                                    <b-nav-item href="#">Home</b-nav-item>
                                    <b-nav-item href="#">About</b-nav-item>
                                    <b-nav-item href="#">Services</b-nav-item>
                                    <b-nav-item href="#">Elements</b-nav-item>
                                    <b-nav-item href="#">Package</b-nav-item>
                                    <b-nav-item href="#">Contact</b-nav-item>
                                </b-navbar-nav>
                            </b-collapse>
                        </b-navbar>
                    <div class="header-container-bottom-login">
                        <ul class="header-container-bottom-login-ul">
                            <li @click="login" class="nav-item">
                                <img class="user-icon" src="@/assets/icons/user.svg" alt="">
                                <span><a class="nav-link" href="javascript:void(0)">Sign In</a></span>
                            </li>
                            <div class="line"></div>
                            <li class="nav-link" @click="sign_up"><a href="javascript:void (0)">Register</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </header>
</template>

<script>
    export default {
        name: "Header",

        methods:{
            login(){
                this.$router.push('/login')
            },
            sign_up(){
                this.$router.push('/sign_up')
            }
        }
    }
</script>

