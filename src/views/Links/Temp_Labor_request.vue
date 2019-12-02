<template>
    <div class="movein-moveout">
        <div class="unit-information">
            <p class="title">Temp. Worker Informaation:</p>
            <div class="upload">
                <p>Worker Name:</p>
                <div class="picker-dialog">
                    <div>
                        <span>Worker Name</span>
                        <input type="text" placeholder="Worker Name">
                    </div>
                </div>
            </div>
            <div class="upload">
                <p>Permit Start Date:</p>
                <div class="picker-dialog">
                    <img src="../../assets/icons/calendar.svg">
                    <div>
                        <span>Picker In Dialog</span>
                        <input type="text" placeholder="2019-11-27">
                    </div>
                </div>
            </div>
            <div class="upload">
                <p>Permit End Date:</p>
                <div class="picker-dialog">
                    <div><input type="text" placeholder="2019-11-30"></div>
                </div>
            </div>
            <div class="upload">
                <p>Temp. Labour Class:</p>
                <div class="picker-dialog">
                    <div><input type="text" placeholder="Temp. Labour Class:"></div>
                </div>
            </div>
            <div class="radiobtn">
                <p>Transporter Type:</p>
                <div class="radios">
                    <div class="radiobtn1">
                        <input id="radio1" type="radio">
                        <label for="radio1">Yes</label>
                    </div>
                    <div class="radiobtn1">
                        <input id="radio2" type="radio">
                        <label for="radio2">No</label>
                    </div>
                </div>
            </div>
            <div class="upload">
                <p>If yes please specify:</p>
                <div class="picker-dialog">
                    <div><input type="text" placeholder="Equipments:"></div>
                </div>
            </div>
            <div class="upload">
                <p>Car Model:</p>
                <div class="picker-dialog">
                    <div><input type="text" placeholder="Car Model"></div>
                </div>
            </div>
            <div class="upload">
                <p>Car Colour:</p>
                <div class="picker-dialog">
                    <div><input type="text" placeholder="Car Colour"></div>
                </div>
            </div>
            <div class="upload">
                <p>Attachment 1</p>
                <div class="picker-dialog">
                    <div class="attachment-input">
                        <img src="../../assets/icons/paperclip.svg">
                        <input type="text" placeholder="Attachment" >
                    </div>
                </div>
            </div>
            <div class="upload">
                <p>Attachment 2</p>
                <div class="picker-dialog">
                    <div class="attachment-input">
                        <img src="../../assets/icons/paperclip.svg">
                        <input type="text" placeholder="Attachment" >
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "Temp_Labor_request.vue"
    }
</script>
<style lang="scss" scoped>
    $temp-max: 805px;
    .movein-moveout{
        .title{
            font-size: 22px;
            font-weight: 700;
            text-decoration-line: underline;
        }
        .upload{
            margin-top: 30px;
            @media screen and (max-width: $temp-max){
                text-align: left;
                max-width: 698px;
                width: 100%;
            }
            .picker-dialog{
                max-width: 600px;
                width: 100%;
                align-items: center;

                .attachment-input{
                    display: flex;
                    flex-direction: row;
                }
                div{
                    display: flex;
                    flex-direction: column;
                    width: 100%;
                    span{
                        font-size: 10px;
                    }
                    input{
                        width: 100%;
                    }
                }

            }
        }
        .radiobtn{
            display: flex;
            justify-content: space-between;
            margin-top: 30px;
            margin-bottom: 0;
            p{margin: 0}
            .radios{
                margin-right: 480px;
                @media screen and (max-width: $temp-max){
                    margin: 0;
                }
                .radiobtn1{
                    input{
                        margin: 5px;
                    }
                }
            }
        }
    }
</style>
