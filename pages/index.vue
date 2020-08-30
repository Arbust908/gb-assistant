<template>
    <main>
        <Hero title="gatobuho assistant" image="PHB" />
        <Logo />
        <section
            class="mx-6 grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 py-6"
        >
            <Feature
                v-for="(feature, key) in features"
                :key="key"
                v-bind="feature"
            />
        </section>
        <!-- <div class="p-6 rounded shadow bg-white space-x-2">
            <span
                class="h-8 w-8 inline-block shadow border bg-dnd-black"
            ></span>
            <span
                class="h-8 w-8 inline-block shadow border bg-dnd-header"
            ></span>
            <span
                class="h-8 w-8 inline-block shadow border bg-dnd-separator"
            ></span>
            <span class="h-8 w-8 inline-block shadow border bg-dnd-logo"></span>
            <span
                class="h-8 w-8 inline-block shadow border bg-dnd-footer"
            ></span>
            <span
                class="h-8 w-8 inline-block shadow border bg-dnd-border"
            ></span>
            <span
                class="h-8 w-8 inline-block shadow border bg-dnd-decoration"
            ></span>
            <span
                class="h-8 w-8 inline-block shadow border bg-dnd-table"
            ></span>
            <span
                class="h-8 w-8 inline-block shadow border bg-dnd-background"
            ></span>
        </div> -->
        <small> by <span>Fran Blanco</span> </small>
    </main>
</template>

<script>
import { mapState } from 'vuex'
export default {
    layout: 'small',
    data() {
        return {
            // features: [
            //     {
            //         title: 'Monsters',
            //         content:
            //             'a bestiary with monster that the player will encounter and challange',
            //         icon: 'dragon',
            //     },
            //     {
            //         title: 'Character Data',
            //         content: 'basic character info an mechanics',
            //         icon: 'scroll',
            //         comingSoon: true,
            //     },
            //     {
            //         title: 'Classes',
            //         content: 'the 12 different classes on the gmae',
            //         icon: 'shield-cross',
            //         comingSoon: true,
            //     },
            //     {
            //         title: 'Races',
            //         content: '',
            //         icon: 'fist-raised',
            //         comingSoon: true,
            //     },
            //     {
            //         title: 'Equipment',
            //         content: '',
            //         icon: 'treasure-chest',
            //         comingSoon: true,
            //     },
            //     {
            //         title: 'Spells',
            //         content: '',
            //         icon: 'book-spells',
            //         comingSoon: true,
            //     },
            //     {
            //         title: 'Game Mechanics',
            //         content: '',
            //         icon: 'cogs',
            //         comingSoon: true,
            //     },
            // ],
        }
    },
    computed: {
        ...mapState({
            features: (state) => state.sections.features,
        }),
    },
}
</script>

<style scoped>
main {
    @apply min-h-screen flex flex-col items-center text-center mx-auto;
}
small > span {
    font-family: 'IM Fell English';
    @apply mb-4;
}
</style>
