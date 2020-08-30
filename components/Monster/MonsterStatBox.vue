<template>
    <article>
        <div class="name">{{ title }}</div>
        <div class="mod">{{ mod }}</div>
        <div class="stat">{{ stat }}</div>
    </article>
</template>

<script>
export default {
    props: {
        stat: {
            type: Number,
            default: 10,
        },
        title: {
            type: String,
            default: 'Stat',
        },
    },
    computed: {
        mod() {
            return Math.floor((this.stat - 10) / 2)
        },
    },
}
</script>

<style scoped>
article {
    @apply relative;
}
.name,
.mod,
.stat {
    @apply border-2 border-dnd-header bg-dnd-decoration;
}
.name {
    @apply absolute top-0 mt-4 z-20;
}
.mod {
    @apply static z-10 w-12 h-12 flex justify-center items-center;
}
.stat {
    @apply absolute bottom-0 mb-4 z-20;
}
</style>
