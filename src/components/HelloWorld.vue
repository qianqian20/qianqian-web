<template>
  <div class="hello">
    <el-table :data="tableData">
            <el-table-column prop="name" label="姓名" width="120">
              <el-button slot-scope="{ row }" @click="editClick(row)" type="text">{{ row.name}}</el-button>
            </el-table-column>
            <el-table-column prop="date" label="日期" width="140"></el-table-column>
            <el-table-column prop="address" label="地址"></el-table-column>
          </el-table>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      tableData: [],
      name: ''
    }
  },
  methods: {
    customer () {
      this.$axios(
        {
          method: 'get',
          url: '/common/customer',
          params: {name: this.name}
        }
      ).then(res => {
        this.tableData = res.data.data
      })
    },
    editClick (row) {
      this.$router.push({name: 'owner', params: {id: row.id}})
    }
  },
  mounted () {
    this.customer()
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
