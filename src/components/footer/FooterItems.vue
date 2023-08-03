<template>
    <div class="FooterItems">
        <ul class="p-0">
            <h6 class="mb-3 fw-bolder">{{ title }}</h6>
            <li>
                <RouterLink to="">
                    {{ nav1 }}
                </RouterLink>
            </li>
            <li>
                <RouterLink to="">
                    {{ nav2 }}
                </RouterLink>
            </li>
            <li>
                <RouterLink to="">
                    {{ nav3 }}
                </RouterLink>
            </li>
            <li>
                <RouterLink to="">
                    {{ nav4 }}
                </RouterLink>
            </li>
        </ul>
    </div>
</template>

<script>
import { RouterLink } from 'vue-router';

export default {
    name: "FooterItems",
    props: ['title', 'nav1', 'nav2', 'nav3', 'nav4'],
    components: { RouterLink }
}
</script>

<style scoped>
.FooterItems{
    display: flex;
    flex-direction: column;
}
.FooterItems li{
    list-style: none;
    margin-top: .3rem;
}
.FooterItems li a{
    color: #2C3E50;
    text-decoration: none;
}
</style>