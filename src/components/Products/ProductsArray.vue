<template>
      <div class="item-list">
        <div class="item" v-for="(item, index) in items" :key="index">
          <div class="item-image-container">
            <img :src="item.image" alt="Item Image" class="item-image">
            <div class="item-buttons">
              <button class="add-to-cart" @click="addToCart(item)">Add to Cart</button>
              <button class="item-description" @click="showDescription(item.id), getData(item)">Description</button>
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
                    image: 'images/Products/1.jpg',
                    title: 'Item 1',
                    price: 50.00,
                    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae placeat quod unde obcaecati molestias soluta provident impedit quasi illum amet quae illo vero, ullam ipsa, voluptates tempore facilis laborum veritatis?",
                    review: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae placeat quod unde obcaecati molestias soluta provident impedit quasi illum amet quae illo vero, ullam ipsa, voluptates tempore facilis laborum veritatis?",
                    warranty: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae placeat quod unde obcaecati molestias soluta provident impedit quasi illum amet quae illo vero, ullam ipsa, voluptates tempore facilis laborum veritatis?",
                },
                {
                    id:'2',
                    image: 'images/Products/2.jpg',
                    title: 'Item 2',
                    price: 75.00,
                    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae placeat quod unde obcaecati molestias soluta provident impedit quasi illum amet quae illo vero, ullam ipsa, voluptates tempore facilis laborum veritatis?",
                    review: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae placeat quod unde obcaecati molestias soluta provident impedit quasi illum amet quae illo vero, ullam ipsa, voluptates tempore facilis laborum veritatis?",
                    warranty: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae placeat quod unde obcaecati molestias soluta provident impedit quasi illum amet quae illo vero, ullam ipsa, voluptates tempore facilis laborum veritatis?",
                },
                {
                    id:'3',
                    image: 'images/Products/3.jpg',
                    title: 'Item 3',
                    price: 80.00,
                    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae placeat quod unde obcaecati molestias soluta provident impedit quasi illum amet quae illo vero, ullam ipsa, voluptates tempore facilis laborum veritatis?",
                    review: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae placeat quod unde obcaecati molestias soluta provident impedit quasi illum amet quae illo vero, ullam ipsa, voluptates tempore facilis laborum veritatis?",
                    warranty: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae placeat quod unde obcaecati molestias soluta provident impedit quasi illum amet quae illo vero, ullam ipsa, voluptates tempore facilis laborum veritatis?",
                },
                {
                    id:'4',
                    image: 'images/Products/4.jpg',
                    title: 'Item 4',
                    price: 90.00,
                    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae placeat quod unde obcaecati molestias soluta provident impedit quasi illum amet quae illo vero, ullam ipsa, voluptates tempore facilis laborum veritatis?",
                    review: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae placeat quod unde obcaecati molestias soluta provident impedit quasi illum amet quae illo vero, ullam ipsa, voluptates tempore facilis laborum veritatis?",
                    warranty: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae placeat quod unde obcaecati molestias soluta provident impedit quasi illum amet quae illo vero, ullam ipsa, voluptates tempore facilis laborum veritatis?",
                },
                {
                    id:'5',
                    image: 'images/Products/5.jpg',
                    title: 'Item 5',
                    price: 100.00,
                    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae placeat quod unde obcaecati molestias soluta provident impedit quasi illum amet quae illo vero, ullam ipsa, voluptates tempore facilis laborum veritatis?",
                    review: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae placeat quod unde obcaecati molestias soluta provident impedit quasi illum amet quae illo vero, ullam ipsa, voluptates tempore facilis laborum veritatis?",
                    warranty: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae placeat quod unde obcaecati molestias soluta provident impedit quasi illum amet quae illo vero, ullam ipsa, voluptates tempore facilis laborum veritatis?",
                },
                {
                    id:'6',
                    image: 'images/Products/6.jpg',
                    title: 'Item 6',
                    price: 120.00,
                    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae placeat quod unde obcaecati molestias soluta provident impedit quasi illum amet quae illo vero, ullam ipsa, voluptates tempore facilis laborum veritatis?",
                    review: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae placeat quod unde obcaecati molestias soluta provident impedit quasi illum amet quae illo vero, ullam ipsa, voluptates tempore facilis laborum veritatis?",
                    warranty: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae placeat quod unde obcaecati molestias soluta provident impedit quasi illum amet quae illo vero, ullam ipsa, voluptates tempore facilis laborum veritatis?",
                },
                {
                    id:'7',
                    image: 'images/Products/7.jpg',
                    title: 'Item 7',
                    price: 120.00,
                    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae placeat quod unde obcaecati molestias soluta provident impedit quasi illum amet quae illo vero, ullam ipsa, voluptates tempore facilis laborum veritatis?",
                    review: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae placeat quod unde obcaecati molestias soluta provident impedit quasi illum amet quae illo vero, ullam ipsa, voluptates tempore facilis laborum veritatis?",
                    warranty: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae placeat quod unde obcaecati molestias soluta provident impedit quasi illum amet quae illo vero, ullam ipsa, voluptates tempore facilis laborum veritatis?",
                },
                {
                    id:'8',
                    image: 'images/Products/8.jpg',
                    title: 'Item 8',
                    price: 120.00,
                    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae placeat quod unde obcaecati molestias soluta provident impedit quasi illum amet quae illo vero, ullam ipsa, voluptates tempore facilis laborum veritatis?",
                    review: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae placeat quod unde obcaecati molestias soluta provident impedit quasi illum amet quae illo vero, ullam ipsa, voluptates tempore facilis laborum veritatis?",
                    warranty: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae placeat quod unde obcaecati molestias soluta provident impedit quasi illum amet quae illo vero, ullam ipsa, voluptates tempore facilis laborum veritatis?",
                },
                {
                    id:'9',
                    image: 'images/Products/9.jpg',
                    title: 'Item 9',
                    price: 120.00,
                    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae placeat quod unde obcaecati molestias soluta provident impedit quasi illum amet quae illo vero, ullam ipsa, voluptates tempore facilis laborum veritatis?",
                    review: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae placeat quod unde obcaecati molestias soluta provident impedit quasi illum amet quae illo vero, ullam ipsa, voluptates tempore facilis laborum veritatis?",
                    warranty: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae placeat quod unde obcaecati molestias soluta provident impedit quasi illum amet quae illo vero, ullam ipsa, voluptates tempore facilis laborum veritatis?",
                },
                {
                    id:'10',
                    image: 'images/Products/10.jpg',
                    title: 'Item 10',
                    price: 120.00,
                    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae placeat quod unde obcaecati molestias soluta provident impedit quasi illum amet quae illo vero, ullam ipsa, voluptates tempore facilis laborum veritatis?",
                    review: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae placeat quod unde obcaecati molestias soluta provident impedit quasi illum amet quae illo vero, ullam ipsa, voluptates tempore facilis laborum veritatis?",
                    warranty: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae placeat quod unde obcaecati molestias soluta provident impedit quasi illum amet quae illo vero, ullam ipsa, voluptates tempore facilis laborum veritatis?",
                },
                {
                    id:'11',
                    image: 'images/Products/11.jpg',
                    title: 'Item 11',
                    price: 120.00,
                    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae placeat quod unde obcaecati molestias soluta provident impedit quasi illum amet quae illo vero, ullam ipsa, voluptates tempore facilis laborum veritatis?",
                    review: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae placeat quod unde obcaecati molestias soluta provident impedit quasi illum amet quae illo vero, ullam ipsa, voluptates tempore facilis laborum veritatis?",
                    warranty: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae placeat quod unde obcaecati molestias soluta provident impedit quasi illum amet quae illo vero, ullam ipsa, voluptates tempore facilis laborum veritatis?",
                },
                {
                    id:'12',
                    image: 'images/Products/12.jpg',
                    title: 'Item 12',
                    price: 120.00,
                    description: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae placeat quod unde obcaecati molestias soluta provident impedit quasi illum amet quae illo vero, ullam ipsa, voluptates tempore facilis laborum veritatis?",
                    review: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae placeat quod unde obcaecati molestias soluta provident impedit quasi illum amet quae illo vero, ullam ipsa, voluptates tempore facilis laborum veritatis?",
                    warranty: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repudiandae placeat quod unde obcaecati molestias soluta provident impedit quasi illum amet quae illo vero, ullam ipsa, voluptates tempore facilis laborum veritatis?",
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
            this.$store.state.data.push(item)
        },
        showDescription(item) {
            this.$router.push(`/ProductDesc/${item}`)
        },
        getData(item) {
            this.$store.state.cards = item;
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
