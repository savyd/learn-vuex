import Vuex from "vuex";
import Vue from "vue";

Vue.use(Vuex);

export default new Vuex.Store({
  // state = gudang
  state: {
    totalTVCount: 10,
    wasLarryHappy: true,
    wasJennyHappy: true
  },

  getters: {
    // buat mengambil property dr state
    happyStaff: state => state.wasJennyHappy && state.wasJennyHappy
  },

  mutations: {
    // jenny
    hapusTV: (state, jumlahTV) => state.totalTVCount -= jumlahTV
  },

  actions: {
    // larry
    hapusTV: (context, jumlahTV) => {
      if (context.state.totalTVCount >= jumlahTV)
        context.commit("hapusTV", jumlahTV);
    }
  }
});
