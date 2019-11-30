<template>
  <div>
    <PageTitle title="Craig Melville" subTitle="Front-End Engineer" />
    <!-- <h1>Portfolio</h1> -->
    <ProjectList v-bind:data="data" />
  </div>
</template>

<script>
import PageTitle from "./PageTitle";
import ProjectList from "./ProjectList";

export default {
  name: "HomePage",
  components: {
    PageTitle,
    ProjectList
  },
  props: {
    data: Array
  }
};
</script>