<template>
  <div id="app" class="main-container">
    <layout-header/>
    <layout-body/>
  </div>
</template>

<script>
  import LayoutHeader from "./components/layout/LayoutHeader.vue";
  //import LayoutFooter from "./components/layout/LayoutFooter.vue";
  import LayoutBody from "./components/layout/LayoutBody.vue";

  export default {
    name: 'app',
    components: {
      LayoutBody,
      LayoutHeader,
    },
    methods: {
    }
  }
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Open+Sans&display=swap');

html {
  font-family:'Open Sans', sans-serif ;
  height: 100%;
  background-color: whitesmoke;
}
body{
  height: 100%
}
.main-container{
  width: 100%;
  height: 100%;
  text-align: center;
}
</style>
