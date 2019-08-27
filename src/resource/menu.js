const data = {
  index: 1,
  message: '导航一',
  children: [
    {
      index: '1-1',
      message: '分组一',
      children: [
        {
          index: '1-1-1',
          message: '列表',
          path: '/owner'
        },
        {
          index: '1-1-2',
          message: '分组一'
        }
      ]
    },
    {
      index: '1-2',
      message: '分组二'
    },
    {
      index: '1-3',
      message: '分组一'
    }
  ]
}
const data2 = {
  index: 2,
  message: '导航二',
  children: [
    {
      index: '2-1',
      message: '分组一',
      children: [
        {
          index: '2-1-1',
          message: '分组一'
        },
        {
          index: '2-1-2',
          message: '分组一'
        }
      ]
    },
    {
      index: '2-2',
      message: '分组二'
    },
    {
      index: '2-3',
      message: '分组一'
    }
  ]
}

const menu = [data, data2]

export { menu }
