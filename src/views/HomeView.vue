<template>
  <div class="home flex flex-col items-center">
  <h1>Home</h1>
  <Table :data="users" class="my-3"/>
  <button
    class="rounded p-1 bg-slate-700 text-white"
    @click="getMore(pages.results + 50)"
  >
    Loading more
  </button>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import Table from '@/components/Table.vue';

export default {
  name: 'HomeView',
  components: {
    Table,
  },
  computed: {
    ...mapState([
      'users',
      'pages',
    ]),
  },
  created() {
    this.getUsers();
  },
  methods: {
    ...mapActions(['getUsers', 'getMore']),
  },
};
</script>
