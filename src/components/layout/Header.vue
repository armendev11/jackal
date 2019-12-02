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
                       <nav class="navbar navbar-expand-md">
                           <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#collapsibleNavbar">
                               <span class="navbar-toggler-icon"><img src="../../assets/icons/menu-button-of-three-horizontal-lines.svg" alt=""></span>
                           </button>
                           <div id="collapsibleNavbar" class="header-container-bottom-inner collapse navbar-collapse">
                               <ul class="header-container-bottom-inner-ul navbar-nav">
                                   <li class="nav-item"><a class="nav-link" href="#">Home</a></li>
                                   <li class="nav-item"><a class="nav-link" href="#">About</a></li>
                                   <li class="nav-item"><a class="nav-link" href="#">Services</a></li>
                                   <li class="nav-item"><a class="nav-link" href="#">Elements</a></li>
                                   <li class="nav-item"><a class="nav-link" href="#">Package</a></li>
                                   <li class="nav-item"><a class="nav-link" href="#">Contact</a></li>
                               </ul>
                           </div>
                       </nav>
                        <div class="header-container-bottom-login">
                            <ul>
                                <li @click="login">
                                    <img class="user-icon" src="@/assets/icons/user.svg" alt="">
                                    <span><a href="javascript:void(0)">Sign In</a></span>
                                </li>
                                <div class="line"></div>
                                <li @click="sign_up"><a href="javascript:void (0)">Register</a></li>
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

