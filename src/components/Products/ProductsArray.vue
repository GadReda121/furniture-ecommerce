<template>
      <div class="item-list">
        <div class="item" v-for="(item, index) in items" :key="index">
          <div class="item-image-container">
            <img :src="item.image" alt="Item Image" class="item-image">
            <div class="item-buttons">
              <button class="add-to-cart" @click="addToCart(item)">Add to Cart</button>
              <button class="item-description" @click="showDescription(item)">Description</button>
            </div>
          </div>
          <h3 class="item-title">{{ item.title }}</h3>
          <p class="item-price">{{ formatCurrency(item.price) }}</p>
        </div>
      </div>
</template>

<script>
export default {
    name:"ProductsArray",
    data() {
        return {
            items: [
                {
                    id:'1',
                    image: '../../../public/images/Products/1.jpg',
                    title: 'Item 1',
                    price: 50.00,
                },
                {
                    id:'2',
                    image: '../../../public/images/Products/2.jpg',
                    title: 'Item 2',
                    price: 75.00,
                },
                {
                    id:'3',
                    image: '../../../public/images/Products/3.jpg',
                    title: 'Item 3',
                    price: 80.00,
                },
                {
                    id:'4',
                    image: '../../../public/images/Products/4.jpg',
                    title: 'Item 4',
                    price: 90.00,
                },
                {
                    id:'5',
                    image: '../../../public/images/Products/5.jpg',
                    title: 'Item 5',
                    price: 100.00,
                },
                {
                    id:'6',
                    image: '../../../public/images/Products/2.jpg',
                    title: 'Item 6',
                    price: 120.00,
                },
                // ... other items
            ],
        };
    },
    methods: {
        formatCurrency(value) {
            return `$${value.toFixed(2)}`;
        },
        addToCart(item) {
            // Implement your logic to add the item to the cart
            console.log('Added to cart:', item);
        },
        showDescription(item) {
            // Implement your logic to show the item's description
            console.log('Description:', item.title);
        },
    },
};
</script>

<style scoped>
.item-list {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
}

.item {
    width: 250px;
    border: 1px solid #ccc;
    padding: 10px;
    text-align: center;
    background-color: #fff;
    box-shadow: 0 0 10px rgba(0,0,0,.1);
}

.item-image-container {
    position: relative;
    overflow: hidden;
}

.item-image {
    width: 100%;
    height: auto;
    transition: transform 0.3s;
}

.item-image-container:hover .item-image {
    transform: scale(1.1);
    /* Enlarge the image on hover */
}

.item-buttons {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: rgba(255, 255, 255, 0.9);
    padding: 5px;
    display: none;
    background-color: rgba(9, 65, 176, 0.669);
    height: 100%;
    align-items: center;
    margin: auto;
}
.item-buttons button{
    border-radius: 5px;
    background:none;
    border: 1px solid #fff;
    color: #ffffff;
    padding: 10px;
    width: 50%;
    margin: auto;
}
.item-image-container:hover .item-buttons {
    display: grid;
    align-content: center;
    grid-gap: .5rem;
    /* Show buttons on hover */
}

/* Other styles for item title and price */</style>
