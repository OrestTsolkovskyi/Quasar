<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated class="bg-primary text-white">
      <q-toolbar>
        <q-toolbar-title>
          Products List
        </q-toolbar-title>

        <template v-if='userStore.getters.isLoggedIn'>
          <h8 class='q-pr-md'>Welcome, {{ userStore.state.name }}</h8>
        </template>

        <q-btn
          class='logout'
          @click='Logout'
          rounded
        >Logout
        </q-btn>

<!--        <h3>Welcome, {{ name }}</h3>-->
<!--        <router-link to='/about'></router-link>-->
<!--        <q-btn class='logout' @click='Logout'>Logout</q-btn>-->
      </q-toolbar>
    </q-header>

    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">

import { defineComponent } from 'vue';
// import { ref, onBeforeMount } from 'vue';
// import firebase from 'boot/firebase';
import { useRouter } from 'vue-router'
import userStore from '../store/user'

export default defineComponent({
  name: 'MainLayout',
  components: {
  },
  setup () {
    const router = useRouter()


    // const name = ref('')
    //
    // onBeforeMount(() => {
    //   const user = firebase.auth().currentUser;
    //   if (user) {
    //     name.value = user.username.split('@')[0];
    //   }
    // });
    //
    // const Logout = () => {
    //   firebase
    //   .auth()
    //   .signOut()
    //   .then(() => console.log('Sign Out'))
    //   .catch(err => alert(err.message))
    // }

    const Logout = () => {
        void router.replace('/Login') || userStore.logout()
    }

    return {
      Logout,
      userStore
    }
  }
})
</script>

