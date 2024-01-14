<template>
  <div class="shadow-md overflow-x-auto overscroll-x-auto">
    <table class="min-w-full">
      <thead
        v-if="columns"
        :class="['border border-green-600 bg-green-600 text-white border-collapse whitespace-nowrap']">
        <tr>
          <th
            v-for="(col, i) in columns"
            :key="`th-row-${i}`"
            :class="[col.class, 'p-3 text-xs text-center uppercase font-semibold border border-white-200']"
            v-html="col.label" />
        </tr>
      </thead>
      <tbody class="bg-white divide-y divide-gray-200 text-sm">
        <slot name="tbody">
          <tr>
            <td :colspan="99">
              <span class="flex flex-col gap-2 items-center py-8">
                <span class="text-sm font-medium opacity-[50%] uppercase">No Data!</span>
              </span>
            </td>
          </tr>
        </slot>
      </tbody>
    </table>
  </div>
</template>

<script>
  export default {
    name: 'BsTable',
    props: ['items', 'columns'],
  };
</script>
