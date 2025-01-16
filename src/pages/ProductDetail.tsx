import { useParams } from "react-router-dom";
import { useCartContext } from "../components/context/CartContext";
import { useFiltersContext } from "../components/context/ProductsFilterContext";
import Stars from "../components/Home/Stars";
import Menu from "../components/Menu";
import Comments from "../components/productDetails/Commnets";
import { CartProduct, TProduct } from "../types/storeTypes";
const ProductDetail = () => {
  const { productId } = useParams<{ productId: string }>();
  const { state } = useFiltersContext();
  const { state: cartState, dispatch: cartDispatch } = useCartContext();

  if (!productId)
    return <p className="text-center text-red-500">Producto no encontrado</p>;

  const productDetails = state.find(
    (product) => product.id === parseInt(productId)
  );

  if (!productDetails)
    return <p className="text-center text-red-500">Producto no encontrado</p>;

  function handleClickProduct(product: TProduct) {
    const existingProduct = cartState.find((p) => p.id === product.id);

    if (existingProduct) {
      const updatedProduct = {
        ...existingProduct,
        quantity: existingProduct.quantity + 1,
      };
      const updatedState = cartState.map((p) =>
        p.id === product.id ? updatedProduct : p
      );
      cartDispatch({ type: "updateCart", payload: updatedState });
    } else {
      const addProduct: CartProduct = {
        ...product,
        quantity: 1,
      };
      cartDispatch({ type: "addProduct", payload: addProduct });
    }
  }
  return (
    <>
      <Menu />
      <div className="container mx-auto p-4 grid grid-cols-1 lg:grid-cols-2 gap-8 bg-white rounded-lg my-4">
        <div className="m-auto grid place-content-center">
          <picture className="grid place-content-center h-[500px] w-[450px] m-auto">
            <img
              className="max-h-full max-w-full bg-contain "
              src={productDetails.image}
              alt={productDetails.title}
            />
          </picture>
        </div>

        <div className="flex flex-col space-y-4">
          <h2 className="text-2xl font-bold">{productDetails.title}</h2>

          <div className="flex items-center space-x-2 text-yellow-500">
            <span className="text-xl">{productDetails.rating.rate}</span>
            <Stars quantityStars={productDetails.rating.rate} />
            <span className="text-gray-500 text-sm">
              ({productDetails.rating.count} valoraciones)
            </span>
          </div>
          <h4 className="text-3xl font-semibold text-green-600">
            $ {productDetails.price}
          </h4>

          <div>
            <h5 className="font-semibold text-gray-800">
              Lo que tenés que saber del producto
            </h5>
            <p className="text-gray-600 mt-2">{productDetails.description}</p>
          </div>
          <div className="flex space-x-4">
            <button className="px-6 py-2  text-white rounded-lg shadow bg-lightBlue hover:scale-105">
              Comprar Ahora
            </button>
            <button
              onClick={() => handleClickProduct(productDetails)}
              className="px-6 py-2  rounded-lg shadow hover:scale-105"
            >
              Agregar al carrito
            </button>
          </div>
          <Comments />
        </div>
      </div>
    </>
  );
};

export default ProductDetail;
