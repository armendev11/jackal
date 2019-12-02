<template>
    <div class="links">
        <ul>
            <li @click="moveinmoveout"><a href="javascript:void (0)">Move in / move out form</a></li>
            <li @click="templaborrequest"><a href="javascript:void (0)">Temp labor request form</a></li>
            <li @click="visitorInformation"><a href="javascript:void (0)">Form:  Visitor Information</a></li>
            <li @click="unitSaleRequest"><a href="javascript:void (0)">Form:  Unit Sale Request</a></li>
            <li @click="unitRentRequest"><a href="javascript:void (0)">Form : Unit Rent Request</a></li>
        </ul>
    </div>
</template>

<script>
    export default {
        name: "Links",
        methods: {
            moveinmoveout(){
                this.$router.push('/links/movein_moveout')
            },
            templaborrequest(){
                this.$router.push('/links/templaborrequest')
            },
            visitorInformation(){
                this.$router.push('/links/visitor_request')
            },
            unitSaleRequest(){
                this.$router.push('/links/unit_sale_request')
            },
            unitRentRequest(){
                this.$router.push('/links/unit_rent_request')
            },
        }
    }
</script>

<style scoped>

</style>