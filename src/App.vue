<template>
   <Header />
   <HomeView />
   <BtnToTop />
   <Footer />
</template>

<script>
import BtnToTop from './BtnToTop.vue';
import Footer from './Footer.vue';
import Header from './Header.vue';
import HomeView from './views/HomeView.vue';
export default {
  components: {
    Header,
    HomeView,
    Footer,
    BtnToTop
}
}
</script>