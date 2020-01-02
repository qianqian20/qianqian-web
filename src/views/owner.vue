<template>
    <div>
        <!-- <el-tree :data="data" :props="defaultProps" @node-click="handleNodeClick"></el-tree> -->
        <el-row :gutter="12">
  <el-col :span="8">
    <el-card shadow="always">
     <en-charts :value="Data" title="新增客户"></en-charts>
    </el-card>
  </el-col>
  <el-col :span="8">
    <el-card shadow="hover">
      <en-charts :value="Data" title="客户" type="pie"></en-charts>
    </el-card>
  </el-col>
  <el-col :span="8">
    <el-card shadow="never">
      <en-charts :value="Data" title="新增客户" type="line"></en-charts>
    </el-card>
  </el-col>
</el-row>
<el-row :gutter="12">
<el-col :span="8">
    <el-card shadow="always">
     <en-charts :value="Data" title="新增客户"></en-charts>
    </el-card>
  </el-col>
  <el-col :span="8">
    <el-card shadow="hover">
      <en-charts :value="Data" title="客户" type="scatter"></en-charts>
    </el-card>
  </el-col>
  <el-col :span="8">
    <el-card shadow="never">
      <en-charts :value="Data" title="新增客户" type="line"></en-charts>
    </el-card>
  </el-col>
</el-row>
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
      Data: [],
      Data1: [],
      vehicleInCount: {
        '2019-10-11': 1,
        '2019-10-12': 2,
        '2019-10-13': 5,
        '2019-10-14': 4,
        '2019-10-15': 10,
        '2019-10-16': 6,
        '2019-10-17': 15
      }
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
        this.Data1 = Object.entries(res.data.data[0].vehicleInCount).reverse().map(
          ([name, value]) => {
            return { name: name.substring(5), value }
          }
        )
        console.log(Object.entries(res.data.data[0].vehicleInCount), this.Data1)
      })
    },
    changeData () {
      this.Data1 = Object.entries(this.vehicleInCount).reverse().map(
        ([name, value]) => {
          return { name: name.substring(5), value }
        }
      )
    }
  },
  // 'echarts.vehicleInCount': {},
  watch: {
    'Data1': {
      handler (data) {
        this.Data = data
      },
      deep: true
    }
  },
  mounted () {
    // this.detail()
    this.changeData()
  }
}
</script>
