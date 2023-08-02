<template>
   <Header />
   <HomeView />
   <Footer />
</template>

<script>
import Footer from './Footer.vue';
import Header from './Header.vue';
import HomeView from './views/HomeView.vue';
export default {
  components: {
    Header,
    HomeView,
    Footer
}
}
</script>