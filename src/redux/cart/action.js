import { ADD_TO_CART, CLEAR_CARD } from "./actionType";
import { INCREMENT } from "./actionType";
import { DECREMENT } from "./actionType";
import { REMOVE_CART } from "./actionType";
export const addToCart = (product)=>{
      return {
         type: ADD_TO_CART,
         payload:product
      }
}
export const increment = (productId)=>{
      return {
            type:INCREMENT,
            payload:productId
         }
}
export const decrement = (productId)=>{
      return{
            type: DECREMENT,
            payload:productId
      }
}
export const remove = (productId)=>{
      return{
            type: REMOVE_CART,
            payload:productId
      }
}
export const Clear = ()=>{
      return{
            type:CLEAR_CARD,
      }
}