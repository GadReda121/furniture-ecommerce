<template>
    <div class="preloader-container">
        <div class="spinner"  v-if="isLoading"></div>
        <div v-else>
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: "Preloader",
    data() {
        return {
            isLoading: true
        };
    }
}
</script>

<style scoped>
.preloader-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    width:100%;
    background-color: var(--primary-bg);
    position: absolute;
    top: 0;
    z-index: 99999999999;
    position: fixed;
}
.spinner {
   position: relative;
   width: 56px;
   height: 56px;
   display: flex;
   align-items: center;
   justify-content: center;
}

.spinner::before,
.spinner::after {
   border: 6.7px solid #4797ff;
   border-radius: 50%;
   position: absolute;
   content: '';
   display: block;
}

.spinner::before {
   width: 33.6px;
   height: 33.6px;
   border-bottom-color: transparent;
   border-left-color: transparent;
   animation: spinner-1o3y8q 0.75s infinite linear reverse;
}

.spinner::after {
   animation: spinner-1o3y8q 0.5s infinite linear;
   height: 56px;
   width: 56px;
   border-right-color: transparent;
   border-top-color: transparent;
}

@keyframes spinner-1o3y8q {
   to {
      transform: rotate(360deg);
   }
}
</style>