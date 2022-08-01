
export const isLoginAction = (value) => ({
  type: "IS_LOGIN_ACTION",
  payload: value
})




export const logOutAction = () => ({
  type: "LOGOUT_ACTION"

})

export const startLoading = () => ({
  type: "LOADER_START",

})
export const endLoading = () => ({
  type: "LOADER_END",

})

