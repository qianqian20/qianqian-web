<template>
    <div>
        <!-- <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree> -->
    </div>
</template>

<script>
export default {
  data () {
    return {
      id: ''
    }
  },
  methods: {
    detail () {
      this.$axios(
        {
          method: 'GET',
          url: `/common/customer/${this.$route.params.id}`
        }
      ).then(res => {
        console.log(res.data.data)
      })
    }
  },
  mounted () {
    this.detail()
  }
}
</script>
