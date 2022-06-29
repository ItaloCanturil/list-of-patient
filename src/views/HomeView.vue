<template>
  <div class="home">
  <h1>Home</h1>
  <button @click="getUsers()">teste</button>
  </div>
</template>

<script>

export default {
  name: 'HomeView',
  methods: {
    async getUsers() {
      const UserRepository = this.$repository('users');
      const { data } = await UserRepository.get();
      console.log(data);
    },
  },
};
</script>
