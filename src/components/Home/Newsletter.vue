<template>
    <div class="news">
        <div class="text">
            <h1>Join our Newsletter</h1>
            <p>Nulla ac convallis lorem, eget euismod nisl. bibendum nec.</p>
        </div>
        <form action="">
            <input type="email" placeholder="Your E-mail" />
            <button type="submit">Submit</button>
        </form>
    </div>
</template>

<script>
export default {
    name: "Newsletter"
}
</script>

<style scoped>
.news{
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 50px;
    background-color: var(--secondary-bg);
    gap: .5rem;
}
.news form{
    display: flex;
    flex-direction: column;
    width: 30%;
}
.news form input{
    width:100%;
    border: none;
    padding: 10px;
    background: none;
    border-bottom: 2px solid #000;
}
.news form button{
    border:none;
    background-color: #212529;
    color: #ffffff;
    padding: 15px 30px;
    margin-top:0rem;
    box-shadow: 0 0 100px rgba(0,0,0,.5);
    width: fit-content;
}

@media screen and (max-width:800px){
    .news{
        display: grid;
        grid-template-columns: repeat(1,1fr);
        text-align: center;
        padding: 50px;
    }
    .news form{
        width: 100%;
    }
}
</style>