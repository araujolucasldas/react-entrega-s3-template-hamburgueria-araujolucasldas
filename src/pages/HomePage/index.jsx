import { useState, useEffect } from "react";
import { CartModal } from "../../components/CartModal";
import { Header } from "../../components/Header";
import { ProductList } from "../../components/ProductList";

export const HomePage = () => {
   const [productList, setProductList] = useState([]);
   const [cartList, setCartList] = useState([]);

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
   // adição, exclusão, e exclusão geral do carrinho
   const addToCart = (item)=>{
      setCartList([...cartList, item])
      console.log(cartList)
   }
   // renderizações condições e o estado para exibir ou não o carrinho
   // filtro de busca
   // estilizar tudo com sass de forma responsiva

   return (
      <>
         <Header />
         <main>
            <ProductList productList={productList} addToCart={addToCart} />
            <CartModal cartList={cartList} />
         </main>
      </>
   );
};
