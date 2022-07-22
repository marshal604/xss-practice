<template>
  <div>
    <h1 class="text-4xl text-center">Dom-Based XSS</h1>
    <div v-html="xssHref"></div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      xssHref: '',
    }
  },
  mounted() {
    const { xssHref } = this.$route.query

    this.xssHref = xssHref
  },
}
</script>
