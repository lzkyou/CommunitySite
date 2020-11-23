<template>
  <el-container>
    <el-aside width="200px">
      <el-menu mode="vertical" style="height: 100vh;" :default-active="$route.path" router>
        <el-submenu
          v-for="(submenus, index) in menu.items"
          :index="`menu-item-${index}`"
          :key="`menu-item-${index}`"
        >
          <template slot="title">{{ submenus.title }}</template>
          <el-menu-item
            v-for="(item, subIndex) in submenus.items"
            :index="item.path"
            :key="`menu-item-${index}-${subIndex}`"
          >
            {{ item.title }}
          </el-menu-item>
        </el-submenu>
      </el-menu>
    </el-aside>
    <el-container>
      <el-header> Eason · 东莞粉丝站 后台管理界面 </el-header>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import { Vue, Component } from "vue-property-decorator";

@Component({})
export default class Main extends Vue {
  menu = {
    items: [
      {
        title: "内容管理",
        items: [
          { title: "首页", path: "/" },
          { title: "专辑管理", path: "/videos/list" },
          { title: "视频管理", path: "/videos/list" },
        ],
      },
      {
        title: "运营管理",
        items: [{ title: "用户管理", path: "/users/list" }],
      },
    ],
  };
}
</script>

<style>
</style>