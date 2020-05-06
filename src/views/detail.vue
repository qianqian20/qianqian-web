<template>
    <div></div>
</template>
<script>
export default {
  name: 'detail',
  data () {
    return {
      data: {
        id: ''
      }
    }
  },
  methods: {
    customer () {
      this.$axios(
        {
          method: 'get',
          url: `/common/customer/${this.id}`
        }
      ).then(res => {
        this.tableData = res.data.data
        this.paging = res.data.meta.paging
      })
    }
  },
  created () {
    this.customer()
  }
}
</script>
