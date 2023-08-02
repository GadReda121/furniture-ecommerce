<template>
    <header>
        <!-- Logo -->
        <div class="logo">
            <img src="../public/images/fi-logo.svg" alt="">
            <!-- Menu Item -->
            <ul>
                <router-link to="">
                    Home
                </router-link>
                <router-link to="">
                    Products
                </router-link>
                <router-link to="">
                    Contact Us
                </router-link>
            </ul>
        </div>
        <!-- Another Tools (Search + Sign in + CAR) -->
        <div class="tools">
            <form action="">
                <font-awesome-icon icon="fa-solid fa-magnifying-glass" class="glass"/>
                <input type="search" name="" id="" placeholder="Search...">
            </form>
            <a href="">
                <font-awesome-icon icon="fa-solid fa-user" />
                Sign In
            </a>
            <!-- cart -->
            <a href="">
                <span class="num">0</span>
                <font-awesome-icon icon="fa-solid fa-cart-shopping" />
            </a>
        </div>
    </header>
</template>

<script>
export default {
    name: "Header"
}
</script>

<style scoped>
header{
    width: 100%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding: 1rem;
    background-color: var(--primary-bg)
}
header .logo {
    display: flex;
    align-items: center;
    gap: 3rem;
}
header .logo img{
    width: 5%;
}

header ul{
    display: flex;
    gap: 2rem;   
    margin: 0;
}

header ul a{
    text-decoration: none;
    color: var(--text-color);
}
header .tools{
    display: flex;
    align-items: center;
    gap: 2rem;
    width: 40%;
    justify-content: end;
}
header .tools form{
    position: relative;
}
header .tools input{
    width: 40px;
    background-color: #eee;
    border:none;
    outline: none;
    height: 40px;
    border-radius: 50%;
    padding-left: 2rem;
    padding-right: .5rem;
    transition: linear .5s;
}
header .tools input:focus{
    width: 100%;
    border-radius: 5px;
    background-color: var(--bg);
    border: 2px solid var(--secondary-bg);
}
header .glass{
    position: absolute;
    top: 12px;
    left: 12px;
}

header .tools a{
    color: var(--text-color);
    text-decoration: none;
}
header .tools a{
    position: relative;
}
header .tools a .num{
    position: absolute;
    top: -10px;
    right: -10px;
    background-color: var(--secondary-bg);
    border-radius: 50%;
    width: 20px;
    height: 20px;
    display: flex;
    justify-content: center;
    align-items: center;
}
</style>