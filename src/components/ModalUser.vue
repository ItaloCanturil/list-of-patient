<template>
  <div
    v-if="show"
    class="
      absolute
      w-full
      h-full
      flex
      justify-center
      items-center
      bg-gray-700 bg-opacity-70
      top-0
      left-0
    "
  >
    <div
      class="
        card
        w-[25rem]
        h-60
        flex flex-col
        items-center
        bg-white
        p-2
        relative
        rounded
      "
    >
      <button class="absolute right-2 top-1" @click="$emit('close')">
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

      <p>{{ data.first }} {{ data.last }}</p>
      <p>{{ data.gender }}</p>
      <p>{{ data.email }}</p>
      <p>{{ data.dob.date }}</p>
      <p>{{ data.phone }}</p>
      <p>{{ data.nat }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ModalUser',
  props: {
    show: { type: Boolean, required: true },
    data: { type: Object, required: true },
  },
  data() {
    return {
      close: false,
    };
  },
};
</script>
