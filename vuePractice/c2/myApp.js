
// 定义局部组件
var TodoItem = {
  props: ['itemContent'], // 使用父组件 app传来的数据需要定义props
  template: `
    <div>
      <li>{{itemContent}}</li>
      <button @click="notify">a button</button>
    </div>
  `,
  methods: {
    notify() {
      alert('hi')
    }
  }
};

const app = new Vue({
  el: '#header__nav', // 需要接管的dom元素
  data: { // 可通过app.$data获取
    list: ['detail of 1st class', 'detail of 2nd class'],
    inputValue: ''
  },
  methods: {
    handleBtnClick: function () {
      this.list.push(this.inputValue);
      this.inputValue = '';
    }
  },
  components: {
    TodoItem
  }
});
