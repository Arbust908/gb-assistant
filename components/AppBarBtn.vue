<template>
    <nuxt-link :to="link">
        <fa :icon="icon" class="text-lg md:mt-2 font-bold" />
        <span>{{ name }}</span>
    </nuxt-link>
</template>

<script>
export default {
    props: {
        link: {
            type: String,
            default: '/',
        },
        icon: {
            type: Array,
            default() {
                return []
            },
        },
        name: {
            type: String,
            default: 'Home',
        },
    },
}
</script>

<style scoped>
a {
    @apply flex flex-col items-center px-4 py-2 transition duration-150 ease-out;
}
span {
    @apply sr-only;
}
@media screen and (min-width: 768px) {
    span {
        @apply not-sr-only;
    }
}
</style>
