<template>
    <div class="movein-moveout">
        <div class="radiobtn">
            <p class="title">Notification Kind:</p>
            <div class="radios">
                <div class="radiobtn1">
                    <input id="radio1" type="radio">
                    <label for="radio1">Move In</label>
                </div>
                <div class="radiobtn1">
                    <input id="radio2" type="radio">
                    <label for="radio2">Move In</label>
                </div>
            </div>
        </div>
        <div class="radiobtn">
            <p class="title">Transporter Type:</p>
            <div class="radios">
                <div class="radiobtn1">
                    <input id="radio3" type="radio">
                    <label for="radio3">Owner</label>
                </div>
                <div class="radiobtn1">
                    <input id="radio4" type="radio">
                    <label for="radio4">Tenant</label>
                </div>
            </div>
        </div>
        <div class="unit-information">
            <p class="title">Unit-Information:</p>
            <div class="upload">
                <p>Moving Date:</p>
                <div class="picker-dialog">
                    <img src="../../assets/icons/calendar.svg">
                    <input type="text" placeholder="Picker In Dialog" >
                </div>
            </div>
        </div>
        <div class="attachment">
            <p class="title">Attachment:</p>
            <div class="upload">
                <p>Tenant ID</p>
                <div class="picker-dialog">
                    <img src="../../assets/icons/paperclip.svg">
                    <input type="text" placeholder="ID" >
                </div>
            </div>
            <div class="upload">
                <p>Rent Contrat</p>
                <div class="picker-dialog">
                    <img src="../../assets/icons/paperclip.svg">
                    <input type="text" placeholder="Rent Contrat" >
                </div>
            </div>
            <div class="upload">
                <p>Car Driving License</p>
                <div class="picker-dialog">
                    <img src="../../assets/icons/paperclip.svg">
                    <input type="text" placeholder="Car Driving License" >
                </div>
            </div>
            <div class="upload">
                <p>Driver License</p>
                <div class="picker-dialog">
                    <img src="../../assets/icons/paperclip.svg">
                    <input type="text" placeholder="Driver License" >
                </div>
            </div>
        </div>
        <div class="buttons">
            <button>Edit</button>
            <button>Submit</button>
            <button>Cancel</button>
        </div>
    </div>
</template>

<script>
    export default {
        name: "MoveIn_MoveOut"
    }
</script>
