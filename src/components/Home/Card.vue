<template>
    <div class="cardParent" id="cardy">
        <div @click="closeCard"></div>
        <div class="content">
            <h1>Card</h1>
            <hr />
            <p>Your cart is empty, try to Add stuff.</p>
        </div>
    </div>
</template>

<script>
export default {
    name: "Card",
    methods: {
        closeCard() {
            this.effect = "animate__animated animate__slideOutRight";
            setTimeout(() => {
                const cardParent = document.getElementById('cardy');
                cardParent.style.cssText = 'width: 0';
            }, 100);
        }
    }
}
</script>

<style scoped>
.cardParent{
    width: 100%;
    height: 100vh;
    display: grid;
    grid-template-columns: 60% 40%;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 9999999;
    position: fixed;
}
.cardParent .content{
    background-color: #303E49;
    color: #fff;
    text-align: center;
    padding: 30px;
    box-shadow: -3px 0 200px rgba(0,0,0,.1);
}
@media screen and (max-width:767px){
    .cardParent{
        grid-template-columns: 20% 80%;
    }
}
</style>