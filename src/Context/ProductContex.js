import { createContext, useEffect, useReducer } from "react";
import axios from "axios";
import reducer from "../Reducer/ProductReducer";
import { useContext } from "react";

const AppContext = createContext();

const API = "https://dummyjson.com/products";

const getLocalCartData = () => {
  let localCartData = localStorage.getItem("whoopCart");
  if (localCartData.length === 0 || localCartData === undefined) {
    return [];
  } else {
    return JSON.parse(localCartData);
  }
};

const initialState = {
  isLoading: false,
  isError: false,
  products: [],
  featureProducts: [],
  isSingleLoading: false,
  singleProduct: {},
  filterWaleProducts: {},
  sortingValue: "highest",
  filterProducts: [],
  filters: {
    text: "",
    category: "all",
    rating: "",
    maxPrice: 0,
    price: 0,
  },
  cart: getLocalCartData(),
  totalItem: 0,
  shippingFee: 0 ,
  totalAmount: "",
};

const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const getProducts = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const response = await axios.get(url);
      const products = await response.data.products;
      dispatch({ type: "SET_API_DATA", payload: products });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };

  const getFilterProduct = async (url) => {
    dispatch({ type: "SET_LOADING" });
    try {
      const response = await axios.get(url);
      const filterProducts = await response.data.products;
      dispatch({ type: "SORTING_PRODUCTS", payload: filterProducts });
    } catch (error) {
      dispatch({ type: "API_ERROR" });
    }
  };

  const getSingleProduct = async (url) => {
    dispatch({ type: "SET_SINGLE_LOADING" });
    try {
      const response = await axios.get(url);
      const singleProduct = await response.data;
      dispatch({ type: "SET_SINGLE_PRODUCT", payload: singleProduct });
    } catch (error) {
      dispatch({ type: "SET_SINGLE_ERROR" });
    }
  };

  const sorting = () => {
    dispatch({ type: "GET_SORT_VALUE" });
  };

  const updateFilterValue = (event) => {
    let name = event.target.name;
    let value = event.target.value;

    return dispatch({ type: "UPDATE_FILTERS_VALUE", payload: { name, value } });
  };

  const clearFilters = () => {
    dispatch({ type: "CLEAR_FILTERS" });
  };

  const addToCart = (amount, product) => {
    dispatch({ type: "ADD_TO_CART", payload: { amount, product } });
  };

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: { id } });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  const increaseAmount = (quantity, max) => {
    dispatch({ type: "INCREASE_AMOUNT", payload: { quantity, max } });
  };
  const decreaseAmount = (Quantity, Max) => {
    dispatch({ type: "DECREASE_AMOUNT", payload: { Quantity, Max } });
  };

  useEffect(() => {
    dispatch({ type: "FILTER_PRODUCTS" });
  }, [state.filters]);

  useEffect(() => {
    getProducts(API);
  }, []);

  useEffect(() => {
    dispatch({type:"TOTAL_AMOUNT"})
    localStorage.setItem("whoopCart", JSON.stringify(state.cart));
  }, [state.cart]);

  return (
    <AppContext.Provider
      value={{
        ...state,
        getSingleProduct,
        sorting,
        getFilterProduct,
        updateFilterValue,
        clearFilters,
        addToCart,
        removeItem,
        clearCart,
        increaseAmount,
        decreaseAmount,
      }}
    >
      {children}
    </AppContext.Provider>
  );
};

const useProductContext = () => {
  return useContext(AppContext);
};

export { AppContext, DataProvider, useProductContext };
