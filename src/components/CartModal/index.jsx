import { MdClose } from "react-icons/md";
import { CartItemCard } from "./CartItemCard";
import style from "./index.module.scss"

export const CartModal = ({ cartList, setOpenCart, removeFromCart, removeAllItems }) => {
   const total = cartList.reduce((prevValue, product) => {
      return prevValue + product.price;
   }, 0);

   return (
      <div className={style.modal__overlay} role="dialog">
         <div className={style.modal__box}>
            <div className={style.modal__header}>
               <h2 className="modal__title">Carrinho de compras</h2>
               <button className={style.modal__close} onClick={() => setOpenCart(false)} aria-label="close" title="Fechar">
                  <MdClose size={21} />
               </button>
            </div>
            <div className="modal__listContainer">
               <ul className={style.modal__list}>
                  {cartList.map((product) => (
                     <CartItemCard key={product.id} product={product} removeFromCart={removeFromCart} />
                  ))}
               </ul>
            </div>
            <div className={style.modal__priceContainer}>
               <div className={style.price__content}>
                  <span className="modal__priceText">Total</span>
                  <span className="modal__cartValue">{total.toLocaleString('pt-BR', { style: "currency", currency: "BRL" })}</span>
               </div>
               <button className="modal__button" onClick={removeAllItems}>Remover todos</button>
            </div>
         </div>
      </div>
   );
};
