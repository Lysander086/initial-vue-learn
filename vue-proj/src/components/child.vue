<template>
  <div>
    <!-- 默认插槽 -->
    <slot>
      <!-- slot内为后备内容 -->
      <h3>如果父组件没传内容, 此行显示</h3>
    </slot>

    <!-- 具名插槽 -->
    <slot name="header">
      <h3>没传header插槽</h3>
    </slot>

    <!-- 作用域插槽 -->
    <slot name="footer" testProps="value from child.vue">
      <h3>没传footer插槽</h3>
    </slot>
  </div>
</template>

<style scoped>
  div {
    border: 1px solid #000;
  }
</style>
