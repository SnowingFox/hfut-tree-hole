import { createLogger, createStore } from 'vuex'
import state, { State } from '@/store/state'
import mutations from './mutations'
import * as actions from './actions'


const debug = process.env.NODE_ENV !== 'production'

export default createStore<State>({
  state,
  actions,
  mutations,
  getters: {},
  strict: debug,
  plugins: debug ? [createLogger()] : [],
})