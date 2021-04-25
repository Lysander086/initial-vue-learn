<template>
  <div>
    <h1>Lysander</h1>
    <countdown></countdown>
  </div>
</template>

<script>
  export default {
    name: 'Demo',
    components: {
      countdown: () =>
        import(/* webpackChunkName: "DestinationDetails"*/ "@/components/countdown"),
    },
    data() {
      return {
        msg: "hi",
        obj: {
          firstName: 'John',
          lastName: 'Doe',
          age: 30
        }
      };
    },
    methods: {},
    computed: {
      reversedMessage() {
        let _this = this;
        return _this.msg.split('').reverse().join('');
      }
    },
    filters: {
      capitalize() {
        return "123";
      }
    },
    mounted() {

    },

  };
</script>
