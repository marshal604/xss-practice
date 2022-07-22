<template>
  <div v-html="xss"></div>
</template>
<script>
import { COOKIE_KEY, DEFAULT_XSS } from './constants'

export default {
  data() {
    return {
      xss: '',
    }
  },
  fetch() {
    this.fetchXss()
  },
  methods: {
    fetchXss() {
      this.xss =
        this.$cookies.get(COOKIE_KEY)?.[+this.$route.params.id - 1] ||
        DEFAULT_XSS
    },
  },
}
</script>
