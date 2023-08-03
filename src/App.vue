<template>
   <Header />
   <BtnToTop />
   <Footer />
</template>

<script>
import BtnToTop from './BtnToTop.vue';
import Footer from './Footer.vue';
import Header from './Header.vue';
export default {
  components: {
    Header,
    Footer,
    BtnToTop,
}
}
</script>