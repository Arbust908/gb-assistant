<template>
    <nuxt-link
        :to="{ path: location }"
        :class="comingSoon ? 'comingSoon' : null"
    >
        <header>
            <fa :icon="finalIcon" class="text-lg mt-2" />
        </header>
        <main>
            <h2>{{ title }}</h2>
            <p>{{ content }}</p>
        </main>
    </nuxt-link>
</template>

<script>
export default {
    props: {
        title: {
            type: String,
            default: 'Feature',
        },
        content: {
            type: String,
            default:
                'This feature is about something and somthing or that other something',
        },
        icon: {
            type: String,
            default: 'question-square',
        },
        comingSoon: {
            type: Boolean,
            default: false,
        },
    },
    computed: {
        finalIcon() {
            return ['fas', this.icon]
        },
        location() {
            return !this.comingSoon ? `${this.title.toLowerCase()}` : null
        },
    },
}
</script>

<style scoped>
a {
    @apply flex col-span-1 rounded p-3;
}
a:not(.comingSoon):hover {
    @apply shadow;
}
a.comingSoon {
    @apply opacity-75 bg-gray-200 border cursor-not-allowed;
}

header {
    @apply px-2 transition duration-150 ease-out;
}
a:not(.comingSoon):hover header {
    @apply text-dnd-separator;
}
main {
    @apply text-left;
}
main > h2 {
    @apply text-2xl font-sable;
}
main > p {
    @apply leading-none;
}
</style>
