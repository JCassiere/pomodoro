<template>
  <span>
    <button title="start" :disabled='isStarted && !isPaused' @click="start">
      <i class="fa fa-play" aria-hidden="true"></i>
    </button>
    <button title="pause" :disabled='!isStarted || isPaused' @click="pause">
      <i class="fa fa-pause" aria-hidden="true"></i>
    </button>
    <button title="stop" :disabled='!isStarted' @click="stop">
      <i class="fa fa-stop" aria-hidden="true"></i>
    </button>
    <i class="toggle-volume glyphicon" v-show="isStarted && !isPaused && isWorking" :class="{ 'glyphicon-volume-off': !isSoundEnabled, 'glyphicon-volume-up': isSoundEnabled }" @click="toggleSound"></i>
  </span>
</template>

<script>
  import { mapGetters, mapActions } from 'vuex'

  export default {
    computed: mapGetters(['isStarted', 'isPaused', 'isStopped', 'isWorking', 'isSoundEnabled']),
    methods: mapActions(['start', 'stop', 'pause', 'toggleSound'])
  }
</script>

<style scoped>
	button:disabled i {
		color: gray;
	}
  .toggle-volume {
    float: right;
    cursor: pointer;
  }
</style>