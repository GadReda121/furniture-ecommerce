<template>
    <div class="product">
        <ProductTitle />
        <ProductsItems />
        <Newsletter />
    </div>
</template>

<script>
import Newsletter from '../components/Home/Newsletter.vue';
import ProductTitle from '../components/Products/ProductTitle.vue';
import ProductsItems from '../components/Products/ProductsItems.vue';

export default {
    name: "Products",
    components: { ProductTitle, Newsletter, ProductsItems }
}
</script>

<style scoped>
.product{
    background-color: var(--primary-bg);
}
</style>