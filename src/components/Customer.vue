<template>
  <div class="customer">
    <h1>Hallo, mau beli TV?</h1>
    <p>Sisa {{totalTVCount}} TV</p>
    <p v-show="!totalTVCount">TV nya habis.. :(</p>
    <button :disabled="!totalTVCount" @click="beliTV">Beli TV</button>
  </div>
</template>

<script>
export default {
  name: "Customer",
  computed: {
    totalTVCount() {
      return this.$store.state.totalTVCount;
    }
  },
  methods: {
    beliTV() {
      this.$store.dispatch("hapusTV");
    }
  }
};
</script>

<style scope>
</style>