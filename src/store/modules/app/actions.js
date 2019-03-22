export default {
    ToggleSideBar: ({ commit }) => {
        commit('TOGGLE_SIDEBAR')
    },
    CloseSideBar ({ commit }, { withoutAnimation }) {
        commit('CLOSE_SIDEBAR', withoutAnimation)
    },
    ToggleDevice ({ commit }, device) {
        commit('TOGGLE_DEVICE', device)
    }
}