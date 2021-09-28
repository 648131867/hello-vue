<template>
  <div class="contains">
    <h1></h1>
    <tree-table ref="recTree"
                :list.sync="treeDataSource"
                @actionFunc="actionFunc"
                @deleteFunc="deleteFunc"
                @orderByFunc="orderByFunc"></tree-table>
  </div>
</template>
<script>
  import treeTable from '../../components/tree-table.vue'
  export default {
    name: 'menu',
    data() {
      return {
        list: [], // 请求原始数据
        treeDataSource: [] // 组合成树表格接收的数据
      }
    },
    components: {
      treeTable
    },
    methods: {
      orderByFunc(val) {
        alert('排序')
        alert(val)
      },
      actionFunc(m) {
        alert('编辑')
      },
      deleteFunc(m) {
        alert('删除')
      }
    }
  }
</script>
