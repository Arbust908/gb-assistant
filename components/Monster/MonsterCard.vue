<template>
    <!-- :class="monster_filter === initial ? 'bg-dnd-separator' : 'bg-transparent " -->
    <nuxt-link :to="{ path: link }" append>
        <h3>{{ name }}</h3>
    </nuxt-link>
</template>

<script>
export default {
    props: {
        name: {
            type: String,
            default: 'Monster Name',
        },
        link: {
            type: String,
            default: 'monster-name',
        },
    },
}
</script>

<style scoped>
a {
    @apply px-2 py-4 leading-none text-center col-span-1 bg-dnd-table w-full flex justify-center items-center font-sable text-dnd-separator text-2xl transform transition duration-150 ease-out;
}
a:hover {
    @apply shadow bg-dnd-footer scale-105 text-dnd-background;
}
</style>
