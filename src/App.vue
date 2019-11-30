<template>
  <div id="app" class="mainContainer">
    <Header />
    <router-view v-bind:data="data" />
    <Footer />
  </div>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";
import data from "./data.json";

export default {
  name: "app",
  components: {
    Header,
    Footer
  },
  data: function() {
    return {
      data: data
    };
  }
};
</script>

<style>
body {
  background: #fff;
}

::selection {
  background: #c898ff;
  color: #fff;
}

h1,
h2,
h3,
h4,
h5,
p,
a {
  color: #000;
  font-family: "Roboto Mono", monospace;
  font-size: 30px;
}

a {
  font-size: 20px;
}

p {
  font-size: 17px;
}

h3,
h4,
h5 {
  font-size: 15px;
  font-weight: 400;
}

.mainContainer {
  max-width: 600px;
  margin: 0px auto;
}

h1 {
  position: relative;
  display: inline-block;
  padding: 20px 0 4px;
  margin: 0;
  width: 100%;
  overflow: hidden;
  border-bottom: 4px solid #000;
}

h2 {
  margin: 10px 0px 5px 0px;
  text-transform: capitalize;
}

h3 {
  margin: 8px 0px 0px 0px;
}

h4 {
  margin: 8px 0px 30px 0px;
  color: rgba(0, 0, 0, 0.3);
}

h5 {
  margin: 30px 0px 0px 0px;
  border-top: 3px solid #000;
  position: relative;
  display: inline-block;
  width: 100%;
  padding: 10px 0 18px;
  overflow: hidden;
}

nav a {
  color: #a75afe;
}

a {
  margin-right: 14px;
  text-decoration: none;
  border-bottom: 2px solid #000;
}

a:hover {
  background: #a75afe;
  color: #fff;
}

a:focus {
  outline: none;
  background: #a75afe;
  color: #fff;
}

p {
  margin-top: 30px;
}

img {
  max-width: 100%;
  margin-top: 30px;
  max-height: 400px;
}
</style>
