<template>
    <div class="movein-moveout pl-1">
        <p class="vtitle">Visitor Information:</p>
        <div class="unit-information">
            <div class="upload mt-5">
                <p>Visitor Name:</p>
                <div class="picker-dialog">
                    <div>
                        <input type="text" placeholder="Visitor Name" >
                    </div>
                </div>
            </div>
            <div class="upload mt-4">
                <p>Arrival date:</p>
                <div class="picker-dialog">
                    <div class="d-flex align-items-center">
                        <img src="../../assets/icons/calendar.svg">
                        <div class="d-flex flex-column">
                            <span style="font-size: 10px">Picker in dialog</span>
                            <input type="text" placeholder="2019-11-27" >
                        </div>
                    </div>
                </div>
            </div>
            <div class="upload mt-4">
                <p>Expected Visit Duration:</p>
                <div class="picker-dialog">
                    <div>
                        <input type="text" placeholder="Expected Visit Duration" >
                    </div>
                </div>
            </div>
            <div class="upload mt-4">
                <p>Car Model:</p>
                <div class="picker-dialog">
                    <div>
                        <input type="text" placeholder="Car Model" >
                    </div>
                </div>
            </div>
            <div class="upload mt-4">
                <p>Car Colour:</p>
                <div class="picker-dialog">
                    <div>
                        <input type="text" placeholder="Car Colour" >
                    </div>
                </div>
            </div>
            <div class="upload mt-4">
                <p>Attachment 1:</p>
                <div class="picker-dialog">
                    <div class="d-flex align-items-center">
                        <img src="../../assets/icons/paperclip.svg">
                        <div>
                            <input type="text" placeholder="Attachment" >
                        </div>
                    </div>
                </div>
            </div>
            <div class="upload mt-4">
                <p>Attachment 2:</p>
                <div class="picker-dialog">
                    <div class="d-flex align-items-center">
                        <img src="../../assets/icons/paperclip.svg">
                        <div>
                            <input type="text" placeholder="Attachment" >
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: "Visitor_Information"
    }
</script>


