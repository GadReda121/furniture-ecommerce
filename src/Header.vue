<template>
    <header class="Laptop">
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
    <header class="Mob">
        <!-- Logo -->
        <div class="logo">
            <div class="meuIcon">
                <font-awesome-icon icon="fa-solid fa-bars" class="fs-4" @click="menuDown" v-show="bars"/>
                <font-awesome-icon icon="fa-solid fa-xmark" class="fs-4" @click="menuUp" v-show="xmark" />
            </div>
            <div class="logoImage">
                <img src="../public/images/fi-logo.svg" alt="">
            </div>
            <!-- Menu Item -->
            <ul v-show="menu" :class="effect">
                <router-link to="">
                    Home
                </router-link>
                <router-link to="">
                    Products
                </router-link>
                <router-link to="">
                    Contact Us
                </router-link>
                <form action="">
                    <font-awesome-icon icon="fa-solid fa-magnifying-glass" class="glass"/>
                    <input type="search" name="" id="" placeholder="Search...">
                </form>
            </ul>
        </div>
        <!-- Another Tools (Search + Sign in + CAR) -->
        <div class="tools">
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
    name: "Header",
    data() {
        return {
            menu: false,
            bars: true,
            xmark: false,
            effect: ""
        }
    },
    methods: {
        menuDown() {
            this.menu = true;
            this.xmark = true;
            this.bars = false;
            this.effect = "animate__animated animate__fadeInDown";
        },
        menuUp() {
            this.effect = "animate__animated animate__fadeOutUp";
            setTimeout(() => {
                this.bars = true;
                this.menu = false;
                this.xmark = false;
            }, 500);
        },
    }
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
.Laptop{
    display: flex;
}
.Mob{
    display: none;
}
@media screen and (max-width:767px){
    .Laptop{
        display: none;
    }
    .Mob{
        display: flex;
    }
    .Mob .logo {
        display: flex;
        align-items: center;
        width:50%;
        justify-content: space-between;
    }
    .Mob .tools{
        width: 50%;
    }
    .Mob .logo .logoImage{
        display: flex;
        justify-content: flex-end;
    }
    .Mob .logo .logoImage img{
        width: 20px;
    }
    .Mob ul{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        position: absolute;
        top:60px;
        left: 0;
        z-index: 99;
        background-color: var(--primary-bg);
        width: 100%;
        padding: 20px;
    }
    .Mob .meuIcon .fs-4{
        cursor: pointer;
    }
    .Mob form{
        position: relative;
    }
    .Mob input{
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
    .Mob input:focus{
        width: 100%;
        border-radius: 5px;
        background-color: var(--bg);
        border: 2px solid var(--secondary-bg);
    }
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