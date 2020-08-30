export const state = () => ({
    features: [
        {
            title: 'Monsters',
            content: 'These are the monsters of D&D.',
            icon: 'dragon',
        },
        {
            title: 'Character Data',
            content:
                'Data of the inner works of characters like Abiliy Scores, Skills Proficiencies & Languages',
            icon: 'scroll',
            comingSoon: true,
        },
        {
            title: 'Classes',
            content:
                "A character class is a fundamental part of the identity and nature of characters in the Dungeons & Dragons role-playing game. A character's capabilities, strengths, and weaknesses are largely defined by its class. A character's class affects a character's available skills and abilities.",
            icon: 'shield-cross',
            comingSoon: true,
        },
        {
            title: 'Races',
            content:
                'Each race grants your character ability and skill bonuses as well as racial traits.',
            icon: 'fist-raised',
            comingSoon: true,
        },
        {
            title: 'Equipment',
            content:
                'Opportunities abound to find treasure, equipment, weapons, armor, and more in the dungeons you explore. Normally, you can sell your treasures and trinkets when you return to a town or other settlement, provided that you can find buyers and merchants interested in your loot.',
            icon: 'treasure-chest',
            comingSoon: true,
        },
        {
            title: 'Spells',
            content: 'These are the spells of D&D.',
            icon: 'book-spells',
            comingSoon: true,
        },
        {
            title: 'Game Mechanics',
            content: 'Michanics Like Conditions, Damage Types & Magic Schools',
            icon: 'cogs',
            comingSoon: true,
        },
    ],
})

export const getters = {
    activeFeatures(state) {
        return state.features.filter((feature) => {
            return feature.comingSoon !== true
        })
    },
    // getCurrentPrices: (state) => (wanted_country = null) => {
    //     if (wanted_country === null) {
    //         wanted_country = state.country;
    //     }
    //     const current_country_prices = state.prices_by_country.find((country) => wanted_country === country.country_short);
    //     const new_prices = {};
    //     if (current_country_prices) {
    //         state.base_prices.forEach((product) => {
    //             const modified_product = { ...product };
    //             modified_product.price = Math.ceil(product.price * current_country_prices[`multiplier_${product.product}`]);
    //             modified_product.pretty_price = Math.ceil(product.price * current_country_prices[`multiplier_${product.product}`])
    //                 .toString()
    //                 .replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1.');
    //             modified_product.currency = state.currency;
    //             new_prices[modified_product.product] = modified_product;
    //         });
    //     } else {
    //         state.base_prices.forEach((product) => {
    //             const modified_product = { ...product };
    //             modified_product.currency = state.currency;
    //             new_prices[modified_product.product] = modified_product;
    //         });
    //     }
    //     return new_prices;
    // },
}

export const actions = {
    // selectFlowStep(context, payload) {
    //     context.commit('SELECT_FLOW_STEP', payload)
    // },
}
export const mutations = {
    // SELECT_FLOW_STEP(state, payload) {
    //     state.flowSteps.forEach((fStep) => {
    //         fStep.selected = fStep.name === payload
    //     })
    // },
}
