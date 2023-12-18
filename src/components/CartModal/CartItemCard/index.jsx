import { MdDelete } from "react-icons/md";
import style  from "./index.module.scss"

export const CartItemCard = ({ product, removeFromCart }) => {
   return (
      <li className={style.modal__item}>
         <div className={style.item__content}>
            <img className={style.modal__img} src={product.img} alt={product.name} />
            <div className={style.item__info}>
               <h3 className="itemModal__title">{product.name}</h3>
               <span className="itemModal__price">{product.price.toLocaleString('pt-BR', { style: "currency", currency: "BRL" })}</span>
            </div>
            
         </div>
         <button className="modalRemove__button" onClick={()=> removeFromCart(product.id)} aria-label="delete" title="Remover item">
            <MdDelete size={21} />
         </button>
      </li>
   );
};
