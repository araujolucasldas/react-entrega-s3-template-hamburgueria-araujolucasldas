import { useState } from "react";
import Logo from "../../assets/Logo.svg";
import { MdSearch, MdShoppingCart } from "react-icons/md";
import style from "./index.module.scss"

export const Header = ({cartList, setOpenCart}) => {
   const [value, setValue] = useState("");

   return (
      <header className={style.header__container} >
         <section className={style.header__content}>
         <img className={style.header__logo} src={Logo} alt="Logo Kenzie Burguer" />
         <div className={style.header__div}>
            <button className={style.cart__button} onClick={()=> setOpenCart(true)}>
                <MdShoppingCart size={21} />
                <span className={style.cart__number}>{cartList.length}</span>
            </button>
            <form hidden>
               <input
                  type="text"
                  value={value}
                  onChange={(e) => setValue(e.target.value)}
               />
               <button type="submit">
                 <MdSearch size={21} />
               </button>
            </form>
         </div>
         </section>

         
      </header>
   );
};
