<template>
    <div class="unit-sale">
        <div class="us-row">
            <p>Delivery Status:</p>
            <div class="us-radios">
                <div class="radio">
                    <input id="radio1" type="radio" name="radio">
                    <label for="radio1">Delivered</label>
                </div>
                <div class="radio">
                    <input id="radio2" type="radio" name="radio">
                    <label for="radio2">Not Delivered</label>
                </div>
            </div>
        </div>
        <div class="us-row">
            <p>Finishing Status:</p>
            <div class="us-radios">
                <div class="radio">
                    <input id="radio3" type="radio" name="radio1">
                    <label for="radio3">Finished</label>
                </div>
                <div class="radio">
                    <input id="radio4" type="radio" name="radio1">
                    <label for="radio4">Core&Shell</label>
                </div>
            </div>
        </div>
        <div class="us-row">
            <p>Finishing classification:</p>
            <div class="us-inputs">
                <div class="radio">
                    <input id="radio5" type="radio">
                    <label for="radio5">Company Finishing</label>
                </div>
                <div class="radio">
                    <input id="radio6" type="radio">
                    <label for="radio6">Client Finishing</label>
                </div>
                <div class="radio">
                    <input id="radio7" type="radio">
                    <label for="radio7">not Finished</label>
                </div>
            </div>
        </div>
        <div class="us-row">
            <p>Attachment:</p>
            <div class="us-inputs">
                <div class="input">
                    <img src="../../assets/icons/paperclip.svg" alt="">
                    <input type="text" placeholder="Attachment">
                </div>
            </div>
        </div>
        <div class="line"></div>
        <p class="payment">Payment Term:</p>
        <div class="us-row">
            <p>Cash:</p>
            <div class="us-inputs cash">
                <div class="input">
                    <input type="text" placeholder="ex:30.000">
                </div>
            </div>
        </div>
        <div class="us-row">
            <p>Installments:</p>
            <div class="us-inputs">
                <div class="radio">
                    <input id="radio8" type="radio">
                    <label for="radio8">Monthly Checks</label>
                </div>
                <div class="radio">
                    <input id="radio9" type="radio">
                    <label for="radio9">Quarter</label>
                </div>
                <div class="radio">
                    <input id="radio10" type="radio">
                    <label for="radio10">Semi Annual</label>
                </div>
                <div class="radio">
                    <input id="radio11" type="radio">
                    <label for="radio11">Annual</label>
                </div>
            </div>
        </div>
        <div class="us-row">
            <p>No of Installments:</p>
            <div class="us-inputs">
                <div class="input">
                    <input type="text" placeholder="ex:30.000">
                </div>
            </div>
        </div>
        <div class="us-row">
            <p>Discount:</p>
            <div class="us-inputs">
                <div class="input">
                    <input type="text" placeholder="0">
                </div>
            </div>
        </div>
        <div class="line"></div>
        <div class="us-row">
            <p>Target Price:</p>
            <div class="us-inputs">
                <div class="input">
                    <input type="text" placeholder="0">
                </div>
            </div>
        </div>
        <div class="us-row">
            <p>Minimum Price:</p>
            <div class="us-inputs">
                <div class="input">
                    <input type="text" placeholder="0">
                </div>
            </div>
        </div>
        <div class="us-row">
            <p>Price/sqm:</p>
            <div class="us-inputs">
                <div class="input">
                    <input type="text" placeholder="0">
                </div>
            </div>
        </div>
        <div class="us-row">
            <p>Suggested Price:</p>
            <div class="us-inputs">
                <div class="input">
                    <input type="text" placeholder="0">
                </div>
            </div>
        </div>
        <div class="us-row">
            <p>var:</p>
            <div class="us-inputs">
                <div class="input">
                    <input type="text" placeholder="0">
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: "Unit_Sale_Request"
    }
</script>

