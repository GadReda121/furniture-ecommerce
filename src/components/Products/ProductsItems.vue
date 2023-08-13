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
            <div class="sideBarFilter">
                <div class="category">
                    <h5>Categories +</h5>
                    <ul>
                        <li>
                            <RouterLink to="">
                                Table
                            </RouterLink>
                        </li>
                        <li>
                            <RouterLink to="">
                                Lamps
                            </RouterLink>
                        </li>
                        <li>
                            <RouterLink to="">
                                Chairs
                            </RouterLink>
                        </li>
                        <li>
                            <RouterLink to="">
                                Sofas
                            </RouterLink>
                        </li>
                    </ul>
                </div>
                <div class="color mt-5">
                    <h5>Filter By + </h5>
                    <div class="colors d-flex flex-column">
                        <h6>Color</h6>
                        <dic class="cos">
                            <div class="co"></div>
                            <div class="co"></div>
                            <div class="co"></div>
                            <div class="co"></div>
                        </dic>
                    </div>
                </div>
                <div class="range mt-5">
                    <h5>Price Range</h5>
                    <input type="range" v-model="selectedValue" min="0" max="5000" step="10" />
                    {{ selectedValue + '$' }}
                </div>
            </div>
            <!-- Products -> Content -->
            <div class="ProductsContent">
                <ProductsArray />
            </div>
        </div>
    </div>
</template>

<script>
import ProductsArray from './ProductsArray.vue';

export default {
    name: "ProductItems",
    data() {
        return {
            selectedValue: 0,
        };
    },
    components: { ProductsArray }
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
    grid-template-columns: 25% 75%;
    grid-gap: 1rem;
    margin-bottom: 2rem;
}
.ProductItems .allProducts .sideBarFilter{
    background-color: #2C3539;
    padding: 30px;
    color: #ffffff;
    height: 90vh;
    box-shadow: 0 0 50px rgba(0,0,0,.3);
}
ul{
    list-style: none;
    padding: 10px;
}
ul>li{
    margin-top: .5rem;
}
ul>li>a{
    text-decoration: none;
    color: #ffffff;
}
.ProductItems .allProducts .sideBarFilter .color .colors{
    display: flex;
    gap: .5rem;
}
.cos{
    display: flex;
    gap:.5rem
}
.co{
    border-radius: 50%;
    height: 15px;
    width: 15px;
}
.co:nth-child(1){
    background-color: yellow;
}
.co:nth-child(2){
    background-color: blue;
}
.co:nth-child(3){
    background-color: white;
}
.co:nth-child(4){
    background-color: red;
}

@media screen and (max-width: 767px){
    .ProductItems{
        width:90%;
    }
    .ProductItems .allProducts{
        grid-template-columns: 50% 50%;
    }
}
@media screen and (min-width: 768px) and (max-width:991px){
    .ProductItems .allProducts{
        grid-template-columns: 40% 60%;
    }
}
</style>