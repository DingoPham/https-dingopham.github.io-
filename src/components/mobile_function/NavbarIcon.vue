<template>
  <div class="container" @click="toggleChange">
    <div class="bar1" :class="{ changeBar1: isChanged }"></div>
    <div class="bar2" :class="{ changeBar2: isChanged }"></div>
    <div class="bar3" :class="{ changeBar3: isChanged }"></div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isChanged: false
    };
  },
  methods: {
    toggleChange() {
      this.isChanged = !this.isChanged;
      this.$emit('toggle-menu', this.isChanged);
    }
  }
}
</script>

<style scoped>
.container{
  display: none;
}
@media (max-width: 768px){
  .container {
    display: inline-block;
    cursor: pointer;
    margin: 5px 20px 0 0;
  }
  .bar1, .bar2, .bar3 {
    width: 25px;
    height: 2px;
    background-color: #ffffff;
    margin-bottom: 5px;
    transition: 0.4s;
  }
  .changeBar1 {
    transform: translate(0, 4px) rotate(-45deg);
  }
  .changeBar2 {
    opacity: 0;
  }
  .changeBar3 {
    transform: translate(0, -10px) rotate(45deg);
  }
}

</style>