<template>
    <div class="movein-moveout">
        <p class="vtitle">Visitor Information:</p>
        <div class="unit-information">
            <div class="upload">
                <p>Visitor Name:</p>
                <div class="picker-dialog">
                    <div>
                        <input type="text" placeholder="Visitor Name" >
                    </div>
                </div>
            </div>
            <div class="upload">
                <p>Arrival date:</p>
                <div class="picker-dialog">
                    <div>
                        <img src="../../assets/icons/calendar.svg">
                        <div>
                            <span>Picker in dialog</span>
                            <input type="text" placeholder="2019-11-27" >
                        </div>
                    </div>
                </div>
            </div>
            <div class="upload">
                <p>Expected Visit Duration:</p>
                <div class="picker-dialog">
                    <div>
                        <input type="text" placeholder="Expected Visit Duration" >
                    </div>
                </div>
            </div>
            <div class="upload">
                <p>Car Model:</p>
                <div class="picker-dialog">
                    <div>
                        <input type="text" placeholder="Car Model" >
                    </div>
                </div>
            </div>
            <div class="upload">
                <p>Car Colour:</p>
                <div class="picker-dialog">
                    <div>
                        <input type="text" placeholder="Car Colour" >
                    </div>
                </div>
            </div>
            <div class="upload">
                <p>Attachment 1:</p>
                <div class="picker-dialog">
                    <div>
                        <img src="../../assets/icons/paperclip.svg">
                        <div>
                            <input type="text" placeholder="Attachment" >
                        </div>
                    </div>
                </div>
            </div>
            <div class="upload">
                <p>Attachment 2:</p>
                <div class="picker-dialog">
                    <div>
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

