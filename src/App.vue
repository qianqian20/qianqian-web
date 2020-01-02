<template>
  <div id="app" style="height:100%">
    <el-container style="direction:vertical;height:99%" ref="contentScroll">
      <el-header style="text-align: right; font-size: 12px">
         <el-menu class="en-menu">
           <div>
             <ul class="en-menu__trunks">
               <li :class="{ 'en-menu__trunk_active': active === trunk.id }" :key="trunk.id" @click.stop="click(trunk)" @mouseout="mouseout" @mouseover="mouseover(trunk)" class="en-menu__trunk" v-for="trunk of menu">{{ trunk.message }}</li>
             </ul>
           </div>
         </el-menu>
        </el-header>

      <el-container height="100%">
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
</style>

<script>
import {menu} from './resource/menu'
let timer
export default {
  data () {
    return {
      menu: [],
      active: ''
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
    },
    mouseover (trunk) {
      clearTimeout(timer)
      this.branches = trunk.children
      this.active = trunk.id
    },
    mouseout () {
      timer = setTimeout(this.reset, 500)
    },
    reset () {
      this.branches = []
      this.active = ''
    }
  },
  mounted () {
    document.addEventListener(
      'click',
      () => {
        clearTimeout(timer)
        this.reset()
      }
    )
  }
}
</script>
<style>
.en-menu {
   background-color: #03b8b3;
  position: relative;
  padding: 0 20px;
}

.en-menu__trunks {
  display: flex;
  font-size: 14px;
  line-height: 40px;
}

.en-menu__trunk {
  padding: 0 10px;
  cursor: pointer;
  list-style:none;
}

.en-menu__trunk_active {
  background: #fff;
  color: #03b8b3;
}
</style>
