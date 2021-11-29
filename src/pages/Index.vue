<template>
  <q-page class='catalog'>
    <template v-if='products.length > 0'>
      <Products
        v-for='product in products'
        :key='product.id'
        :product_data='product'
      >
      </Products>
    </template>

    <q-card-section v-else>
      <div class='text-h6' style='justify-self: center'>
        No items now
      </div>
    </q-card-section>
  </q-page>
</template>

<script lang='ts'>

import { defineComponent, ref } from 'vue';
import Products from 'components/Products.vue';
import mockData from 'src/mockdata.json';

export default defineComponent({
  name: 'PageIndex',
  components: { Products },
  data() {
    return {
      todoTask: '',
      /*     products: [
             {
               image: "1.jpg",
               id: 1,
               name: "City1",
               rating: "Good",
             },
             {
               image: "2.jpg",
               id: 2,
               name: "City2",
               rating: "Awesome",
             },
             {
               image: "3.jpg",
               id: 3,
               name: "City3",
               rating: "Cool",
             },
             {
               image: "4.jpg",
               id: 4,
               name: "City4",
               rating: "brilliant",
             },
             {
               image: "5.jpg",
               id: 5,
               name: "City5",
               rating: "Wonderful",
             },
             {
               image: "6.jpg",
               id: 6,
               name: "City6",
               rating: "Amazing",
             }
           ]*/
      products: mockData
    };
  }
  /* methods: {
     removeItem(index: any){
       this.products.splice(index, 1)
     }
   }*/
});
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
