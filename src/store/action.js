import { actionType } from './index'
const appReducer = (state, action) => {
  switch (action.type) {
    case actionType.SIDEBAR_TOGGLE:
      return {
        ...state,
        sidebar_show: action.payload
      }
    default:
      return state
  }
}

export default appReducer