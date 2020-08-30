<template>
    <header>
        <main class="">
            <h2 class="">{{ title }}</h2>
        </main>
        <picture>
            <source :srcset="srtSrc" />
            <img :src="imgSrc" alt="" />
        </picture>
        <div></div>
    </header>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: 'hero',
        },
        image: {
            type: String,
            default: 'Starter',
        },
    },
    computed: {
        imgSrc() {
            return require(`@/assets/imgs/DnD_${this.image}_Art.jpg`)
        },
        srtSrc() {
            return require(`@/assets/imgs/DnD_${this.image}_Art.webp`)
        },
    },
}
</script>

<style scoped>
header {
    @apply relative w-full;
}
main {
    text-shadow: 0 2px 6px theme('colors.gray.800');
    @apply absolute inset-0 flex justify-center items-center mx-auto leading-none text-gray-100 text-6xl font-sable capitalize z-20;
}
div {
    height: 50%;
    @apply absolute bottom-0 left-0 right-0 bg-gradient-to-t from-dnd-background to-transparent z-10;
}
picture > img {
    height: 16rem;
    @apply w-full object-cover;
}
@media screen and (min-width: 425px) {
    main {
        @apply ml-6 max-w-xs;
    }
}
</style>
