<template>
    <div>
          <el-menu
            :default-active="activeIndex2"
            class="el-menu-demo"
            mode="vertical"
            @select="handleSelect"
            background-color="#545c64"
            text-color="#fff"
            active-text-color="#ffd04b">
            <el-submenu index="2" >
              <template slot="title">系统管理</template>
              <el-menu-item index="2-1" v-on:click="user">用户管理</el-menu-item>
              <el-menu-item index="2-2" v-on:click="menu">菜单管理</el-menu-item>
              <el-menu-item index="2-3" v-on:click="role">角色管理</el-menu-item>
              <router-view></router-view>
            </el-submenu>
            </el-menu>

    </div>
</template>
<script>
    export default {
        name: "Main",
        methods: {
          user(){
            this.$router.push('/user/user')
          },
          menu(){
            this.$router.push('/user/menu')
          },
          role(){
            this.$router.push('/user/role')
          }
        }
    }
</script>

