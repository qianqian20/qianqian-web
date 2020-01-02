<template>
    <div id="flex-box">
        <slot></slot>
    </div>
</template>
<script>
export default {
  name: 'flex-box',
  methods: {
    tableHeight () {
      if (typeof this.height === 'string') {
        return this.height - 32
      }
    }
  }
}
</script>
