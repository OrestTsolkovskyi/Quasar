<template>
  <q-toolbar class='q-pa-md' style='align-self: flex-start'>
  <q-form style='width: 300px'>
  <q-card>
  <div>
    <q-select
      behavior='dialog'
      class='q-mr-md'
      label="Years"
      dense
      flat
      v-model='select'
      :options='options'
      emit-value
      clearable
      clear-icon='close'
    >
      <template v-slot:append>
        <q-icon name="event" />
      </template>
    </q-select>
  </div>
  </q-card>

  <q-card>
  <q-input
    class='search'
    dense
    label='Find product'
    type='search'
    v-model='search'
  >
    <template v-slot:append>
      <q-icon name="search" />
    </template>
  </q-input>
  </q-card>
  </q-form>
  </q-toolbar>

  <q-card
    class='products'
    v-for='product in filteredProducts'
    :key='product.id'

  >
    <img :src="product.image" alt='img'>
    <p class='product_name'>{{ product.name }}</p>
    <p class='product_rating'>Rating: {{ product.rating }}</p>
    <p class='product_founding'>Founded: {{ product.founded }}</p>
  </q-card>
</template>

<script lang='ts'>
import { computed, ref} from 'vue';
import { defineComponent } from 'vue';
import mockData from 'src/mockdata.json';

const optionsOf = [{
label: 'All',
  value: 'All'
},{
  label: '<1970',
  value: '1970',
}, {
  label: '<1980',
  value: '1980',
}, {
  label: '<1990',
  value: '1990',
}, {
  label: '<2000',
  value: '2000',
}, {
  label: '<2010',
  value: '2010',
},
]

export default defineComponent({
  name: 'products',
  props: {
    products:{
      type: Array,
      required:true,
      default () {
        return []
      }
    }
  },
  setup () {
    const select = ref()
    const options = ref(optionsOf)

    const search = ref('')

    const products = ref(mockData)


    const filteredProducts = computed(() => {
      function filterByYears([]) {
        if (select.value === undefined) {
          return products.value;
        }
        if (select.value === 'All') {
          return products.value;
        } else
          return products.value.filter(product => product.founded < select.value);
      }

      filterByYears([])

      function filterBySearchInput([]) {
        return filterByYears([]).filter(product => product.name.toLowerCase().includes(search.value.toLowerCase()))
      }
      filterBySearchInput([])
      return filterBySearchInput([])
      }
)

    // const filterByYears = (data: any, filters: { year: { value: number; }; }) => {
    //   if (filters.year.value) {
    //     return filter(data, ({founded}) => founded < filters.year.value);
    //   }
    //   return data;
    // };
    //
    // const filterBySearchInput = (data: { id: number; name: string; rating: string; image: string; founded: number; }[], filters: { searchInput?: any; year?: any; }) => {
    //   if (filters.searchInput.value) {
    //     return filter(filterByYears(data, filters), ({ name }) =>
    //     name.toLowerCase().includes(filters.searchInput.value.toLowerCase()));
    //   }
    //   return filterByYears(data, filters);
    // };
    // return filterBySearchInput(products.value, {searchInput, year});

    return {
      select,
      search,
      filteredProducts,
      options
    }
  }
})
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
