<template>
  <q-page class='catalog'>
    <template v-if='!userStore.getters.isLoggedIn'>
      <Login/>
      </template>
      <template v-else>
      <Products
        :products='products'
      >
      </Products>
      </template>
  </q-page>
</template>

<script lang='ts'>
/* eslint-disable */
import { onMounted, ref } from 'vue';
import { defineComponent} from 'vue';
import Products from 'components/Products.vue';
import mockData from 'src/mockdata.json';
import userStore from '../store/user'
import Login from 'pages/Login.vue';

export default defineComponent({
  name: 'PageIndex',
  components: { Login, Products },
  setup() {
    const products = ref(mockData)



    onMounted(userStore.getUser)

    return {
    userStore,
      products,
    }
  }
})
</script>

<style>
.catalog {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  margin: 0 auto;
  padding-left: 0;
}
</style>
