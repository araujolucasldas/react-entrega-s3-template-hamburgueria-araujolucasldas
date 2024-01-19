import { useState, useEffect } from "react";
import { CartModal } from "../../components/CartModal";
import { Header } from "../../components/Header";
import { ProductList } from "../../components/ProductList";

import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css'

export const HomePage = () => {
   const [productList, setProductList] = useState([]);
   const localCartItems = localStorage.getItem("@CARTITEMS")

   const [cartList, setCartList] = useState(localCartItems ? JSON.parse(localCartItems) : []);

   const notify = ()=>{
      toast.info("Você já adicionou este item ao carrinho")
  }

   useEffect(()=>{
      const getProducts = async ()=>{
         const response = await fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
         const json = await response.json()
         setProductList(json)
      }
      getProducts()
   },[])
   
   useEffect(()=>{
      localStorage.setItem("@CARTITEMS", JSON.stringify(cartList))
   },[cartList])

   const addToCart = (item)=>{
      const verifyItem = cartList.some((cartItem)=> cartItem.id === item.id)
      if(!verifyItem){
        setCartList([...cartList, item])
      }else{
         notify()
      }
   }

   const removeFromCart = (itemId)=>{
      const newCart = cartList.filter(({id})=>id !== itemId)
      setCartList(newCart)
   }

   const removeAllItems = ()=>{
      setCartList([])
   }

   const [openCart, setOpenCart] = useState(false)

   return (
      <>
         <Header cartList={cartList} openCart={openCart} setOpenCart={setOpenCart} />
         <main className="main__container">
            <ProductList productList={productList} addToCart={addToCart} />
            {openCart ? <CartModal cartList={cartList} removeFromCart={removeFromCart} removeAllItems={removeAllItems} setOpenCart={setOpenCart} /> : null}
            
         </main>
         <ToastContainer />
      </>
   );
};
