<template>
    <main>
        <Hero title="Monsters" image="MM" />
        <transition v-if="monsters.length < 1" name="pop">
            <div
                class="relative w-full flex justify-center items-center mt-8 text-2xl"
            >
                <fa :icon="['fas', 'swords']" class="animate-spin" />
                <div
                    class="absolute rounded-full w-8 h-8 animate-ping bg-dnd-separator"
                />
            </div>
        </transition>
        <transition-group
            v-if="monsters.length >= 1"
            tag="section"
            class="flex flex-wrap justify-center mx-auto"
        >
            <!-- :class="monster_filter === initial ? 'bg-dnd-separator' : 'bg-transparent " -->
            <button
                v-for="initial in monsterInitials"
                :key="'monster' + initial"
                v-shortkey="hotkeyMaker(initial)"
                :class="selectedInitial(initial)"
                class="font-hammer px-2 hover:bg-dnd-separator rounded hover:text-white transition transform duration-200 ease-out hover:scale-105 hover:translate-y-1 hover:shadow"
                @shortkey="setInitial(initial)"
                @click="setInitial(initial)"
            >
                {{ initial }}
            </button>
        </transition-group>
        <transition-group
            v-if="monsters.length >= 1"
            tag="section"
            class="mx-6 mt-4 mb-8 grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4"
        >
            <!-- v-for="monster in monsters" -->
            <MonsterCard
                v-for="monster in filteredMonsters(monster_filter)"
                :key="monster.index"
                :link="monster.index"
                :name="monster.name"
            />
        </transition-group>
    </main>
</template>

<script>
import { mapGetters, mapActions, mapState } from 'vuex'
export default {
    layout: 'small',
    async fetch() {
        const res = await this.$axios.$get(
            'https://www.dnd5eapi.co/api/monsters'
        )
        this.setMonsters(res.results)
        this.count = res.count
    },
    data() {
        return {
            count: 0,
            monster_filter: null,
        }
    },
    computed: {
        // ...mapGetters(['getInitial']),
        // ...mapGetters('monsters', ['getInitial']),
        ...mapGetters({
            monsterInitials: 'monsters/getInitial',
            filteredMonsters: 'monsters/getFilteredMonsters',
        }),
        ...mapState({
            monsters: (state) => state.monsters.all,
        }),
    },
    // async beforeCreate() {
    //     const res = await this.$axios.$get(
    //         'https://www.dnd5eapi.co/api/monsters'
    //     )
    //     this.monsters = res.results
    //     this.count = res.count
    // },
    methods: {
        // ...mapActions('monsters', ['setAllMonsters']),
        ...mapActions({
            setMonsters: 'monsters/setAllMonsters',
        }),
        async getMonsterPic(monster) {
            return await this.$axios
                .$get(`https://serpapi.com/playground?q=${name}&tbm=isch&ijn=0`)
                .then((res) => {
                    return res
                })
        },
        setInitial(initial) {
            this.monster_filter =
                initial !== this.monster_filter ? initial : null
        },
        selectedInitial(initial) {
            return initial === this.monster_filter
                ? 'shadow-md bg-dnd-footer scale-110 text-dnd-background translate-y-2'
                : 'null'
        },
        hotkeyMaker(key) {
            key = key.toLowerCase()
            return [key]
        },
    },
}
</script>
