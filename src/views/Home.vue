<template>
  <div class="home">
    <v-header :params="{ name: '' }" />
    <v-main />
    <v-footer />
  </div>
</template>

<script>
// @ is an alias to /src

import VHeader from '@/components/layout/Header.vue'
import VMain from '@/components/layout/Main.vue'
import VFooter from '@/components/layout/Footer.vue'



export default {
  name: 'home',
  components: {
    'v-header': VHeader,
    'v-main': VMain,
    'v-footer': VFooter

  }
}
</script>
