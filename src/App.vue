<template>
  <div id="app">
    <c-container size="lg">
      <AdvertiserList />
    </c-container>
  </div>
</template>

<script>
import AdvertiserList from './pages/AdvertiserList.vue'

export default {
  name: 'app',
  components: { AdvertiserList }
}
</script>

<style>
html {
  background: #f0f0f0;
}
</style>
