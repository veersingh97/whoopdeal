const ProductReducer = (state, action) => {

  switch (action.type) {
    case "SET_LOADING":
      return {
        ...state,
        isLoading: true,
      };

    case "SET_API_DATA":
      const featuresData = action.payload.filter((curElem) => {
        return (
          curElem.brand === "Infinix" ||
          curElem.brand === "Microsoft Surface" ||
          curElem.brand === "Huawei" ||
          curElem.brand === "Impression of Acqua Di Gio" ||
          curElem.brand === "L'Oreal Paris" ||
          curElem.brand === "Dermive" ||
          curElem.brand === "Boho Decor" ||
          curElem.brand === "APPle"
        );
      });
      return {
        ...state,
        isLoading: false,
        products: action.payload,
        featureProducts: featuresData,
      };
    case "API_ERROR":
      return {
        ...state,
        isLoading: false,
        isError: true,
      };

    case "SET_SINGLE_LOADING":
      return {
        ...state,
        isSingleLoading: true,
      };

    case "SET_SINGLE_PRODUCT":
      return {
        ...state,
        isSingleLoading: false,
        singleProduct: action.payload,
      };

    case "SET_SINGLE_ERROR":
      return {
        ...state,
        isSingleLoading: false,
        isError: true,
      };

    case "GET_SORT_VALUE":
      let userSortValue = document.getElementById("sort");
      let sortValue = userSortValue.options[userSortValue.selectedIndex].value;
      return {
        ...state,
        sortingValue: sortValue,
      };

    case "SORTING_PRODUCTS":
      let newSortedProducts;
      let tempSortProducts = action.payload;

      if (state.sortingValue === "a-z") {
        newSortedProducts = tempSortProducts.sort((a, b) => {
          return a.title.localeCompare(b.title);
        });
      }

      if (state.sortingValue === "z-a") {
        newSortedProducts = tempSortProducts.sort((a, b) => {
          return b.title.localeCompare(a.title);
        });
      }

      if (state.sortingValue === "lowest") {
        const sortingProducts = (a, b) => {
          return a.price - b.price;
        };
        newSortedProducts = tempSortProducts.sort(sortingProducts);
      }

      if (state.sortingValue === "highest") {
        const sortingProducts = (a, b) => {
          return b.price - a.price;
        };
        newSortedProducts = tempSortProducts.sort(sortingProducts);
      }

      return {
        ...state,
        filterWaleProducts: newSortedProducts,
        filterProducts: action.payload,
        isLoading: false,
      };

    case "UPDATE_FILTERS_VALUE":
      const { name, value } = action.payload;
      return {
        ...state,
        filters: {
          ...state.filters,
          [name]: value,
        },
      };

    case "FILTER_PRODUCTS":
      let { products } = state;
      let tempFilterProducts = [...products];

      const { text, category, rating, price } = state.filters;

      if (text) {
        tempFilterProducts = tempFilterProducts.filter((curElem) => {
          return curElem.title.toLowerCase().includes(text);
        });
      }

      if (category !== "all") {
        tempFilterProducts = tempFilterProducts.filter((curElem) => {
          return curElem.category === category;
        });
      }
      if (rating) {
        tempFilterProducts = tempFilterProducts.filter((curElem) => {
          return Math.round(curElem.rating * 100) / 100 >= rating;
        });
      }

      if (price) {
        tempFilterProducts = tempFilterProducts.filter((curElem) => {
          return curElem.price <= price;
        });
      }
      return {
        ...state,
        filterProducts: tempFilterProducts,
      };

    case "CLEAR_FILTERS":
      return {
        ...state,
        filters: {
          ...state.filters,
          text: "",
          category: "all",
          rating: "",
          maxPrice: 0,
          price: 0,
        },
      };

    case "ADD_TO_CART":
      let { amount, product } = action.payload;
      state.totalItem = state.totalItem + amount;

      let existingProduct = state?.cart?.find((curElem) => {
        return curElem.id === product.id;
      });

      if (existingProduct) {
        let updateProductAmount = state?.cart?.map((curElem) => {
          if (curElem.id === existingProduct.id) {
            let newAmount = curElem.amount + amount;
            return {
              ...curElem,
              amount: newAmount,
            };
          } else {
            return curElem;
          }
        });

        return {
          ...state,
          cart: updateProductAmount,
          totalItem: state.totalItem,
        };
      } else {
        let cartProduct;
        cartProduct = {
          id: product.id,
          name: product.title,
          amount,
          price: product.price,
          image: product.images[0],
          max: product.stock,
        };

        return {
          ...state,
          cart: [...state.cart, cartProduct],
          totalItem: state.totalItem,
        };
      }

    case "REMOVE_ITEM":
      let { id } = action.payload;
      let updatedCart;
      updatedCart = state?.cart?.filter((curElem) => {
        return curElem.id !== id;
      });
      return {
        ...state,
        cart: updatedCart,
      };

    case "CLEAR_CART":
      return {
        ...state,
        cart: [],
        totalItem: 0,
      };

    case "INCREASE_AMOUNT":
      let { quantity, max } = action.payload;
      let newAmount = quantity;
      if (quantity >= 1 && quantity < max) {
        newAmount = newAmount + 1;
        state.totalItem = state.totalItem + 1;
      }

      let cartProducts = state.cart.map((curElem) => {
        if (curElem.max === max) {
          curElem.amount = newAmount;
        }
        return curElem;
      });
      return {
        ...state,
        cart: cartProducts,
        totalItem: state.totalItem,
      };

    case "DECREASE_AMOUNT":
      let { Quantity, Max } = action.payload;
      let newQuantity = Quantity;
      if (Quantity <= Max && Quantity > 1) {
        newQuantity = newQuantity - 1;
        state.totalItem = state.totalItem - 1;
      }

      let cartProduct = state.cart.map((curElem) => {
        if (curElem.max === Max) {
          curElem.amount = newQuantity;
        }
        return curElem;
      });
      return {
        ...state,
        cart: cartProduct,
        totalItem: state.totalItem,
      };

    case "TOTAL_AMOUNT":
      let totalOrderAmount = state?.cart?.reduce((previousValue, curElem)=>{
        return previousValue + (curElem.amount * curElem.price)
      },0)
      return {
        ...state,
        totalAmount:totalOrderAmount,
        shippingFee:state.totalItem * 10,
      };
    default:
      return state;
  }
};

export default ProductReducer;
