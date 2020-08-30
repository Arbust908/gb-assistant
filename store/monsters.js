export const state = () => ({
    all: [],
})

export const getters = {
    getInitial(state) {
        let initials = state.all.map((monster) => {
            return monster.name.charAt(0)
        })
        // console.log(initials)
        // function onlyUnique(value, index, array) {
        //     return array.indexOf(value) === index
        // }
        // initials = initials.filter(onlyUnique)
        initials = initials.filter(
            (value, index, array) => array.indexOf(value) === index
        )
        // console.log(initials)
        return initials
    },
    getFilteredMonsters: (state) => (initial = null) => {
        if (initial == null) {
            return state.all
        }
        const compareInitial = (word, initial) => {
            return initial === word.charAt(0)
        }
        return state.all.filter((monster) => {
            return compareInitial(monster.name, initial)
        })
    },
}

export const actions = {
    // setAllMonsters(context, payload) {
    setAllMonsters({ commit }, monsters) {
        commit('SET_MONSTERS', monsters)
    },
}
export const mutations = {
    SET_MONSTERS(state, payload) {
        state.all = payload
    },
}
