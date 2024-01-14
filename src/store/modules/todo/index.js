export default {
  namespaced: true,
  state: () => ({
    todos: [],
  }),
  getters: {
    todos: state => {
      return state.todos;
    },
  },
  mutations: {
    LIST(state) {
      const todoList = localStorage.getItem('todo_list');
      state.todos = todoList ? JSON.parse(todoList) : [];
    },
    CREATE(state, todo) {
      state.todos.unshift(todo);
      localStorage.setItem('todo_list', JSON.stringify(state.todos));
    },
    UPDATE(state, todo) {
      state.todos = state.todos.map(d => (d.id === todo.id ? { ...d, ...todo } : d));
      localStorage.setItem('todo_list', JSON.stringify(state.todos));
    },
    DELETE(state, id) {
      state.todos = state.todos.filter(d => d.id !== id);
      localStorage.setItem('todo_list', JSON.stringify(state.todos));
    },
  },
  actions: {
    list({ commit }) {
      commit('LIST');
    },
    create({ commit }, todo) {
      commit('CREATE', todo);
    },
    update({ commit }, todo) {
      commit('UPDATE', todo);
    },
    delete({ commit }, id) {
      commit('DELETE', id);
    },
  },
};
