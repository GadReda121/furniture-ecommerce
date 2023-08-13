<template>
    <div class="mt-5">
        <div class="back mb-5">
            <RouterLink to="/">Home / </RouterLink>
            <RouterLink to="/Products">Products / </RouterLink>
            <RouterLink :to="this.$store.state.cards.id">{{ this.$store.state.cards.title }}</RouterLink>
        </div>
        <div class="ProductDesc">
            <div class="image">
                <img :src="'../../' + $store.state.cards.image" alt="Product Image" />
            </div>
            <div class="details">
                <h1>{{ this.$store.state.cards.title }}</h1>
                <h4>{{ this.$store.state.cards.price + " $"}}</h4>
                <h4>{{ this.$store.state.cards.description }}</h4>
                <form @submit.prevent="addToCart(this.$store.state.cards)">
                    <div class="nums">
                        <button type="button" @click="denc">-</button>
                        <input type="number" :value="num" />
                        <button type="button" @click="inc">+</button>
                    </div>
                    <button type="submit">ADD TO CARD</button>
                </form>
            </div>
            <!-- 3 Router -->
            <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            DESCRIPTION
                        </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            {{  this.$store.state.cards.description  }}
                        </div>
                    </div>
                </div>
            
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingTwo">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                            WARRANTY
                        </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            {{ this.$store.state.cards.warranty }}
                        </div>
                    </div>
                </div>
            
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingThree">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                            REVIEW
                        </button>
                    </h2>
                    <div id="collapseThree" class="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            {{ this.$store.state.cards.review }}
                        </div>
                    </div>
                </div>
            </div>


            <!-- News -->
        </div>
    </div>
    <Newsletter class="mt-5" />
</template>

<script>
import { mapState } from 'vuex';
import Newsletter from '../Home/Newsletter.vue';
export default {
  components: { Newsletter },
    name: "ProductDesc",
    data() {
        return {
            num: "1"
        }
    },
    methods: {
        addToCart(item) {
            this.$store.state.data.push(item)
        },
        inc() {
            this.num++;
        },
        denc() {
            if (this.num <= 1) {
                return false;
            } else {
                this.num--;
            }
        }
    }
}
</script>

<style scoped>
.back{
    width: 80%;
    margin: auto;
    display: flex;
    justify-content: left;
    gap: .1rem;
}
.back a{
    text-decoration: none;
    color: #303E49;
}
.back a:last-child{
    color: #F2BE00;
}
.ProductDesc{
    width:80%;
    margin: auto;
    display:grid;
    grid-template-columns: repeat(2, 1fr);
    align-items: center;
    grid-gap: 2rem;
}
.nums button{
    width:50px;
    height: 40px;
    border: 1px solid #eee;
}
.nums input{
    width:50px;
    border: 1px solid #eee;
    height: 40px;
    text-align: center;
}
.image img{
    background-color: #fff;
    box-shadow: 0 0 20px rgba(0,0,0,.1);
    width: 100%;
}
.details{
    display: flex;
    flex-direction: column;
    gap: 1rem;
}
form{
    display: flex;
    flex-direction: column;
    gap: 1rem;
    margin-top: 3rem;
}
form button[type='submit']{
    background-color: #303E49;
    color: #fff;
    padding: 20px 30px;
    box-shadow: 0 0 20px rgba(0,0,0,.1);
    width: fit-content;
    border:none
}
.routes{
    margin-top: 3rem;
    display: flex;
    justify-content: space-between;
}
.routes a{
    text-decoration: none;
    color: #303E49;
    text-align: center;
}
.active{
    text-decoration: underline;
}

@media screen and (max-width: 800px){
    .ProductDesc{
        grid-template-columns: repeat(1, 100%);
    }
    .routes{
        margin-top: 3rem;
        display: flex;
        justify-content: space-between;
    }
}
</style>