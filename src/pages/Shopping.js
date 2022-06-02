import { useDispatch, useSelector } from "react-redux";
import { Clear, increment, remove } from "../redux/cart/action";
import { getProducts } from "../Product/Action";
import { decrement } from "../redux/cart/action";
import Swal from 'sweetalert2';
import { Link } from "react-router-dom";
const Shopping = ()=>{
    const { cart } = useSelector((state => state.shopping));
    const dispatch = useDispatch();
    const handleIncrement = (productId) =>{
        dispatch(increment(productId))
        Swal.fire({
            title:"Cart Updated 1",
            icon: "success",
            showConfirmButton: false,
            timerProgressBar: true,
            timer:3000,
            toast:true,
            position:'top',
        })
    }
    const handleDecrement = (productId)=>{
        dispatch(decrement(productId))
        Swal.fire({
            title:"Cart Updated",
            icon: "success",
            showConfirmButton: false,
            timerProgressBar: true,
            timer:3000,
            toast:true,
            position:'top',
        })
    }
    const handleDelete = (productId)=>{
        dispatch(remove(productId))
        Swal.fire({
            title:"Cart Deleted",
            icon: "warning",
            showConfirmButton: false,
            timerProgressBar: true,
            timer:3000,
            toast:true,
            position:'top',
        })
    }
   const handleClear = ()=>{
       dispatch(Clear())
       Swal.fire({
        title:"Cart Cleared",
        icon: "warning",
        showConfirmButton: false,
        timerProgressBar: true,
        timer:3000,
        toast:true,
        position:'top',
    })
   }
    return(
    <>
     {cart.length === 0 ? (
       <div class="col-md-12 text-center">
           <div>
           <svg xmlns="http://www.w3.org/2000/svg" width="130" height="130" fill="currentColor" class="bi bi-basket mt-3" viewBox="0 0 16 16">
           <path d="M5.757 1.071a.5.5 0 0 1 .172.686L3.383 6h9.234L10.07 1.757a.5.5 0 1 1 .858-.514L13.783 6H15a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1v4.5a2.5 2.5 0 0 1-2.5 2.5h-9A2.5 2.5 0 0 1 1 13.5V9a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1.217L5.07 1.243a.5.5 0 0 1 .686-.172zM2 9v4.5A1.5 1.5 0 0 0 3.5 15h9a1.5 1.5 0 0 0 1.5-1.5V9H2zM1 7v1h14V7H1zm3 3a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 4 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 6 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3A.5.5 0 0 1 8 10zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5zm2 0a.5.5 0 0 1 .5.5v3a.5.5 0 0 1-1 0v-3a.5.5 0 0 1 .5-.5z"/>
           </svg>
           </div>
           <h2 className="mt-2">Cart is empty</h2>
           <Link type="button" to='/' class="btn btn-outline-dark">Product</Link>
       </div>
     
     ):(
                 <div className="container">
                 <div className="row mt-5">
                     <div className="col-lg-12 pl-3 pt-3">
                         <table className="table table-hover border bg-white">
                             <thead>
                                 <tr>
                                     <th>Product</th>
                                     <th>Price</th>
                                     <th style={{ width: '10%' }}>Quantity</th>
                                     <th>Subtotal</th>
                                     <th>Action</th>
                                 </tr>
                             </thead>
                             <tbody>
                               {cart && cart.map(product =>(
                                     <tr>
                                     <td className="align-middle">
                                         <div className="row">
                                             <div className="col-lg-2">
                                                 <img
                                                     src={product.image}
                                                     alt="..."
                                                     className="img-fluid"
                                                 />
                                             </div>
                                             <div className="col-lg-10">
                                                 <h5>{product.name}</h5>
                                                 <p>{product.description}</p>
                                             </div>
                                         </div>
                                     </td>
                                     <td className="align-middle">{product.price}{product.alamat}</td>
                                     <td className="align-middle">
                                         <button onClick={()=> handleIncrement(product.id)} className="btn btn-sm btn-dark me-2">
                                             +                                
                                         </button>
                                         <span>{product.qty}</span>
                                         <button onClick={()=> handleDecrement(product.id)} className="btn btn-sm btn-dark ms-2">
                                             -
                                         </button>
                                     </td>
                                     <td className="align-middle">{product.price * product.qty}{product.alamat}</td>
                                     <td className="align-middle" style={{ width: '15%' }}>
                                         <button onClick={()=> handleDelete(product.id)} className="btn btn-danger btn-sm">delete</button>
                                     </td>
                                    </tr>
                               ))}               
                                    
                             </tbody>
                             <tfoot>
                                 <tr>
                                     <td>
                                         <button onClick={()=> handleClear()} className="btn btn-dark">Clear Cart</button>
                                     </td>
                                     <td colspan="2" className="hidden-xs"></td>
                                     <td className="hidden-xs text-center" style={{ width: '15%' }}>
                                         <strong>Total :{cart.reduce((total, product)=>{
                                                   return  total + product.price * product.qty;
                                                  
                                         },0)}</strong>
                                     </td>
                                     <td>
                                         <a href="/" className="btn btn-success btn-block">Checkout</a>
                                     </td>
                                 </tr>
                             </tfoot>
                         </table>
                     </div>
                 </div>
             </div>
     )}

    </>
      
    )
}
export default Shopping;