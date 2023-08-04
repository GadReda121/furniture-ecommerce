<template>
    <div class="title-product">
        <h2>New Arrivals</h2>
        <div class="routes">
            <router-link to="/" class="text-decoration-none">
            Home / 
            </router-link>
            Products
        </div>
    </div>
</template>

<script>
export default {
    name: "ProductTitle"
}
</script>

<style scoped>
.title-product{
    display: flex;
    flex-direction: column;
    text-align: center;
    padding: 2rem;
}
.title-product .routes{
    color: #F2BE00;
}
.title-product .routes a, h2{
    color: #303E49;
}
</style>