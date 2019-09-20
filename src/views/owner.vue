<template>
    <div>
        <!-- <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree> -->
        <en-charts :value="Data" title="新增客户"></en-charts>
    </div>
</template>

<script>
import enCharts from '@/options/project/en-charts'
export default {
  name: 'owner',
  components: {
    enCharts
  },
  data () {
    return {
      // id: ''
      Data: []
    }
  },
  methods: {
    detail () {
      // this.$axios(
      //   {
      //     method: 'GET',
      //     url: `/common/customer/${this.$route.params.id}`
      //   }
      // ).then(res => {
      //   console.log(res.data.data)
      // })
      this.$axios(
        {
          method: 'GET',
          url: '/dashboard'
        }
      ).then(res => {
        this.Data = res.data.data[0].customerFrom
        console.log(res.data.data[0].customerFrom)
      })
    }
  },
  mounted () {
    this.detail()
  }
}
</script>
