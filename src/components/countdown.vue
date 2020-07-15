<template>
  <div>
    <button @click="handleClick">increment</button><p>{{total}}</p>
  </div>
</template>


<script>
  export default {
    data: function () {
      return {
        total: 0
      };
    },
    methods: {
      handleClick() {
        this.total++;
      }
    },
    mounted() {

    },
    props: {}
  };
</script>
