import Vue from 'vue';
import Vuetify from 'vuetify/lib/framework';

Vue.use(Vuetify);

import ko from 'vuetify/lib/locale/ko'

Vue.component('MyComponent',{
    methods: {
        changeLocale () {
            this.$vuetify.lang.current = 'ko'
        },
    },
})

export default new Vuetify({
  lang: {
    locales: {ko},
    current: 'ko',
  },
});
