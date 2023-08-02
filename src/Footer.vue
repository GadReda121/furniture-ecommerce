<template>
    <footer>
        <div class="parent">
            <div class="footerItem">
                <FooterItems title="Navigate" nav1="About Us" nav2="Blog" nav3="Contact Us" nav4="Sitemap"/>
                <FooterItems title="Collection" nav1="New arrivals" nav2="Featured" nav3="Catalog" nav4="Brands"/>
                <FooterItems title="Catagories" nav1="Tables" nav2="Lamps" nav3="Chairs" nav4="Sofas"/>
            </div>
            <div class="footItem">
                <h5>
                    399 Crowfield Road, Phoenix, Arizona 85012
                </h5>
                <a href="mailto:asff@fdsfsdc.com">asff@fdsfsdc.com</a>
                <p>+602-926-5809</p>
            </div>
        </div>
    </footer>
</template>

<script>
import FooterItems from './components/footer/FooterItems.vue';

export default {
    name: "Footer",
    components: { FooterItems }
}
</script>

<style scoped>
.parent{
    padding: 50px;
    display: grid;
    grid-template-columns: repeat(2,1fr);
    justify-content: space-between;
}
.parent .footerItem{
    display: grid;
    grid-template-columns: repeat(3,1fr);
}
.parent .footItem{
    justify-self: end;
}
</style>