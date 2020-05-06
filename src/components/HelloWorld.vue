<template>
  <div class="hello">
    <en-table :data="tableData" :paging="paging" pagination :method="customer">
            <el-table-column prop="name" label="姓名" width="120">
              <el-button slot-scope="{ row }" @click="editClick(row)" type="text">{{ row.name}}</el-button>
            </el-table-column>
            <el-table-column label="日期" width="140">
              <template v-slot= "{row}">{{row.name}}</template>
            </el-table-column>
            <el-table-column prop="address" label="地址"></el-table-column>
          </en-table>
  </div>
</template>

<script>
import EnTable from '@/options/project/en-table'
export default {
  name: 'HelloWorld',
  data () {
    return {
      tableData: [],
      paging: {
        itemCount: 0,
        pageCount: 0,
        pageIndex: 1,
        pageSize: 20
      },
      name: ''
    }
  },
  components: {
    EnTable
  },
  methods: {
    customer () {
      this.$axios(
        {
          method: 'get',
          url: '/common/customer',
          params: {...{name: this.name}, ...this.paging}
        }
      ).then(res => {
        this.tableData = res.data.data
        this.paging = res.data.meta.paging
      })
    },
    editClick (row) {
      this.$router.push('/detail',
        vm => {
          vm.id = row.id
        }
      )
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
