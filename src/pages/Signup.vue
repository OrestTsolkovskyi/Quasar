<template>
  <div v-bind:class="{'justify-center': $q.screen.md || $q.screen.sm ||$q.screen.xs}"
       class='col-12 col-md-6 flex flex-center' style='justify-content: center; align-items: center'>
    <q-card style='width: 40%;'>
      <q-card-section>
        <div class='q-pt-lg'>
          <div class='col text-h6 ellipsis flex justify-center'>
            <h3 class='text-h3 text-uppercase q-my-none text-weight-regular' style='color: #034e0c'>Sign Up</h3>
          </div>
        </div>
      </q-card-section>
      <q-card-section>
        <q-form class='q-gutter-md' @submit.prevent='signUp'>
          <q-input label='Name' v-model='data.name'></q-input>
          <q-input label='Username' v-model='data.username'></q-input>
          <q-input label='Password' v-model='data.password' type='password'></q-input>
          <q-input label='Repeat Password' v-model='data.repeatPassword' type='password'></q-input>
          <div>
            <q-btn class='full-width' color='green-10' label='Sign Up' rounded type='submit'></q-btn>
            <div class='text-center q-mt-sm q-gutter-lg'>
              <router-link class='text-white' to='/login'>Already have an account?</router-link>
            </div>
          </div>
        </q-form>
      </q-card-section>
    </q-card>
  </div>
</template>

<script lang='ts'>
// import firebase from 'boot/firebase';
import { ref, reactive } from 'vue'
import { defineComponent} from 'vue';
import { useQuasar } from 'quasar'
// import userStore from 'src/store/user';
import { useRouter } from 'vue-router'
import axios from 'axios'



export default defineComponent({
  setup() {
    const data = reactive({
      name : ref(''),
      username : ref(''),
      password : ref(''),
      repeatPassword : ref('')
    })


    const $q = useQuasar()
    const router = useRouter()

    const signUp =
     async function signUp() {
        if (data.name == '') {
          $q.notify({
            type: 'negative',
            message: 'Please write your full name'
          })
        }
          if (data.username == '') {
            $q.notify({
              type: 'negative',
              message: 'Incorrect data (nickname)'
            })
          }
          if (data.password.length < 8) {
            $q.notify({
              type: 'negative',
              message: 'Not enough symbols. Must be at least 8'
            })
          }
            if (data.repeatPassword.length < 8 || data.repeatPassword !== data.password) {
              $q.notify({
                type: 'negative',
                message: 'Passwords are different'
              })
            } else {
             await axios.post('signup', {
               name: data.name,
               username: data.username,
               password: data.password,
               repeatPassword: data.repeatPassword
             })
               // fetch('http://localhost:8080/api/status', {
               //      method: 'POST',
               //      headers: {'Content-Type': 'application/json'},
               //      body: JSON.stringify(data)
               //    });
                  await  router.push('/Login ')
            }
          }

        // const ShowProducts = () => {
        //   if(userStore.getters.isLoggedIn)
        //     void router.replace('/')
        // }

        // const signIn = () => {
        //   firebase
        //     .auth()
        //     .createUserWithEmailAndPassword(username.value, password.value)
        //     .then(user => {
        //       alert(user)
        //     })
        //     // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
        //     .catch(err => alert(err.message))
        // }
    //
    // const signUp = async () => {
    //   await fetch('http://localhost:8080/api/signup', {
    //     method: 'POST',
    //     headers: {'Content-Type': 'application/json'},
    //     body: JSON.stringify(data)
    //   });
    //   await router.push('/Login ')
    // }

        return {
          data,
          signUp
          // ShowProducts,
          // signUp,
          // username,
          // password,
          // name,
          // repeatPassword
        }
      }
})
</script>
