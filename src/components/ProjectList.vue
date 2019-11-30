<template>
  <div>
    <div v-for="(project, index) in data" v-bind:key="index">
      <h2>
        <router-link :to="{path: '/project/' + index}">{{ project.name }}</router-link>
      </h2>
      <h3>{{ project.tagline }}</h3>
      <h4>{{ project.tech }}</h4>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    data: Array
  }
};
</script>