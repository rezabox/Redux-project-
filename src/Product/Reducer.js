import { SET_PRODUCTS } from "./ProductActionType";

const initialState = {
    products: []
}

const productReducer = (state = initialState,action)=>{
  switch (action.type) {
      case SET_PRODUCTS:
          return{
              ...state,
              products : action.payload
          }
      default:
         return state
  }
}
export default productReducer;