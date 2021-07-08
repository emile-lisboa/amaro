<template>
  <div class="card card__container">
    <div class="card__image_wrapper">
      <img :src="product.image" />
      <div v-if="product.on_sale" class="card__discount__box">
        <div class="card__discount__detail">
          <span>{{ product.discount_percentage }}</span>
          <span>off</span>
          <hr />
        </div>
      </div>
    </div>
    <h4>{{ product.name }}</h4>
    <div class="card__price__container">
      <span>{{ product.actual_price }}</span>
      <span class="card__label__disabled">{{ product.installments }}</span>
    </div>
    <div v-if="product.on_sale" class="card__price__container">
      <span class="card__label__invalid">{{ product.regular_price }}</span>
      <span class="card__label__sale"
        >({{ product.discount_percentage }} off)</span
      >
    </div>
  </div>
</template>

<script>
import { toRefs } from 'vue'
export default {
  props: {
    product: Object,
  },
  setup(props) {
    const { product } = toRefs(props);
    console.log(product);
  },
};
</script>

<style lang="scss">
.card {
  &__container {
    width: fit-content;

    span {
      font-size: 0.75rem;
    }
  }
  &__image_wrapper {
    position: relative;
    height: 25rem;
    img {
      height: 100%;
    }
  }

  &__price__container {
    display: flex;
    align-items: center;
    justify-content: center;

    span {
      font-weight: bold;
      margin-right: 0.375rem;
    }
  }

  &__label__disabled {
    color: lightgrey;
  }

  &__label__invalid {
    color: lightgrey;
    text-decoration: line-through;
  }

  &__label__sale {
    color: red;
  }

  &__discount__box {
    position: absolute;
    left: 0;
    bottom: 0;
    width: 3rem;
    height: 3rem;
    background: black;
    color: white;
  }

  &__discount__detail {
    width: 1rem;
    height: 1rem;
    margin: auto;

    hr {
      color: white;
      width: 100%;
      height: 0.2rem;
    }
  }
}
</style>
