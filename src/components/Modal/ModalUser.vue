<template>
  <div
    class="
      fixed
      w-screen
      h-screen
      flex
      justify-center
      items-center
      bg-gray-700 bg-opacity-70
      top-0
      left-0
    "
  >
    <card-component />
  </div>
</template>

<script>
import CardComponent from './CardComponent.vue';

export default {
  name: 'ModalUser',
  components: { CardComponent },
};
</script>
