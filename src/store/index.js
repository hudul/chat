import { createContext } from 'react'
import store from './store'
import appReducer from './action'

const AppContent = createContext()
const actionType = {
  SIDEBAR_TOGGLE: 'sidebar_toggle'
}

export {
  store,
  appReducer,
  actionType,
  AppContent
}