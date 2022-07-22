<template>
  <div>
    <h1 class="text-4xl text-center">Reflected XSS</h1>
    <div v-html="xssHref"></div>
  </div>
</template>
<script>
export default {
  asyncData({ query }) {
    const { xssHref } = query

    return {
      xssHref,
    }
  },
}
</script>
