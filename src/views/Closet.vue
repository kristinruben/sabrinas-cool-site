<template>
  <Suspense>
    <template #default>
      <Fragment>
        <code>{{ state.closetContents }}</code>
      </Fragment>
    </template>
    <template #loading> </template>
  </Suspense>
</template>

<script lang="ts">
import axios from 'axios';
import {
  defineComponent, Fragment, reactive, Suspense,
} from 'vue';

import useFetchResource from '@/composables/fetchResource';

import About from './About.vue';

export default defineComponent({
  setup() {
    const url = 'https://api.unsplash.com';
    const query = 'cats';
    const params = {
      query,
    };
    const { fetchResource } = useFetchResource(url, params);

    const state = reactive({
      closetContents: fetchResource,
      query,
    });
    return {
      state,
    };
  },
});
</script>
