<template>
  <div class="customer">
    <h1>Hallo, mau beli TV?</h1>
    <p>Sisa {{totalTVCount}} TV</p>
    <p v-show="happyStaff">Staff is Happing full!!</p>
    <p v-show="!totalTVCount">TV nya habis.. :(</p>
    <button :disabled="!totalTVCount" @click="beliTV">Beli TV</button>
    <button :disabled="totalTVCount < 2" @click="beliDuaTV">Beli Dua TV</button>
  </div>
</template>

<script>
import { mapState, mapGetters, mapActions } from "vuex";
export default {
  name: "Customer",
  computed: {
    // Cara Lama
    // totalTVCount() {
    //   return this.$store.state.totalTVCount;
    // },
    // happyStaff() {
    //   return this.$store.getters.happyStaff;
    // }
    // Cara Baru
    ...mapState(["totalTVCount"]),
    ...mapGetters(["happyStaff"])
  },
  methods: {
    ...mapActions(["hapusTV"]),
    beliTV() {
      // this.$store.dispatch("hapusTV", 1);
      this.hapusTV(1);
    },
    beliDuaTV() {
      // this.$store.dispatch("hapusTV", 2);
      this.hapusTV(2);
    }
  }
};
</script>

<style scoped>
button {
  /* display: block; */
  margin: 1px 1px;
}
</style>