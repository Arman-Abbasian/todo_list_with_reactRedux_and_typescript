import { TodoDispatchTypes, TodosType, TODOS_FAIL, TODOS_LOADING, TODOS_SUCCESS } from "./todoTypes";

  
  interface InitialState {
    loading: boolean,
    todos?: TodosType|[]
    error:string
  }
  
  const initialState: InitialState = {
    loading: false,
    todos:[],
    error:""
  };
  
  const todoReducer = (state: InitialState = initialState, action: TodoDispatchTypes) : InitialState => {
    switch (action.type) {
      case TODOS_FAIL:
        return {
          loading: false,
        }
      case TODOS_LOADING:
        return {
          loading: true,
        }
      case TODOS_SUCCESS:
        return {
          loading: false,
          todo: action.payload
        }
      default:
        return state
    }
  };
  
  
  export default todoReducer;