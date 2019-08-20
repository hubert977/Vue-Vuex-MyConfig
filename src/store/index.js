import vuex from 'vuex';
import {main} from './modules/main'
const store = vuex.Store({
        modules: {
            main: main
        }

})