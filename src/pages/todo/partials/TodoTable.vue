<template>
  <BsTable :columns="columns">
    <template #tbody>
      <tr v-for="(item, loop) in todoList" :key="`tb-row-${loop}`" class="border-b">
        <td class="p-3 text-center whitespace-nowrap truncate">
          {{ item.id }}
        </td>
        <td :class="(['p-3 text-center whitespace-nowrap truncate'], { 'line-through': item.isDone })">
          <span v-if="selectedToto && selectedToto.id === item.id">
            <form @submit.prevent="update(item)">
              <input type="text" class="border p-1 rounded-sm w-full" v-model="item.name" />
            </form>
          </span>
          <span v-else>{{ item.name }}</span>
        </td>
        <td class="p-3 text-center whitespace-nowrap truncate">
          <input
            type="checkbox"
            class="!outline-none"
            :checked="item.isDone"
            @input="update({ ...item, isDone: !item.isDone })" />
        </td>

        <td
          v-if="selectedToto && selectedToto.id === item.id"
          class="p-3 text-center whitespace-nowrap truncate space-x-2">
          <button type="button" class="bg-green-600 text-white rounded px-2 text-sm font-medium" @click="update(item)">
            Save
          </button>
        </td>
        <td v-else class="p-3 text-center whitespace-nowrap truncate space-x-2">
          <button
            type="button"
            :class="['bg-green-600 text-white rounded px-2 text-sm font-medium', { 'opacity-50': selectedToto }]"
            :disabled="selectedToto"
            @click="selectedToto = item">
            Edit
          </button>
          <button
            type="button"
            :class="['bg-red-600 text-white rounded px-2 text-sm font-medium', { 'opacity-50': selectedToto }]"
            @click="remove(item)">
            Remove
          </button>
        </td>
      </tr>
    </template>
  </BsTable>
</template>

<script>
  export default {
    name: 'TodoTable',
    data() {
      return {
        selectedToto: null,
        columns: [
          { label: '#', class: 'w-20' },
          { label: 'Name' },
          { label: 'Is Completed', class: 'w-14' },
          { label: 'Action', class: 'w-20' },
        ],
      };
    },
    methods: {
      list: function () {
        this.$store.dispatch('todo/list');
      },
      update: function (todo) {
        this.$store.dispatch('todo/update', todo);
        this.selectedToto = null;
      },
      remove: function (todo) {
        if (confirm(`Are you sure to remove ${todo.name}!`) == true) {
          this.$store.dispatch('todo/delete', todo.id);
        }
        return;
      },
    },
    computed: {
      todoList: function () {
        return this.$store.getters['todo/todos'];
      },
    },
    mounted() {
      this.$store.dispatch('todo/list');
    },
  };
</script>
