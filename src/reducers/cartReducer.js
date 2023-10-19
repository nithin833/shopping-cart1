

const initialState = {
    cart: [],
    specialOffers: {
      cheese: 0, 
    },
  };
  
  const cartReducer = (state = initialState, action) => {
    switch (action.type) {
      case 'ADD_TO_CART':
        const newCart = [...state.cart];
        const specialOffers = { ...state.specialOffers };
  
        if (action.payload.name === 'Cheese') {
          
          if (specialOffers.cheese % 2 === 0) {
            newCart.push(action.payload);
          }
          specialOffers.cheese++;
        } else {
          newCart.push(action.payload);
        }
  
        return {
          ...state,
          cart: newCart,
          specialOffers,
        };
  
      case 'REMOVE_FROM_CART':
        
        const updatedCart = state.cart.filter((item) => item !== action.payload);
        const updatedSpecialOffers = { ...state.specialOffers };
        
        if (action.payload.name === 'Cheese') {
          updatedSpecialOffers.cheese--;
        }
  
        return {
          ...state,
          cart: updatedCart,
          specialOffers: updatedSpecialOffers,
        };
  
      default:
        return state;
    }
  };
  
  export default cartReducer;
  