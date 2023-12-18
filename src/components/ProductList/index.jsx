import { ProductCard } from "./ProductCard";
import style from "./index.module.scss"

export const ProductList = ({ productList, addToCart }) => {
   return (
      <ul className={style.product__container}>
         {productList.map((product) => (
            <ProductCard addToCart={addToCart} key={product.id} product={product} />
         ))}
      </ul>
   );
};
