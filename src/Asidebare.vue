<template>
    <div>
        <!-- cart -->
        <a href="" @click.prevent="showCard">
            <span class="num">{{ getNum }}</span>
            <font-awesome-icon icon="fa-solid fa-cart-shopping" />
        </a>
        <Card v-show="card" :class="cardEffect" id="cardy"/>
    </div>
</template>

<script>
import { mapGetters } from 'vuex';
import Card from './components/Home/Card.vue';
export default {
    name: "Asidebare",
    computed: {
        ...mapGetters(['getNum'])
    },
    data() {
        return {
            card: false,
            cardEffect: ""
        }
    },
    methods: {
        showCard() {
            this.card = true;
            this.cardEffect = "animate__animated animate__slideInRight";
            const cardParent = document.getElementById('cardy');
            cardParent.style.cssText = 'width: 100%';
        }
    },
    components:{ Card }
}
</script>

<style scoped>
a{
    color: var(--text-color);
    text-decoration: none;
}
a{
    position: relative;
}
a .num{
    position: absolute;
    top: -10px;
    right: -10px;
    background-color: var(--secondary-bg);
    border-radius: 50%;
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>