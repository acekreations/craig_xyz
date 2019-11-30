<template>
  <div>
    <br />
    <h1>{{ title }}</h1>
    <h3 v-if="subTitle">{{ subTitle }}</h3>
    <br />
  </div>
</template>

<script>
export default {
  props: {
    title: String,
    subTitle: String
  }
};
</script>