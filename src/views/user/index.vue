<template>
  <div>
    <el-aside>
      <SideMenu :items="items"></SideMenu>
    </el-aside>
    <el-main>
      <router-view></router-view>
    </el-main>
  </div>
</template>

<script>
  import SideMenu from '@/components/sidemenu/SideMenu';
  export default {
    components: {
      SideMenu
    },
    data() {
      return {
        items: [
          {
            index: 'user',
            title: '用户管理'
          },
          {
            index: 'menu',
            title: '菜单管理'
          },
          {
            index: 'role',
            title: '角色管理'
          }
        ]
      }
    },
  };
</script>

<style>
</style>
