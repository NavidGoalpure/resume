const initialState = {
  isUglyMode: false,
}

const TOGGLE_UGLYMODE = "TOGGLE_AGLYMODE"

export const toggleUglyMode = isUglyMode => ({
  type: TOGGLE_UGLYMODE,
  isUglyMode,
})

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_UGLYMODE:
      return { ...state, isUglyMode: action.isUglyMode }
    default:
      return state
  }
}
