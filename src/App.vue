<template>
  <router-view />
</template>
<script lang="ts">
import { defineComponent} from 'vue';
// import { useRouter, useRoute } from 'vue-router';
// import { onBeforeMount } from 'vue';
// import firebase from 'boot/firebase'

export default defineComponent({
  name: 'App',
  mounted() {
    this.$q.dark.set(true)
  }
})
</script>
