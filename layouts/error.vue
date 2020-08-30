<template>
    <main
        class="w-10/12 rounded mx-auto flex flex-col justify-center items-center"
    >
        <ErrorImg class="w-full mt-6" :main="main" />
        <h1 class="text-5xl font-bold font-garamond text-qi-bluedark">
            {{ error.statusCode || '' }}
        </h1>
        <h2 class="text-2xl font-garamond text-qi-bluemed -mt-4">
            {{ error.message || '' }}
        </h2>
        <p class="opacity-50 italic">Route: {{ error.path || '' }}</p>
        <nuxt-link
            to="/"
            class="font-bold underline text-plus-dark hover:text-plus px-6 py-2 rounded mt-4 hover:bg-plus-dark"
        >
            Go Home
        </nuxt-link>
    </main>
</template>

<script>
import { theme } from '~/tailwind.config'
export default {
    props: {
        error: {
            type: Object,
            required: true,
        },
    },
    computed: {
        main() {
            console.log(theme)
            return theme.colors.dnd.separator
        },
    },
    head() {
        return {
            title: `${this.error.statusCode} || Gatobuho assistant`,
        }
    },
}
</script>
<style>
*:focus {
    outline: none;
}
</style>
