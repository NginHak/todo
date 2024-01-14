<template>
  <div class="flex flex-col gap-4 justify-center">
    <h1 class="text-2xl font-semibold text-center">Todo Vue 2</h1>
    <div>
      <form @submit.prevent="create" class="flex justify-center gap-4">
        <input
          v-model="todoInput"
          placeholder="Enter todo name"
          class="py-2 px-3 bg-white font-medium border !outline-none focus:ring-2 focus:ring-green-600 rounded" />
        <button
          type="submit"
          :disabled="!todoInput.trim()"
          :class="[
            'bg-green-600 border border-green-600 py-2 px-3 shadow rounded text-white font-medium',
            {
              'opacity-50 cursor-not-allowed': !todoInput.trim(),
            },
          ]">
          Create
        </button>
      </form>
    </div>
    <TodoTable />
  </div>
</template>

<script>
  import { nanoid } from 'nanoid';
  export default {
    name: 'ToDo',
    data() {
      return {
        todoInput: '',
        todoCheck: false,
      };
    },
    methods: {
      create: function () {
        const todoText = this.todoInput.trim();
        if (!todoText) {
          return;
        }

        this.$store.dispatch('todo/create', {
          id: nanoid(5),
          name: todoText,
          isDone: this.todoCheck,
        });

        this.todoInput = '';
        this.todoCheck = false;
      },
    },
    components: {
      TodoTable: () => import('./partials/TodoTable.vue'),
    },
  };
</script>
