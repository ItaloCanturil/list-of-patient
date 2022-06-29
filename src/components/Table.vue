<template>
  <table class="w-full">
    <thead class="bg-gray-50 border-b-2 border-gray-200">
      <tr>
        <th class="p-3 text-sm font-semibold tracking-wide text-left">Name</th>
        <th class="p-3 text-sm font-semibold tracking-wide text-left">Gender</th>
        <th class="p-3 text-sm font-semibold tracking-wide text-left">Birth</th>
        <th class="p-3 text-sm font-semibold tracking-wide text-left">Actions</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="user in data" :key="user.id">
        <td>
          <p>{{ user.name.first }}</p>
        </td>
        <td>
          {{ user.gender }}
        </td>
        <td>
          {{ user.dob.date }}
        </td>
        <td>
          <button @click="$emit('show', user)">View More</button>
        </td>
      </tr>
    </tbody>
  </table>
</template>

<script>
export default {
  name: 'Table-list',
  props: {
    data: { type: Array, required: true },
  },
};
</script>

<style>

</style>
