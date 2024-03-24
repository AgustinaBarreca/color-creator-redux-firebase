import {TOGGLE_LOADING} from '../types'

const uiReducer = (state={ loading: false}, {type}) => {
  if(type === TOGGLE_LOADING) {
    return {
      ...state,
      loading: !state.loading
    }
  }
  return state
}

export default uiReducer