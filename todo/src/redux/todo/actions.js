export const addTodoAction = (todo) => ({
  type: "ADD_TODO",
  payload: todo
})

export const getAllTodoAction = (todo) => ({
  type: "GET_ALL_TODO",
  payload: todo
})

export const checkTodoAction = (id) => ({
  type: "CHECK_TODO",
  payload: id
})

export const deleteTodoAction = (id) => ({
  type: "DELETE_TODO",
  payload: id
})


export const deleteCheckedAction = (todo) => ({
  type: "DELETE_CHECKED",
  payload: todo
})

export const checkAllActon = (todo) => ({
  type: "CHECK_ALL",
  payload: todo
})