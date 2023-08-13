<template>
    <div class="btnToTop">
        <font-awesome-icon icon="fa-solid fa-arrow-up"  class="icon rounded" v-show="top" @click="toTop"/>
    </div>
</template>

<script>
export default {
    name: "BtnToTop",
    data() {
        return {
            top: false
        }
    },
    mounted() {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 20) {
                this.top = true
            } else {
                this.top = false
            }
        })
    },
    methods: {
        toTop() {
            window.scroll({
                top: 0
            });
        }
    }
}
</script>

<style scoped>
.btnToTop{
    position: absolute;
    top: 90%;
    right: 60px;
    z-index: 999999;
}
.btnToTop .icon{
    background: #303E49;
    color: #ffffff;
    padding: 12px 15px;
    cursor: pointer;
    position: fixed;
    box-shadow: 0 0 6px rgba(0,0,0,.1);
}
</style>