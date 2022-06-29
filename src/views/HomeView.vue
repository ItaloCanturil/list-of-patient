<template>
  <div class="home">
  <h1>Home</h1>
  </div>
</template>

<script>
import { mapActions, mapState } from 'vuex';

export default {
  name: 'HomeView',

  computed: {
    ...mapState([
      'users',
    ]),
  },
  created() {
    this.getUsers();
  },
  methods: {
    ...mapActions(['getUsers']),
  },
};
</script>
