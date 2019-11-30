<template>
  <div>
    <PageTitle v-bind:title="data[$route.params.id].name" />
    <a
      v-if="data[$route.params.id].gitHub.length"
      :href="data[$route.params.id].gitHub"
      target="_blank"
    >GitHub</a>
    <a
      v-if="data[$route.params.id].url.length"
      :href="data[$route.params.id].url"
      target="_blank"
    >Demo</a>
    <h4>{{ data[$route.params.id].tech }}</h4>
    <p>{{ data[$route.params.id].description }}</p>
    <!-- <img :src="'@/assets/' + data[$route.params.id].images[0]" /> -->
    <img :src="require(`@/assets/${data[$route.params.id].images[0]}`)" />
  </div>
</template>

<script>
import PageTitle from "./PageTitle";

export default {
  components: {
    PageTitle
  },
  props: {
    data: Array
  }
};
</script>