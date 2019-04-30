import Vue from 'vue'
import Router from 'vue-router'
import Move from 'components/Move'
import MoveDetails from 'components/MoveDetails'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Move',
      component: Move
    },
    {
      path: '/MoveDetails',
      name: 'MoveDetails',
      component: MoveDetails
    }
  ]
})
