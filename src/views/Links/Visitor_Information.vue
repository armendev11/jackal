<template>
    <div class="visitor">
        <p class="vtitle">Visitor Information:</p>
        <div class="vinputs">
            <div class="visitor-title">
                <p>Visitor Name:</p>
                <div class="vpicker-dialog">
                    <div>
                        <input type="text" placeholder="Visitor Name" >
                    </div>
                </div>
            </div>
            <div class="visitor-title">
                <p>Arrival date:</p>
                <div class="vpicker-dialog">
                    <div>
                        <img src="../../assets/icons/calendar.svg">
                        <div>
                            <span>Picker in dialog</span>
                            <input type="text" placeholder="2019-11-27" >
                        </div>
                    </div>
                </div>
            </div>
            <div class="visitor-title">
                <p>Expected Visit Duration:</p>
                <div class="vpicker-dialog">
                    <div>
                        <input type="text" placeholder="Expected Visit Duration" >
                    </div>
                </div>
            </div>
            <div class="visitor-title">
                <p>Car Model:</p>
                <div class="vpicker-dialog">
                    <div>
                        <input type="text" placeholder="Car Model" >
                    </div>
                </div>
            </div>
            <div class="visitor-title">
                <p>Car Colour:</p>
                <div class="vpicker-dialog">
                    <div>
                        <input type="text" placeholder="Car Colour" >
                    </div>
                </div>
            </div>
            <div class="visitor-title">
                <p>Attachment 1:</p>
                <div class="vpicker-dialog">
                    <div>
                        <img src="../../assets/icons/paperclip.svg">
                        <div>
                            <input type="text" placeholder="Attachment" >
                        </div>
                    </div>
                </div>
            </div>
            <div class="visitor-title">
                <p>Attachment 2:</p>
                <div class="vpicker-dialog">
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

