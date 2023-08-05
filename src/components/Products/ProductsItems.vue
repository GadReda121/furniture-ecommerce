<template>
    <div class="ProductItems">
        <!-- Filter Btn -->
        <div class="btn-group filterProduct">
            <button class="dropdown-toggle" type="button" id="triggerId" data-bs-toggle="dropdown" aria-haspopup="true"
                    aria-expanded="false">
                       SORT BY <span class="default">DEFAULT</span>
            </button>
            <div class="dropdown-menu dropdown-menu-start" aria-labelledby="triggerId">
                <a class="dropdown-item" href="#">Date</a>
                <a class="dropdown-item" href="#">Price</a>
                <a class="dropdown-item" href="#">Trending</a>
            </div>
        </div>
        <!-- All Products -->
        <div class="allProducts">
            <!-- sidebar -> Fiter -->
            <div class="sideBarFilter"></div>
            <!-- Products -> Content -->
            <div class="ProductsContent"></div>
        </div>
    </div>
</template>

<script>
export default {
    name: "ProductItems",
}
</script>

<style scoped>
.ProductItems{
    width:80%;
    margin: auto;
}
.ProductItems .filterProduct {
    margin-bottom: 2rem;
}
.ProductItems .filterProduct button{
    padding: 7px 15px;
    background-color: #ffffff;
    border: 1px solid #000;
}
.ProductItems .filterProduct button span{
    color: #F2BE00;
}
.ProductItems .allProducts{
    display: grid;
    grid-template-columns: 30% 65%;
    grid-gap: 1rem;
    margin-bottom: 2rem;
}
.ProductItems .allProducts .sideBarFilter{
    background-color: #2C3539;
    padding: 30px;
    color: #ffffff;
    box-shadow: 0 0 30px rgba(0,0,0,.2);
}
</style>