export const state = () => ({
    projectIndex: -1,
});

export const mutations = {
    setProjectIndex(state, payload) {
        state.projectsIndex = payload;
    }
};

export const getters = {
    getProjectIndex: (state) => {
        return state.projectIndex;
    }
}