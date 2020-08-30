<template>
    <div>
        <h3>Size: {{ size }}</h3>
        <fa
            v-for="(scale, key) in sizes"
            :key="key"
            :icon="[selectedSize(scale), 'male']"
            :class="`scale-${key + 1}`"
        />
    </div>
</template>

<script>
export default {
    props: {
        size: {
            type: String,
            default: 'Medium',
        },
    },
    data() {
        return {
            sizes: ['tiny', 'small', 'medium', 'large', 'huge', 'gargantuan'],
        }
    },
    methods: {
        selectedSize(size) {
            return size === this.size.toLowerCase() ? 'fas' : 'fal'
        },
    },
}
</script>

<style scoped>
.scale-1,
.scale-2,
.scale-3,
.scale-4,
.scale-5,
.scale-6 {
    @apply mx-1;
}
.scale-1 {
    @apply text-xs;
}
.scale-2 {
    @apply text-base;
}
.scale-3 {
    @apply text-xl;
}
.scale-4 {
    @apply text-2xl;
}
.scale-5 {
    @apply text-3xl;
}
.scale-6 {
    @apply text-4xl;
}
div {
    box-shadow: 2px 2px 0 theme('colors.dnd.separator');
    @apply p-4 rounded border-2 border-dnd-separator;
}
</style>
