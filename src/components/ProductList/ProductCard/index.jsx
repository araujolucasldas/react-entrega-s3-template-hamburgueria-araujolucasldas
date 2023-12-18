import style from "./index.module.scss"

export const ProductCard = ({ product, addToCart }) => {
    return(
        <li className={style.product__item}>
            <img className={style.item__img} src={product.img} alt={product.name} />
            <div className={style.item__info}>
                <h3 className="item__title">{product.name}</h3>
                <span className="item__type">{product.category}</span>
                <span className="item__price">{product.price.toLocaleString('pt-BR', { style: "currency", currency: "BRL"})}</span>
                <button className="item__button" onClick={()=> addToCart(product)}>Adicionar</button>
            </div>
        </li>
    )
}