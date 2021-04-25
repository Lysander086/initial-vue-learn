<template>
  <div>
    <child>
      <!-- 默认插槽 deprecated 写法-->
      <div>默认插槽</div>
      <!-- 具名插槽 -->
<!--   deprecated   <div slot="header">具名插槽header</div>-->
      <!--  以下为最新写法    -->
      <template #header >具名插槽header</template>
      <!-- 作用域插槽 -->
      <!--   <div slot="footer" slot-scope="slotProps"> -->
      <template #footer="slotProps">
      <!--    这里从子组件接受了值testProps    -->
        <div>{{slotProps.testProps}}</div>
      </template>
    </child>

  </div>
</template>

<script>
  export default {
    name: "Parent",
    components: {Child: () => import('@/components/child')}
  };
</script>

<style scoped>

</style>
