<template>
  <div class="home flex flex-col items-center min-h-screen bg-slate-900 py-5 ">
    <router-view></router-view>
    <top-bar/>
    <p class="text-white w-auto sm:w-[30rem] my-3">
      Bem vindo ao nosso sistema de gerenciamento! Ficamos felizes em você está conosco.
      Você pode analisar mais informações do paciente clicando no botão com "+" e compartilhar esse
      paciente, quando entrar nesse link, você sempre vai observar as informações desse paciente em
      específico.
    </p>
    <Table :data="users" />
    <button class="rounded p-1 bg-amber-600 text-white mt-3" @click="getMore(pages)">
      Carregar mais pacientes
    </button>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';
import Table from '@/components/Table.vue';
import TopBar from '@/components/TopBar.vue';

export default {
  name: 'HomeView',
  components: {
    Table,
    TopBar,
  },
  computed: {
    ...mapState(['users', 'pages']),
  },
  async created() {
    await this.getAll();
  },
  methods: {
    ...mapActions(['getUsers', 'getMore']),
    async getAll() {
      await this.getUsers(
        this.$route.params.position ? parseInt(this.$route.params.position, 10) + 1 : 50,
      );
    },
  },
};
</script>
