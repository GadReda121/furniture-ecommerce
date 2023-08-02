<template>
    <main>
      <Swipper />
      <Minimalist />
      <Newsletter />
    </main>
</template>

<script>
import Minimalist from '../components/Home/Minimalist.vue';
import Newsletter from '../components/Home/Newsletter.vue';
import Swipper from '../components/Home/swipper.vue';
export default {
  name:"HomeView",
  components:{ Swipper, Minimalist, Newsletter }
}
</script>
<style>
main{
  display: flex;
  flex-direction: column;
  gap: 5rem;
}
</style>
