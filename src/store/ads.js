export default {
    state: {
      ads: [
        {
          title: "First",
          desc: "First Desc",
          promo: true,
          src: "https://cdn.vuetifyjs.com/images/carousel/squirrel.jpg",
          id: "1"
        },
        {
          title: "Second",
          desc: "Second Desc",
          promo: true,
          src: "https://cdn.vuetifyjs.com/images/carousel/sky.jpg",
          id: "2"
        },
        {
          title: "Third",
          desc: "Third Desc",
          promo: true,
          src: "https://cdn.vuetifyjs.com/images/carousel/bird.jpg",
          id: "3"
        },
        {
          title: "Fourth",
          desc: "Fourth Desc",
          promo: true,
          src: "https://cdn.vuetifyjs.com/images/carousel/planet.jpg",
          id: "4"
        }
      ]
    },
    mutations: {},
    actions: {},
    getters: {
      ads(state) {
        return state.ads;
      },
      promoAds(state) {
        return state.ads.filter(ad => ad.promo);
      },
      myAds(state) {
        return state.ads;
      },
      adByld(state) {
        return id => {
          return state.ads.find(ad => ad.id == id);
        };
      }
    }
  };