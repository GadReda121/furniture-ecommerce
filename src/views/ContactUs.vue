<template>
    <Preloader v-if="isPreload"/>
    <div class="p-5 mb-5 contact">
        <div class="d-flex">
            <img src="../../public/images/contactUs.jpg" alt="Contact Us" class="w-100 rounded" loading="lazy" />
        </div>
        <div class="content">
            <h2>Hello There</h2>
            <p>Got A Throught To Discuss?</p>
            <form class="d-grid gap-3">
                <input type="text" placeholder="Name" />
                <input type="email" placeholder="E-mail" />
                <textarea placeholder="Message" cols="30" rows="10"></textarea>
                <button type="submit">Submit</button>
            </form>
        </div>
    </div>
</template>

<script>
import Preloader from '../Preloader.vue';
export default {
    name: "ContactUs",
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
    components: { Preloader }
}
</script>

<style scoped>
.contact{
    display: grid;
    grid-template-columns: repeat(2,1fr);
    grid-gap: .5rem;
    background-color: var(--primary-bg)
}
.content p{
    color: #7a7a7a;
}
.content form input, textarea{
    border: none;
    border-bottom: 1px solid #000;
    background: none;
    padding: 10px;
    resize: none;
    color: #000;
}
.content form input:focus, textarea:focus{
    border-bottom: 1px solid var(--secondary-bg);
}
.content form input:focus::placeholder, textarea:focus::placeholder{
    margin-bottom: 10px;
    color: var(--secondary-bg);
}
.contact form button{
    background-color: #ffffff;
    width: fit-content;
    padding: 15px 30px;
    border: none;
    box-shadow: 0 0 50px rgba(0, 0, 0, .1);
}
.contact form button:hover{
    background-color: #F8F9FA;
}
@media screen and (max-width: 767px){
    .contact{
        grid-template-columns: repeat(1,1fr);
    }
}
</style>