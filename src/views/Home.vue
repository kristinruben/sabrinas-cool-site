<template>
  <Fragment>
    <About />
    <Closet />
  </Fragment>
</template>

<script lang="ts">
// @ is an alias to /src
import { defineComponent, Fragment, reactive } from 'vue';
import About from './About.vue';
import Closet from './Closet.vue';

export default defineComponent({
  props: {},
  setup() {
    const state = reactive({

    });
    return {
      state,
    };
  },
  components: {
    Closet,
  },
});
</script>
