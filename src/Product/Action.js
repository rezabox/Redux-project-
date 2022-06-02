import { SET_PRODUCTS } from "./ProductActionType";

const products =[
        {
            id: 1,
            name: "Iphone13",
            description: "Iphone 13 is best phone in world and very good",
            image: "https://cdn01.zoomit.ir/2022/2/size-for-cover-monitor-(1).jpg?w=375",
            price:700,
            alamat:'$'
          },
          {
            id: 2,
            name: "Samsung Galaxy S22",
            description: "This is the latest phone from Samsung",
            image: "https://cdn01.zoomit.ir/2022/1/samsung-galaxy-s22-ultra-5g-burgundy.jpg?w=375",
            price:600,
            alamat:'$'
          },
          {
            id: 3,
            name: "Xiaomi Redmi Note10",
            description: "This is the latest phone from Xiaomi",
            image: "https://cdn01.zoomit.ir/2021/7/xiaomi-redmi-note-10-front-back.jpg?w=375",
            price:500,
            alamat:'$'
          },
          {
            id: 4,
            name: "Samsung Galaxy a52",
            description: "This is the latest phone from Samsung",
            image: "https://cdn01.zoomit.ir/2022/2/samsung-galaxy-a52-5g.jpg?w=375",
            price:350,
            alamat:'$'
          },
    ] 

export const getProducts = () => {
  return {
      type: SET_PRODUCTS,
      payload: products
  }
}