export const state = () => ({
    projectIndex: -1,
});

export const mutations = {
    setProjectIndex(state, index) {
        state.projectIndex = index
    },
};

export const getters = {
    getProjectIndex: (state) => {
        return state.projectIndex;
    }
}