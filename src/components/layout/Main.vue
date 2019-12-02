<template>
        <div class="main">
            <Section1 />
            <Section2 />
            <Section3 />
            <Section4 />
            <Section5 />
        </div>

</template>
<script>
    import Section1 from './Main/Section1'
    import Section2 from './Main/Section2'
    import Section3 from "./Main/Section3"
    import Section4 from "./Main/Section4"
    import Section5 from "./Main/Section5"

export default {
    name: 'Main',
    components:{
        Section1,
        Section2,
        Section3,
        Section4,
        Section5
    }
}
</script>
<style lang="scss" scoped>

</style>