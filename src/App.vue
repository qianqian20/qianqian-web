<template>
  <div id="app" style="height:100%">
    <el-container style="direction:vertical;border: 1px solid #eee;height:99%" ref="contentScroll">
      <el-aside width="200px" style="background-color: #fff;height:100%">
        <el-menu :default-openeds="['1']" v-for="item of menu" :key="item.index">
          <el-submenu :index="item.index">
            <template slot="title">
              <i class="el-icon-message"></i>{{item.message}}
            </template>
            <el-submenu :index="outer.index" v-for="outer of item.children" :key="outer.index">
              <template slot="title">{{outer.message}}</template>
              <el-menu-item :index="inner.index" v-for="inner of outer.children" :key="inner.index" @click="click(inner)">{{inner.message}}</el-menu-item>
            </el-submenu>
          </el-submenu>
        </el-menu>
      </el-aside>

      <el-container>
        <el-header style="text-align: right; font-size: 12px">
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item>查看</el-dropdown-item>
              <el-dropdown-item>新增</el-dropdown-item>
              <el-dropdown-item>删除</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span>王小虎</span>
        </el-header>

        <el-main>
          <router-view/>
        </el-main>
      </el-container>
    </el-container>
  </div>
</template>
<style>
html,
body,
#app,
.el-container {
 height: 100%;
}
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style>

<script>
import {menu} from './resource/menu'
export default {
  data () {
    return {
      menu: []
    }
  },
  created () {
    this.menu = menu
    console.log(menu)
  },
  methods: {
    click (inner) {
      if (inner.path) {
        this.$router.push(inner.path)
      }
    }
  }
}
</script>
