<template>
    <footer>
        <div class="parent mt-5">
            <div class="footerItem">
                <FooterItems title="Navigate" nav1="About Us" nav2="Blog" nav3="Contact Us" nav4="Sitemap"/>
                <FooterItems title="Collection" nav1="New arrivals" nav2="Featured" nav3="Catalog" nav4="Brands"/>
                <FooterItems title="Catagories" nav1="Tables" nav2="Lamps" nav3="Chairs" nav4="Sofas"/>
            </div>
            <div class="footItem">
                <h5>
                    399 Crowfield Road, Phoenix, Arizona 85012
                </h5>
                <a href="mailto:asff@fdsfsdc.com" class="text-decoration-none">asff@fdsfsdc.com</a>
                <p>+602-926-5809</p>
            </div>            
        </div>
            <div class="copyright d-flex justify-content-between align-items-center flex-wrap">
                <h6>Copyright © All Rights Reserved 2020</h6>
                <h6 class="fw-bold d-flex gap-2 flex-wrap align-items-center">
                    Get social
                    <a href="">
                        <font-awesome-icon icon="fa-brands fa-twitter" />
                    </a>
                    <a href="">
                        <font-awesome-icon icon="fa-brands fa-pinterest" />
                    </a>
                    <a href="">
                        <font-awesome-icon icon="fa-brands fa-square-facebook" />
                    </a>
                    <a href="">
                        <font-awesome-icon icon="fa-brands fa-square-instagram" />
                    </a>
                </h6>
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
    width:80%;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(2,1fr);
    justify-content: space-between;
}
.copyright{
    width: 80%;
    margin: auto;
}
.copyright h6 a{
    color:lightblue;
    font-size: 2rem; 
}
.parent .footerItem{
    display: grid;
    grid-template-columns: repeat(3,1fr);
}
.parent .footItem{
    justify-self: end;
}

@media screen and (max-width:767px){
    .parent{
        grid-template-columns: repeat(1,1fr);
    }
    .parent .footItem{
        justify-self: start;
    }
}
</style>