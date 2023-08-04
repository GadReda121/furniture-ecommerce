<template>
    <div class="mi">
        <MinimalistComponent 
        imageSrc = "images/new1.jpg"
        title="New minimalist–components"
        paragraph="Gravity will force your feet to the ground. Don’t be afraid, your mind will find your freedom. You won’t miss a sunrise. You’ll rise with the sun.
        You’ll never run away from the storm. You will flow with the wind.
        Don’t hesitate to pause. Follow the flow of the moment. And then, take the first step towards the new you."/>
        <MinimalistComponent 
        dir="rtl"
        imageSrc = "images/new2.jpg"
        title="Save Space more freedom"
        paragraph="Gravity will force your feet to the ground. Don’t be afraid, your mind will find your freedom. You won’t miss a sunrise. You’ll rise with the sun. You’ll never run away from the storm. You will flow with the wind. Don’t hesitate to pause. Follow the flow of the moment. And then, take the first step towards the new you."/>
    </div>
</template>

<script>
import MinimalistComponent from './MinimalistComponent.vue';
export default {
    name: "Minimalist",
    components: { MinimalistComponent },
}
</script>

<style scoped>
.mi{
    display: flex;
    flex-direction: column;
    gap: 2rem;
}
</style>