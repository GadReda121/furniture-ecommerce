<template>
    <section>
        <img :src="imageSrc" alt="" />
        <div class="text">
            <h1>{{ title }}</h1>
            <p>{{ paragraph }}</p>
        </div>
    </section>
</template>

<script>
export default {
    name: "MinimalistComponent",
    props:['imageSrc','title','paragraph']
}
</script>

<style scoped>
section h1, section p{
    color: #2C3E50;
}
section h1{
    min-width: 45%;
}
section{
    width: 90%;
    margin: auto;
    display: grid;
    grid-template-columns: repeat(2,1fr);
    grid-gap: 1rem;
}
section img{
    width: 100%;
}

@media screen and (max-width:767px){
    section{
        grid-template-columns: repeat(1,1fr);
        text-align: center;
    }
}
</style>