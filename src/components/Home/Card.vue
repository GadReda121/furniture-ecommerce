<template>
    <div class="cardParent" id="cardy">
        <div @click="closeCard"></div>
        <div class="content">
            <h1>Card</h1>
            <hr />
            <div v-if="this.$store.state.data.length > 0" class="d-flex flex-column gap-2">
                <div v-for="it in this.$store.state.data" :key="it" class="cardItem">
                    <img :src="'../../' + it.image" alt="Card Image" />
                    <div class="d-flex flex-column">
                        <h4>{{ it.title }}</h4>
                        <p>{{ it.price + ' $' }}</p>
                    </div>
                    <div class="delete">
                        <button @click="Delete(it)">Delete</button>
                    </div>
                </div>

                    <div class="total-price">
                        <p >
                            Total Price: {{ this.$store.state.data.map((e)=> e.price).reduce((a,e)=> a+e) }} $
                        </p>
                    </div>
            </div>
            <p v-else>Your cart is empty, try to Add stuff.</p>
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
        },
        Delete(item) {
            // Remove the item from the cart
            const index = this.$store.state.data.indexOf(item);
            if (index !== -1) {
                this.$store.state.data.splice(index, 1);
            }
        }
    }
}
</script>

<style scoped>
.cardParent {
    width: 100%;
    height: 100vh;
    overflow-y: scroll;
    display: grid;
    grid-template-columns: 60% 40%;
    position: absolute;
    top: 0;
    right: 0;
    z-index: 9999999;
    position: fixed;
}
.cardParent::-webkit-scrollbar {
  width: .3rem;
}

.cardParent::-webkit-scrollbar-thumb {
  background-color: var(--text-color);
  border-radius: 50px;
}

.cardParent::-webkit-scrollbar-track {
  background-color: var(--secondary-bg);
}
.cardParent .content {
    background-color: #303E49;
    color: #fff;
    text-align: center;
    padding: 30px;
    box-shadow: -3px 0 200px rgba(0, 0, 0, .1);
}
.cardItem{
    display: flex;
    align-items: center;
    justify-content: space-between;
    gap: 1rem;
    text-align: center;
    background-color: #bdbdbd;
    padding: 20px;
    color: #303E49;
    border-radius: 5px;
}
.cardItem img{
    width: 100px;
    height: 100px;
    border-radius: 5px;
}

.cardItem .delete{
    display: flex;
}
.cardItem button{
    background-color: #303E49;
    color: #fff;
    padding: 10px 30px;
    border: none;
    border-radius: 5px;
}
.total-price{
    background-color: green;
    padding: 20px;
}
.total-price p{
    margin: 0;
}
@media screen and (max-width:767px) {
    .cardItem{
        flex-direction: column;
    }
    .cardParent {
        grid-template-columns: 20% 80%;
    }
}
@media screen and (min-width:768px) and (max-width:991px){
    .cardItem{
        flex-direction: column;
    }
}
</style>