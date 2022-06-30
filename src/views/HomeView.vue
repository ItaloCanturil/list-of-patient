<template>
  <div class="home flex flex-col items-center h-full bg-slate-900 py-5">
    <h1 class="text-white">Lista de participantes</h1>
    <nav class="my-3">
      <label for="search" class="text-white">
        <input class="rounded" type="text" id="search">
        Busca
      </label>
    </nav>
    <Table class="my-3" :data="users" @show="more" @filter="genderFilter" />
    <modal-user :data="user" :show="openedModal" @close="openedModal = false"/>
    <button
      class="rounded p-1 bg-amber-600 text-white"
      @click="getMore(pages.results + 50)"
    >
      Loading more
    </button>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import Table from '@/components/Table.vue';
import ModalUser from '@/components/ModalUser.vue';

export default {
  name: 'HomeView',
  components: {
    Table,
    ModalUser,
  },
  data() {
    return {
      openedModal: false,
      user: null,
    };
  },
  computed: {
    ...mapState(['users', 'pages']),
  },
  created() {
    this.getUsers();
  },
  methods: {
    ...mapActions(['getUsers', 'getMore', 'getWithFilters']),
    more(item) {
      this.openedModal = true;
      this.user = item;
    },
    async genderFilter() {
      try {
        await this.getWithFilters(this.gender);
      } finally {
        if (this.gender === 'male') this.gender = 'female';
        console.log(this.gender);
        if (this.gender === 'female') this.gender = 'male';
      }
    },
  },
};
</script>
