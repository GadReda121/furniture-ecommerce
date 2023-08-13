<template>
    <Preloader v-if="isPreload"/>
    <div class="product" v-else>
        <ProductTitle />
        <ProductsItems />
        <Newsletter />
    </div>
</template>

<script>
import Newsletter from '../components/Home/Newsletter.vue';
import ProductTitle from '../components/Products/ProductTitle.vue';
import ProductsItems from '../components/Products/ProductsItems.vue';
import Preloader from '../Preloader.vue';

export default {
    name: "Products",
    data() {
        return {
            isPreload: true,
        }
    },
    created() {
        setTimeout(() => {
            this.isPreload = false;
        }, 2000);
    },
    components: { ProductTitle, Newsletter, ProductsItems, Preloader }
}
</script>

<style scoped>
.product{
    background-color: var(--primary-bg);
}
</style>