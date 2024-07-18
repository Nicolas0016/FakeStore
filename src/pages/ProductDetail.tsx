import { useParams } from "react-router-dom";
import { useFiltersContext } from "../components/context/ProductsFilterContext";
import Stars from "../components/Home/Stars";
import Menu from "../components/Menu";
import "../styles/ProductDetail.css";
const ProductDetail = () => {
  const { productId } = useParams<{ productId: string }>();
  const { state } = useFiltersContext();

  if (!productId) return <p>Producto no encontrado</p>;

  const productDetails = state.find(
    (product) => product.id === parseInt(productId)
  );

  if (!productDetails) return <p>Producto no encontrado</p>;

  return (
    <>
      <Menu />
      <div className="ProductDetail">
        <picture>
          <img
            height={450}
            src={productDetails.image}
            alt={productDetails.title}
          />
        </picture>
        <div>
          <h2>{productDetails.title}</h2>
          <span className="rating">
            {productDetails.rating.rate}
            <Stars quantityStars={productDetails.rating.rate}></Stars>(
            {productDetails.rating.count})
          </span>
          <h4>$ {productDetails.price}</h4>
          <span>Lo que tenés que saber del producto</span>
          <p>{productDetails.description}</p>
          <footer>
            <button>Comprar Ahora</button>
            <button>Agregar al carrito</button>
          </footer>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
