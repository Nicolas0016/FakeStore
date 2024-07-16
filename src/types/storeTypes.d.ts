interface Rating {
  rate: number;
  count: number;
}

export interface TProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
}

export interface ProductList {
  products: Product[];
}

export interface CartProduct {
  id: number;
  title: string;
  price: number;
  description: string;
  category: string;
  image: string;
  rating: Rating;
  quantity: number;
}

type ActionProducts =
  | { type: "addProduct"; payload: Product }
  | { type: "removeProduct"; payload: number }
  | { type: "initialize"; payload: Product[] };

type ActionFilters =
  | { type: "lowerPrice"; payload: boolean }
  | { type: "bestRating"; payload: boolean }
  | { type: "initialize"; payload: Product[] }
  | {
      type: "searchProducts";
      payload: {
        initialState: Product[];
        searchText: string;
      };
    }
  | {
      type: "category";
      payload: { initState: Product[]; categories: string[] };
    };

type ActionShoppingCart =
  | { type: "addProduct"; payload: CartProduct }
  | { type: "removeProduct"; payload: CartProduct }
  | { type: "initialize"; payload: CartProduct[] }
  | { type: "updateCart"; payload: CartProduct[] };
