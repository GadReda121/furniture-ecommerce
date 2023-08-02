<template>
   <Header />
   <HomeView />
</template>

<script>
import Header from './Header.vue';
import HomeView from './views/HomeView.vue';
export default {
  components: {
    Header,
    HomeView
}
}
</script>