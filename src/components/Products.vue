<template>
  <q-card class='products'>
    <img :src="product_data.image" alt='img'>
    <p class='product_name'>{{ product_data.name }}</p>
    <p class='product_rating'>Rating: {{ product_data.rating }}</p>
    <p class='product_founding'>Founded: {{ product_data.founded }}</p>
  </q-card>
</template>

<script>
export default {
  name: "products",
  props: {
    product_data:{
      type: Object,
      default(){
        return{}
      }
    }
  },
  data() {
    return {}
  }
}
</script>

<style>
.products{
  display: flex;
  flex-flow: column wrap;
  justify-content: space-around;
  align-items: center;
  padding: 20px;
  margin-bottom: 20px;
}
</style>
