<template>
  <div class="home">
    <Card
      v-for="(product, index) in products"
      :key="index"
      :product="product"
    />
  </div>
</template>

<script lang="ts">
import { ref } from "vue";
import { onMounted } from "@vue/runtime-core";
import Card from "@/components/Card.vue";
import ProductService from "@/services/ProductService";
export default {
  components: {
    Card,
  },
  setup() {
    const products = ref([]);
    const loadProducts = async () => {
      try {
        const response = await ProductService.getAll();
        if (response) {
          products.value = response.data;
          console.log(products.value[0]);
        }
      } catch (error) {
        console.log(error);
      }
    };
    onMounted(loadProducts);

    return {
      products,
      loadProducts,
    };
  },
};
</script>
