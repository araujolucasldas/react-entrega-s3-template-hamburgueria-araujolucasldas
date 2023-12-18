import { useState, useEffect } from "react";
import { CartModal } from "../../components/CartModal";
import { Header } from "../../components/Header";
import { ProductList } from "../../components/ProductList";

export const HomePage = () => {
   const [productList, setProductList] = useState([]);
   const localCartItems = localStorage.getItem("@CARTITEMS")

   const [cartList, setCartList] = useState(localCartItems ? JSON.parse(localCartItems) : []);

   // useEffect montagem - carrega os produtos da API e joga em productList
   useEffect(()=>{
      const getProducts = async ()=>{
         const response = await fetch("https://hamburgueria-kenzie-json-serve.herokuapp.com/products")
         const json = await response.json()
         setProductList(json)
      }
      getProducts()
   },[])
   
   // useEffect atualização - salva os produtos no localStorage (carregar no estado)
   useEffect(()=>{
      localStorage.setItem("@CARTITEMS", JSON.stringify(cartList))
   },[cartList])

   // adição, exclusão, e exclusão geral do carrinho
   const addToCart = (item)=>{
      const verifyItem = cartList.some((cartItem)=> cartItem.id === item.id)
      if(!verifyItem){
        setCartList([...cartList, item])
      console.log(cartList) 
      }else{
      }
   }

   const removeFromCart = (itemId)=>{
      const newCart = cartList.filter(({id})=>id !== itemId)
      setCartList(newCart)
   }

   const removeAllItems = ()=>{
      setCartList([])
   }

   // renderizações condições e o estado para exibir ou não o carrinho

   const [openCart, setOpenCart] = useState(false)

   // filtro de busca
   // estilizar tudo com sass de forma responsiva

   return (
      <>
         <Header cartList={cartList} openCart={openCart} setOpenCart={setOpenCart} />
         <main className="main__container">
            <ProductList productList={productList} addToCart={addToCart} />
            {openCart ? <CartModal cartList={cartList} removeFromCart={removeFromCart} removeAllItems={removeAllItems} setOpenCart={setOpenCart} /> : null}
            
         </main>
      </>
   );
};
