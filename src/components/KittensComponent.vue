<template>
  <div class="well kittens">
    <img v-bind:src="catImgSrc"/>
  </div>
</template>

<script>
  export default {
    computed: {
      catImgSrc () {
        return 'http://thecatapi.com/api/images/get?type=gif&size=med&ts=' + this.$store.getters.getTimestamp
      }
    }
  }
</script>

<style scoped>
  .fade-enter-active, .fade-leave-active {
    transition: opacity .5s;
  }
  .fade-enter, .fade-leave-active {
    opacity: 0;
  }
</style>