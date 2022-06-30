<template>
  <div
    class="
      card
      w-[25rem]
      flex flex-col
      items-center
      bg-white
      p-2
      relative
      rounded
    "
  >
    <button class="absolute right-2 top-1" @click="handleBack">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        class="h-6 w-6"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        stroke-width="2"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M6 18L18 6M6 6l12 12"
        />
      </svg>
    </button>
    <figure>
      <img
        class="rounded-full"
        :src="data.picture.medium"
        alt="Imagem do paciente"
      />
    </figure>

    <p>{{ data.name.first }} {{ data.name.last }}</p>
    <p>{{ data.gender }}</p>
    <p>{{ data.email }}</p>
    <p>{{ formatDate(data.dob.date) }}</p>
    <p>{{ data.phone }}</p>
    <p>{{ data.location.postcode }} {{ data.location.city }} {{ data.nat }}</p>
    <p>{{ data.id.value }}</p>
    <label for="copy">
      <input
        v-on:focus="$event.target.select()"
        class="focus-visible:outline-none"
        ref="copy"
        id="copy"
        type="text"
        readonly
        :value="url"
      />
      <button
        class="bg-amber-600 rounded-full text-white p-1 ml-1"
        @click="copy"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-4 w-4"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          stroke-width="2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2
              2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3"
          />
        </svg>
      </button>
    </label>
  </div>
</template>

<script>
import formatDate from '@/utils/formatDate';

export default {
  name: 'CardComponent',
  data() {
    return {
      formatDate,
    };
  },
  computed: {
    data() {
      return this.$store.state.users[this.$route.params.position] || {};
    },
    url() {
      return window.location;
    },
  },
  methods: {
    handleBack() {
      this.$router.push('/');
    },
    copy() {
      this.$refs.copy.focus();
      document.execCommand('copy');
    },
  },
};
</script>

<style>
</style>
