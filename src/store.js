import { createStore } from 'vuex';

export default createStore({
    state() {
        return {
            user: JSON.parse(localStorage.getItem('user')) || null, // Load user data from localStorage
        };
    },
    mutations: {
        setUser(state, user) {
            state.user = user;
            localStorage.setItem('user', JSON.stringify(user)); // Save user data to localStorage
        },
        clearUser(state) {
            state.user = null;
            localStorage.removeItem('user'); // Remove user data from localStorage
        },
    },
    actions: {
        loginUser({ commit }, user) {
            commit('setUser', user);
        },
        logoutUser({ commit }) {
            commit('clearUser');
        },
    },
    getters: {
        isAuthenticated: (state) => !!state.user,
        currentUser: (state) => state.user,
    },
});
