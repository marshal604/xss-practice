<template>
  <div>
    <h1 class="text-4xl text-center">Stored XSS</h1>
    <div v-html="xss"></div>
  </div>
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
