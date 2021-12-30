<template>
<div v-bind:class="{'justify-center': $q.screen.md || $q.screen.sm ||$q.screen.xs}"
  class='col-12 col-md-6 flex flex-center' style='justify-content: center; align-items: center'>
  <q-card style='width: 40%'>
    <q-card-section>
      <div class='q-pt-lg'>
        <div class='col text-h6 ellipsis flex justify-center'>
          <h3 class='text-h3 text-uppercase q-my-none text-weight-regular' style='color: #034e0c'>Login</h3>
        </div>
      </div>
    </q-card-section>
    <q-card-section>
      <q-form class='q-gutter-md' @submit.prevent='submitForm'>
        <q-input label='Username' v-model='username'></q-input>
        <q-input label='Password' v-model='password' type='password'></q-input>
        <div>
          <div class="text-danger my-2 text-center" style='color: darkred'>{{ userStore.state.error }}</div>
          <q-btn class='full-width' color='green-10' label='Login' rounded type='submit'></q-btn>
          <div class='text-center q-mt-sm q-gutter-lg'>
            <router-link class='text-white' to='/login'>Forgot your password?</router-link>
            <router-link class='text-white' to='/signup'>Sign up</router-link>
          </div>
        </div>
      </q-form>
    </q-card-section>
  </q-card>
</div>
</template>

<script  lang='ts'>
import { defineComponent, onMounted, ref} from 'vue';
import { useQuasar } from 'quasar'
import axios from 'axios'
import userStore from '../store/user'
import { useRouter } from 'vue-router'

export default defineComponent({
  name: 'Login',
  setup(){
    onMounted(async () => {
      let res = await axios.get('/api/status')
      console.log(res)
    });

    // const store = useStore()
    const $q = useQuasar()
    const router = useRouter()


    const username = ref('')
    const password = ref('')

    // const Login = () => {
    //   firebase
    //   .auth()
    //   .signInWithEmailAndPassword(username.value, password.value)
    //   .then(data => console.log(data))
    //     // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    //   .catch(err => alert(err.message))
    // }

   const submitForm =
   async function submitForm() {
     if (username.value == '' || username.value !== username.value) {
       $q.notify({
         type: 'negative',
         message: 'Incorrect data'
       })
     }
     if (password.value.length < 8) {
       $q.notify({
         type: 'negative',
         message: 'Not enough symbols. Must be at least 8'
       })
     } else {
       await userStore.login(username.value, password.value)
       if(userStore.getters.isLoggedIn)
       await router.push('/')
     }
   }


      return{
        userStore,
        username,
        password,
        submitForm
    }
    }
});
</script>

<style scoped>

</style>
