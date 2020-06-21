<template>
  <div></div>
</template>
<script>
export default {
  layout: 'admin',
  created() {
    this.$store.commit('admin/logout')
  },
}
</script>
