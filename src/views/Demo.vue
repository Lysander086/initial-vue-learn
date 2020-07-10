<template>
  <div>
    <h1>Lysander</h1>
    <p>{{reversedMessage}}</p>
    <p>{{msg | capitalize}}</p>
    <div class="static"></div>
    <div>----------------------------</div>
    <h1>列表</h1>
    <div>---------------------------------------</div>
    <ul id="example-3">
      <li v-for="(value, key) in obj">
        {{ key }} : {{ value }}
      </li>
    </ul>
  </div>
</template>

<script>
  export default {
    name: 'Demo',
    components: {},
    data() {
      return {
        msg: "hi",
        obj: {
          firstName: 'John',
          lastName: 'Doe',
          age: 30
        }
      }
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

  }
</script>
