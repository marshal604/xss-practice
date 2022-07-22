<template>
  <div>
    <h1 class="text-4xl text-center">Stored XSS</h1>
    <div class="ml-6 my-4">
      <input
        v-model="title"
        class="border p-1 w-6/12"
        type="text"
        placeholder="Post XSS..."
      />
      <button class="ml-2 p-1 border" @click="onSubmit">Submit</button>
    </div>
    <h1 class="text-4xl text-center">List</h1>
    <ul class="p-6">
      <li v-for="(xss, index) in xssList" :key="`xss-${index}`" class="my-2">
        <nuxt-link :to="{ path: `stored-xss/${index + 1}` }"
          >＃＃＃第 {{ index + 1 }} 筆＃＃＃</nuxt-link
        >
      </li>
    </ul>
  </div>
</template>
<script>
import { COOKIE_KEY, DEFAULT_XSS } from './constants'

export default {
  data() {
    return {
      title: '',
      xssList: [],
    }
  },
  fetch() {
    this.fetchStoredXSSList()
  },
  methods: {
    onSubmit() {
      if (!this.title) return
      const items = this.$cookies.get(COOKIE_KEY) || []
      this.$cookies.set(COOKIE_KEY, items.concat(this.title))
      this.title = ''
      this.fetchStoredXSSList()
    },
    fetchStoredXSSList() {
      this.xssList = this.$cookies.get(COOKIE_KEY) || [DEFAULT_XSS]
    },
  },
}
</script>
