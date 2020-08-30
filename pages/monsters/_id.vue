<template>
    <main v-if="monster">
        <Hero :title="monster.name" image="DMG" />
        <section class="m-6 mb-8 flex flex-wrap gap-2">
            <MonsterSize :size="monster.size" />
            <p>{{ monster.type }}</p>
            <p>{{ monster.subtype }}</p>
            <p>{{ monster.alignment }}</p>
            <p>{{ monster.armor_class }} AC</p>
            <p>{{ monster.hit_points }} HP</p>
            <p>{{ monster.hit_dice }}</p>
            <p>{{ monster.speed }}</p>
            <section class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
                <MonsterStatBox :stat="monster.strength" title="STR" />
                <MonsterStatBox :stat="monster.dexterity" title="DEX" />
                <MonsterStatBox :stat="monster.constitution" title="CON" />
                <MonsterStatBox :stat="monster.intelligence" title="INT" />
                <MonsterStatBox :stat="monster.wisdom" title="WIZ" />
                <MonsterStatBox :stat="monster.charisma" title="CHA" />
            </section>
            <p>{{ monster.proficiencies }}</p>
            <p>{{ monster.damage_vulnerabilities }}</p>
            <p>{{ monster.damage_resistances }}</p>
            <p>{{ monster.damage_immunities }}</p>
            <p>{{ monster.condition_immunities }}</p>
            <p>{{ monster.senses }}</p>
            <p>{{ monster.languages }}</p>
            <p>CR {{ monster.challenge_rating }}</p>
            <p>{{ monster.special_abilities }}</p>
            <p>{{ monster.actions }}</p>
            <p>{{ monster.legendary_actions }}</p>
        </section>
        <pre>
            <code>
            {{ monster }}
            </code>
        </pre>
    </main>
</template>

<script>
export default {
    layout: 'small',
    async asyncData(context) {
        const res = await context.$axios.$get(
            `https://www.dnd5eapi.co/api/monsters/${context.params.id}`
        )
        return { monster: res }
    },
    // methods: {
    //     calcMod(num) {
    //         return (num - 10) / 2
    //     },
    // },
    head() {
        return {
            title: this.monster.name + ' || Monster',
        }
    },
}
</script>
