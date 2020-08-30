<template>
    <nav class="grid justify-center">
        <AppBarBtn :icon="[isActiveIcon('home'), 'house']" />
        <AppBarBtn
            v-for="feature in activeFeatures"
            :key="feature.title"
            :link="location(feature.title)"
            :icon="[isActiveIcon(feature.title), feature.icon]"
            :name="feature.title"
        />
    </nav>
</template>

<script>
import { mapGetters } from 'vuex'
export default {
    computed: {
        ...mapGetters('sections', ['activeFeatures']),
        finalIcon() {
            return ['fas', this.icon]
        },
    },
    methods: {
        isActiveIcon(name) {
            if (name === 'home' && this.$route.path === '/') {
                return 'fas'
            }
            name = this.location(name)
            return name === this.$route.path ? 'fas' : 'fal'
        },
        location(name) {
            return '/' + name.toLowerCase()
        },
    },
}
</script>

<style scoped>
nav {
    grid-template-columns: repeat(auto-fit, minmax(40px, 80px));
    @apply fixed bottom-0 left-0 right-0 px-4 py-2 bg-dnd-footer;
}
.nuxt-link-exact-active {
    @apply text-gray-100 shadow-md bg-dnd-header bg-opacity-25;
}
@media screen and (min-width: 425px) {
    nav {
        grid-template-columns: repeat(auto-fit, minmax(80px, 150px));
    }
}
</style>
