<script>
export default {
  name: 'en-table',
  props: {
    height: Number,
    border: {
      type: Boolean,
      default: true
    },
    stripe: {
      type: Boolean,
      default: true
    },
    method: {
      type: Function
    },
    pagination: {
      type: Boolean,
      default: false
    },
    paging: {
      type: Object,
      default () {
        return {
          itemCount: 0,
          pageCount: 0,
          pageIndex: 1,
          pageSize: 20
        }
      }
    }
  },
  computed: {
    tableHeight () {
      if (typeof this.height !== 'undefined') {
        return this.height - 32
      }
    }
  },
  watch: {
    '$attrs.data': {
      handler () {
        setTimeout(
          () => {
            this.$refs.table && this.$refs.table.doLayout()
          },
          0
        )
      }
    }
  },
  methods: {
    pagingChange (payload) {
      const paging = this.paging
      this.method(Object.assign(paging, payload))
      // this.method(
      //   {
      //     addition: {
      //       ...paging,
      //       ...payload
      //     },
      //     invokedByPagination: true
      //   }
      // )
    }
  },
  render (h) {
    const _this = this
    if (this.pagination) {
      return h(
        'div',
        [
          h(
            'el-table',
            {
              props: {
                ...this.$attrs,
                border: this.border,
                stripe: this.stripe,
                height: this.tableHeight,
                'highlight-current-row': true
              },
              on: {
                ...this.$listeners,
                'row-click' (...args) {
                  _this.$emit('row-click', ...args)
                  _this.$emit('current-change', args[0])
                }
              },
              ref: 'table'
            },
            this.$slots.default
          ),
          h(
            'el-pagination',
            {
              props: {
                total: this.paging.itemCount,
                'page-sizes': [20, 40, 60, 80],
                'page-size': this.paging.pageSize,
                'current-page': this.paging.pageIndex,
                layout: 'total, sizes, prev, pager, next, jumper'
              },
              on: {
                'size-change' (pageSize) {
                  _this.pagingChange({ pageSize })
                },
                'current-change' (pageIndex) {
                  _this.pagingChange({ pageIndex })
                }
              }
            }
          )
        ]
      )
    } else {
      return h(
        'el-table',
        {
          props: {
            ...this.$attrs,
            border: this.border,
            stripe: this.stripe,
            height: this.height,
            'highlight-current-row': true
          },
          on: {
            ...this.$listeners
          },
          ref: 'table'
        },
        this.$slots.default
      )
    }
  }
}
</script>
