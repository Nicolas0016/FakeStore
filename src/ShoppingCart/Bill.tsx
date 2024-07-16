import { useCartContext } from "../components/context/CartContext";

export default function Bill() {
  const { state } = useCartContext();
  const titleProdcut = (text: string, longitudMaxima: number) => {
    if (text.length <= longitudMaxima) {
      return text; // Devuelve el texto completo si es menor o igual a la longitud máxima
    } else {
      return text.substring(0, longitudMaxima) + "..."; // Recorta el texto y añade puntos suspensivos
    }
  };
  const totalPrices = () => {
    let totalPrice = 0;
    state.map((product) => {
      totalPrice += product.price * product.quantity;
    });
    return Math.round(totalPrice * 100) / 100;
  };
  return (
    <div className="bill">
      <ul>
        {state.map((product) => (
          <li>
            <span>
              {titleProdcut(product.title, 20)} ({product.quantity})
            </span>
            <strong>$ {product.price * product.quantity}</strong>
          </li>
        ))}
      </ul>
      <footer>
        <span>
          Total <strong>$ {totalPrices()}</strong>
        </span>
        <button>Comprar</button>
      </footer>
    </div>
  );
}
