<template>
  <Preloader v-if="isPreload"/>
    <main>
      <Swipper />
      <Minimalist />
      <Newsletter />
    </main>
</template>

<script>
import Preloader from '../Preloader.vue';
import Minimalist from '../components/Home/Minimalist.vue';
import Newsletter from '../components/Home/Newsletter.vue';
import Swipper from '../components/Home/swipper.vue';
export default {
  name: "HomeView",
  data() {
    return {
        isPreload: true,
    }
  },
  created() {
    setTimeout(() => {
      this.isPreload = false;
    }, 2000);
  },
  components:{ Swipper, Minimalist, Newsletter, Preloader }
}
</script>
<style>
main{
  background-color: var(--primary-bg);
  display: flex;
  flex-direction: column;
  gap: 5rem;
}
</style>
